---
title: "Web 安全资源清单：37 个能直接打开的站点和仓库"
date: 2026-11-21 23:30:00 +0800
categories: [资源]
tags: [PHP, CTF, 学习路线, 资源整理]
---

这份清单是给自己攒的索引。内容全部是别人写的，下面每一条都直接链到原始出处，版权归原作者，我只在每条后面记一句为什么值得看。链接和 star 数都是 2026-11-21 那天核对的。

## 一、PHP 安全

主攻方向，所以挑得最细。开头六条来自同一份在线笔记 Learn-Web-Hacking，它是少数把 phar 单独开成一章的。

- [Learn-Web-Hacking · PHP 章](https://websec.readthedocs.io/zh/latest/language/php/index.html) — 5591★，PHP 拆成 16 节，唯一有独立 phar 章的
- [Learn-Web-Hacking · Phar 专章](https://websec.readthedocs.io/zh/latest/language/php/phar.html) — phar 结构、原理、元数据反序列化
- [Learn-Web-Hacking · 反序列化](https://websec.readthedocs.io/zh/latest/language/php/unserialize.html) — POP 链的入口和魔术方法
- [Learn-Web-Hacking · phar 触发点](https://websec.readthedocs.io/zh/latest/language/php/sink.html#phar) — 哪些函数会触发，最实用的一节
- [Learn-Web-Hacking · htaccess 注入](https://websec.readthedocs.io/zh/latest/language/php/htaccess.html) — 羊城杯 easyphp 那类题
- [Learn-Web-Hacking · PHP 流与伪协议](https://websec.readthedocs.io/zh/latest/language/php/stream.html) — php://filter 全家
- [Learn-Web-Hacking 源码仓库](https://github.com/LyleMi/Learn-Web-Hacking) — 5591★，上面那份笔记的仓库

剩下的是仓库型的，按用途分：

- [H3rmesk1t/Security-Learning](https://github.com/H3rmesk1t/Security-Learning) — 348★，PHP 专题分了目录：Proc / htaccess / 伪协议 / 原生类 / 反序列化 / 命令执行
- [H3rmesk1t · PHPSec 目录](https://github.com/H3rmesk1t/Security-Learning/tree/main/PHPSec) — 直接进 PHP 专题列表
- [Dest1ny-Sec/Des-CTF-Knowledge](https://github.com/Dest1ny-Sec/Des-CTF-Knowledge) — 519★，PHP 反序列化总结 + 代码审计 + PAYLOAD-CHEATSHEET + 1000 多篇 WP
- [hongriSec/PHP-Audit-Labs](https://github.com/hongriSec/PHP-Audit-Labs) — 1900★，红日安全 17 天代码审计，带 Docker 靶场
- [CTF Wiki · PHP 代码审计](https://ctf-wiki.org/web/php/php/) — 审计思路（输入 → 过滤 → 危险函数），内容偏老，payload 别照抄
- [Hello-CTF · PHP 知识点](https://hello-ctf.com/hc-skill/web/php/) — 单页速查，每条考点挂着比赛名，NSSCTF 有配套题

## 二、CTF 综合与 WP

- [Web-CTF-Cheatsheet](https://github.com/w181496/Web-CTF-Cheatsheet) — 3005★，单 README 速查表，忘了绕过怎么写就 Ctrl+F
- [Web-CTF-Cheatsheet · README 直链](https://github.com/w181496/Web-CTF-Cheatsheet/blob/master/README.md) — 不用点目录，直接看正文
- [SexyBeast233/SecBooks](https://github.com/SexyBeast233/SecBooks) — 1330★，各家安全文库合集，PDF 和笔记大乱斗
- [IHK-ONE/MISC_Guide](https://github.com/IHK-ONE/MISC_Guide) — MISC 从入门到精通，取证类用得上
- [Zst0NE/Network-Security-Notes](https://github.com/Zst0NE/Network-Security-Notes) — 个人网络安全笔记，MISC 思路那篇
- [Hello-CTF 主站](https://hello-ctf.com/) — 教程 + 赛事中心 + 工具百科

## 三、渗透与提权

- [xiaoy-sec/Pentest_Note](https://github.com/xiaoy-sec/Pentest_Note) — 4172★，渗透测试常规操作记录，细到命令级
- [ffffffff0x/1earn](https://github.com/ffffffff0x/1earn) — 5739★，安全知识框架，当地图翻
- [狼队知识库](https://wiki.wgpsec.org/knowledge/) — 攻防知识库，中文
- [PENETRATION NOTE](https://www.heresecurity.wiki/) — 渗透笔记站点
- [HacKerQWQ's Studio](https://hackerqwq.github.io/) — 博客，有 Linux 提权系列
- [icybersec · vulnhub](https://icybersec.gitbook.io/cybersecuritynote) — 靶机通关笔记
- [先知社区 · XXE 深入理解](https://xz.aliyun.com/news/2994) — 中文深度文

## 四、字典与工具

- [danielmiessler/SecLists](https://github.com/danielmiessler/SecLists) — 业界标准字典集，本地那两个 fuzzDict 的上游就是它
- [rootphantomer/Blasting_dictionary](https://github.com/rootphantomer/Blasting_dictionary) — 5302★，中文爆破字典
- [hungslab/awd-tools](https://github.com/hungslab/awd-tools) — AWD 竞赛脚本 + 经验笔记
- [ambionics/phpggc](https://github.com/ambionics/phpggc) — 3924★，POP 链生成器，172 条链
- [swisskyrepo/PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings) — payload 大全，当字典用

## 五、靶场

- [青岑网安 CTF](https://ctf.qingcen.net/) — 国内可直连
- [Root Me](https://www.root-me.org/?lang=zh) — 法国平台，有中文界面，难度梯度细，免费关多
- [TryHackMe](https://tryhackme.com/hacktivities) — 英文，引导式房间，入门友好
- [p3ri0d/phar_test](https://github.com/p3ri0d/phar_test) — phar 反序列化最小复现，4 个文件，跟 SimplePHP 结构一样

## 六、概念文档

- [MDN · IDOR 越权](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/IDOR) — 写 WP 描述漏洞类型可以引这个
- [PHP 官方中文手册](https://www.php.net/manual/zh/) — 查函数行为最权威的来源

## 七、phar 这条线怎么走

上面链接不少，但真要顺着 phar 学，顺序别乱：

- 读 [Phar 专章](https://websec.readthedocs.io/zh/latest/language/php/phar.html)，弄清 stub / manifest / contents / signature 四段
- 看 [phar 触发点](https://websec.readthedocs.io/zh/latest/language/php/sink.html#phar)，记哪些函数会触发
- 对照 [反序列化](https://websec.readthedocs.io/zh/latest/language/php/unserialize.html)，想 POP 链怎么塞进 metadata
- 把 [phar_test](https://github.com/p3ri0d/phar_test) 拉下来本地跑一遍
- 回头看 [H3rmesk1t 的反序列化那篇](https://github.com/H3rmesk1t/Security-Learning/tree/main/PHPSec)，补实战细节

## 参考链接

以上内容都来自下面这些站点和仓库，本文只做索引和挑选，正文、payload、图都是原作者的：

- Learn-Web-Hacking 在线笔记：<https://websec.readthedocs.io/zh/latest/>
- Learn-Web-Hacking 仓库：<https://github.com/LyleMi/Learn-Web-Hacking>
- H3rmesk1t/Security-Learning：<https://github.com/H3rmesk1t/Security-Learning>
- Dest1ny-Sec/Des-CTF-Knowledge：<https://github.com/Dest1ny-Sec/Des-CTF-Knowledge>
- hongriSec/PHP-Audit-Labs：<https://github.com/hongriSec/PHP-Audit-Labs>
- w181496/Web-CTF-Cheatsheet：<https://github.com/w181496/Web-CTF-Cheatsheet>
- CTF Wiki：<https://ctf-wiki.org/>
- Hello-CTF：<https://hello-ctf.com/>
- 狼队知识库：<https://wiki.wgpsec.org/knowledge/>
- 先知社区：<https://xz.aliyun.com/>
- Hello-CTF / IHK-ONE、Zst0NE、SexyBeast233 等 MISC 与合集类仓库见上文对应链接
- danielmiessler/SecLists、rootphantomer/Blasting_dictionary、ambionics/phpggc、swisskyrepo/PayloadsAllTheThings、hungslab/awd-tools：见上文「字典与工具」
- MDN Web Security：<https://developer.mozilla.org/en-US/docs/Web/Security>
- PHP 官方手册：<https://www.php.net/manual/zh/>
