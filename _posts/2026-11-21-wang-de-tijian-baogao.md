---
title: "ISCTF 王的体检报告：robots.txt 起手，四层门绕进 flag"
date: 2026-11-21 21:40:00 +0800
categories: [CTF]
tags: [ISCTF, Web, 信息收集, HTTP]
---

这题是 ISCTF 的一道 Web 题，叫"王的体检报告"。没有源码，只给一个地址，全靠从页面上抠线索往上爬。四层关卡一层套一层，每层都在教一个 HTTP 的基础概念，出题人是用心的。

记录一下完整过程。

## 首页直接告诉你去看 robots

打开就是个赛事官网的样子，但正文里藏了一句 TIP：

> 体检相关接口不在明面上，先去看看本站的 **robots.txt**。

![首页](https://toxic1-sudo.github.io/assets/posts/wang-de-tijian-baogao/01-home.jpg)

那就看呗。

## 第一层：robots.txt 泄露隐藏路径

```bash
$ curl http://110.42.47.164:32063/robots.txt

# 体检接口别用浏览器直接访问（会 405）——
# 这里只负责告诉你它在哪，方法用对了才有结果。
Disallow: /api/healthcheck

# VIP 日托的"内网入口页"同理，直接用浏览器访问什么也看不到，
# 但它负责把后面要用的 Referer 源头地址告诉你。
Disallow: /vip-daycare
```

![robots.txt](https://toxic1-sudo.github.io/assets/posts/wang-de-tijian-baogao/02-robots.jpg)

拿到两个隐藏路径：`/api/healthcheck` 和 `/vip-daycare`。

## 第二层：405 — 方法不能用 GET

浏览器直接访问 `/api/healthcheck`：

![405 页面](https://toxic1-sudo.github.io/assets/posts/wang-de-tijian-baogao/03-405.jpg)

返回 **405 Method Not Allowed**。页面是个教学终端风格的错误页，大意是说"HTTP 不只有 GET，每个接口都有允许的方法"。

真实响应头里也写了 `Allow: POST`。OK，那就改成 POST。

## 第三层：403 — 伪装官方体检工具

```bash
$ curl -X POST http://110.42.47.164:32063/api/healthcheck

HTTP/1.1 403 Forbidden
```

403 页面写了：只接受"官方体检工具"发起的检查，工具名字在内网入口页上。

那就去 `/vip-daycare` 看看（也是个终端风格页面，"赛务内网"的感觉）：

页面里明确写着：**仅供 `UtopiaHealthScanner` 发起检查**。另外给了 Referer 提示——"Referer 的谜底就藏在这个地址里"。

所以要带上两个请求头：

- `User-Agent: UtopiaHealthScanner`
- `Referer: http://110.42.47.164:32063/vip-daycare`

## 拿到凭证

```bash
curl -X POST \
  -A "UtopiaHealthScanner" \
  -H "Referer: http://110.42.47.164:32063/vip-daycare" \
  http://110.42.47.164:32063/api/healthcheck
```

返回：

```json
{
  "msg": "体检通过。以下是一次性取件凭证与取件地址（用后即焚，请立即使用）：",
  "next_target_path": "vip-daycare-preview-3c9d04",
  "next_target_token": "JucLCb06ujZBgenVLZ10wcbZje6W9AY5F5R7sEMRDYY",
  "set_cookie_hint": "Cookie: next-target=<取件凭证>",
  "ok": true
}
```

三个东西：

- **取件地址**：`vip-daycare-preview-3c9d04`
- **取件凭证**：`JucLCb06...`（就是 token）
- **用法提示**：Cookie 填 `next-target=<token>`

## 第四层：取件——格式对了才出结果

拿到 `vip-daycare-preview-3c9d04` 之后，最直觉的做法当然是直接访问：

```text
GET /vip-daycare-preview-3c9d04   ← 404
```

**这个字符串不是 URL 路径，而是要拼在 `/vip-daycare/preview/` 后面的一个参数**：

```text
GET /vip-daycare/preview/vip-daycare-preview-3c9d04
Cookie: next-target=<token>
```

就这个格式。`/vip-daycare/preview/` 是路由，`vip-daycare-preview-3c9d04` 是传给路由的参数。

验证：

- 带正确 Cookie → **200，返回 flag**
- 不带 Cookie → **403**
- 路径写错 → **404**

![解题结果](https://toxic1-sudo.github.io/assets/posts/wang-de-tijian-baogao/04-flag.jpg)

响应：

```json
{
  "flag": "ISCTF{644b2f5aeae5dd36ad8e5cc55c64b47e}",
  "msg": "体检完成——master flag 已交付。赛事因你而更安全。",
  "ok": true
}
```

## 完整复现脚本

```python
import json, urllib.request

B = 'http://110.42.47.164:32063'
UA = 'UtopiaHealthScanner'

req = urllib.request.Request(
    B + '/api/healthcheck',
    method='POST',
    headers={'User-Agent': UA, 'Referer': B + '/vip-daycare'}
)
d = json.load(urllib.request.urlopen(req, timeout=20))
path = d['next_target_path']
token = d['next_target_token']
print(f'path={path}  token={token}')

url = f'{B}/vip-daycare/preview/{path}'
req2 = urllib.request.Request(url, headers={
    'User-Agent': UA,
    'Cookie': f'next-target={token}',
    'Referer': B + '/vip-daycare'
})
resp = urllib.request.urlopen(req2, timeout=15)
result = json.loads(resp.read())
print('FLAG:', result['flag'])
```

## 复盘

四层其实对应四个 HTTP 基础点：**robots.txt 是信息收集入口、405 是方法限制、403 是身份伪装、404 与 200 的区别是路由格式**。

值得记下的两个坑：

一是 `Allow: POST` 在响应头里，页面上只写了"方法不对"。不看响应头的人会一直用 GET 试。

二是最后一层那个字符串，看着像路径其实是参数。判断办法是试着把返回的字段名和 URL 结构对一下——`next_target_path` 叫 path，但实际是 path 的最后一段，不是整条路径。这种命名误导在 CTF 里很常见，卡住的时候不如下手多试两种拼法。
