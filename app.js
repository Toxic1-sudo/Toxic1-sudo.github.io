const siteConfig = {
  siteName: "林屿手记",
  author: "林屿",
  authorEn: "LIN YU",
  bio: "产品设计师与独立开发者。这里记录我对技术、设计和生活的观察，也收留一些还没有答案的问题。",
};

const articles = [
  {
    id: "slow-work",
    date: "2026.07.24",
    isoDate: "2026-07-24",
    category: "随想",
    title: "停止追赶效率之后，我重新学会了工作",
    excerpt: "关于注意力、创作节奏，以及如何留下一点不被衡量的时间。",
    image: "assets/featured-desk.png",
    imageAlt: "窗边书桌、笔记本和一杯咖啡的插画",
    readTime: "8 分钟阅读",
    body: `
      <p>很长一段时间，我把“工作得好”理解成“工作得快”。清单越短，窗口切换越熟练，一天就越像被妥善使用过。直到某个下午，我在三个项目之间来回跳转，忙得几乎没有停顿，却想不起自己究竟完成了什么。</p>
      <p>效率工具没有错。问题是，当所有时间都必须证明自己的价值，我们也会渐渐失去感受时间的能力。</p>
      <blockquote>好的工作不是持续加速，而是知道什么时候值得慢下来。</blockquote>
      <h3>给注意力留一扇门</h3>
      <p>我开始把每天最清醒的两个小时留给一件重要但不紧急的事。不开消息，不统计番茄钟，也不急着产出一个可以展示的结果。最初有些不安，后来却发现，许多真正有用的想法都需要经过一段看似无事发生的时间。</p>
      <p>现在，我仍然使用清单和日历。但它们不再是审判一天的成绩单，而只是帮助我看清方向的地图。工作重新变成一种有呼吸的活动，而不是一场永远追不上的比赛。</p>
    `,
  },
  {
    id: "design-restraint",
    date: "2026.07.18",
    isoDate: "2026-07-18",
    category: "设计",
    title: "克制不是少做，而是把力气用在真正重要的地方",
    excerpt: "一个界面从热闹走向清晰，往往需要的不是灵感，而是一连串诚实的取舍。",
    image: "assets/design-grid.png",
    imageAlt: "网格纸、色块和排版稿的插画",
    readTime: "6 分钟阅读",
    body: `
      <p>设计评审里最容易提出的建议是“再丰富一点”。多一个入口，多一种状态，多一处强调，看起来都在增加价值。但当每个局部都试图说话，页面最后只剩下一片噪声。</p>
      <p>克制并不意味着把一切做得寡淡。它要求我们更明确地回答：用户此刻最需要看见什么，完成什么，以及什么可以稍后再出现。</p>
      <h3>层级是一种承诺</h3>
      <p>字号、颜色、间距和位置都在替产品做承诺。最大的按钮应该真的最重要，最醒目的数字应该真的值得被关注。视觉层级一旦和任务优先级错位，界面就会变得礼貌但不诚实。</p>
      <blockquote>删除一个元素并不自动带来简洁，建立清楚的关系才会。</blockquote>
      <p>我现在更愿意在设计初期先写出三个层级：必须立刻看见、需要时找到、可以被省略。很多艰难的视觉决定，会因此变成更容易讨论的产品决定。</p>
    `,
  },
  {
    id: "small-tools",
    date: "2026.07.09",
    isoDate: "2026-07-09",
    category: "技术",
    title: "我为什么喜欢做那些只有自己使用的小工具",
    excerpt: "没有增长目标，也没有发布压力，小工具让编程重新变成一种直接的创造。",
    image: "assets/code-window.png",
    imageAlt: "代码编辑器窗口与便签的插画",
    readTime: "5 分钟阅读",
    body: `
      <p>我写过一个给照片按日期改名的脚本，一个只显示今天三件事的小网页，还有一个把散落笔记合并成周报的命令行工具。它们都很小，也大多没有第二个用户。</p>
      <p>正因为如此，需求格外清楚：那个在使用过程中感到别扭的人就是我。没有访谈转述，没有指标猜测，问题和反馈之间的距离短得让人愉快。</p>
      <h3>足够好，然后真的去用</h3>
      <p>个人工具最珍贵的限制，是它不需要假装自己会成为平台。一个文本文件可以做数据库，一个按钮可以覆盖全部流程，偶尔出现的错误也可以被接受。</p>
      <blockquote>有些代码的意义，不是被很多人看见，而是替一个具体的人省下一点心力。</blockquote>
      <p>这些小项目让我记起，编程最初吸引我的并不是规模，而是想法可以在几个小时后变成手边真实可用的东西。</p>
    `,
  },
  {
    id: "walking-city",
    date: "2026.06.30",
    isoDate: "2026-06-30",
    category: "生活",
    title: "用双脚重新认识一座熟悉的城市",
    excerpt: "当目的地不再重要，街道才开始显露自己的表情。",
    image: "assets/city-window.png",
    imageAlt: "傍晚街道、窗户和城市灯光的插画",
    readTime: "4 分钟阅读",
    body: `
      <p>搬来杭州的第五年，我忽然发现自己熟悉的是一组地铁站名，而不是这座城市。公司、家、常去的商场，几条高效路线把生活折叠成了很小的一块。</p>
      <p>于是我开始在周末随意坐一班公交，在一个陌生的站下车，再慢慢走回来。没有攻略，也不刻意寻找景点。</p>
      <h3>速度之外的细节</h3>
      <p>步行让很多原本透明的东西重新出现：修鞋铺门口的旧木凳，傍晚准时响起的学校铃声，一棵把围墙顶出裂缝的香樟树。</p>
      <blockquote>熟悉一座城市，不是知道如何最快抵达，而是拥有一些愿意绕路经过的地方。</blockquote>
      <p>现在地图上多了许多没有名字的坐标。它们不是目的地，却让这座城市终于和我的生活发生了关系。</p>
    `,
  },
  {
    id: "reading-notes",
    date: "2026.06.16",
    isoDate: "2026-06-16",
    category: "随想",
    title: "不再摘抄之后，我的读书笔记反而更有用了",
    excerpt: "从收藏漂亮句子，到记录一本书究竟改变了我哪一个判断。",
    image: "assets/featured-desk.png",
    imageAlt: "摊开的书和手写笔记插画",
    readTime: "7 分钟阅读",
    body: `
      <p>过去我的读书笔记像一座句子仓库。划线很多，分类精细，但很少重新打开。那些文字在被收藏的一刻就完成了使命，没有真正进入我的思考。</p>
      <p>后来我给自己定了一个简单规则：每章只写一个问题。它可以是“作者真正反对的是什么”，也可以是“这和我最近的经历有什么关系”。</p>
      <h3>笔记应该留下摩擦</h3>
      <p>好的笔记不一定完整，却应该保留我和一本书发生碰撞的地方。困惑、反对、联想，往往比总结更能帮助我在几个月后找回当时的自己。</p>
      <blockquote>阅读不是把别人的句子搬进仓库，而是允许它们重新摆放你心里的家具。</blockquote>
      <p>现在我的笔记少了很多，却更像一条可以继续走下去的路。</p>
    `,
  },
  {
    id: "ai-collaboration",
    date: "2026.05.28",
    isoDate: "2026-05-28",
    category: "技术",
    title: "把 AI 当作搭档，而不是一台答案机器",
    excerpt: "最好的协作并不从“给我结果”开始，而从共享问题、约束和判断标准开始。",
    image: "assets/code-window.png",
    imageAlt: "电脑屏幕中的对话与代码插画",
    readTime: "9 分钟阅读",
    body: `
      <p>当我们只向 AI 索取答案，得到的通常也是最平均的答案。它可能正确、完整，却很难真正贴合手头的情境。</p>
      <p>我逐渐发现，更有效的方式是先把工作现场打开：目标是什么，已经尝试过什么，哪些限制不能动，以及我会用什么标准判断结果。</p>
      <h3>把判断留在回路里</h3>
      <p>AI 可以快速展开可能性，但方向感仍然来自人。好的协作不是把思考外包，而是让探索的成本变低，让我们有余力比较更多路径。</p>
      <blockquote>工具最有价值的时刻，不是替你决定，而是帮助你看见自己原本忽略的选择。</blockquote>
      <p>所以我更喜欢把它看成一位耐心、知识丰富、偶尔需要被纠正的同事。清楚地表达问题，本身也会迫使我更清楚地理解问题。</p>
    `,
  },
];

const state = {
  category: "全部",
  query: "",
};

const articleList = document.querySelector("#article-list");
const articleCount = document.querySelector("#article-count");
const emptyState = document.querySelector("#empty-state");
const dialog = document.querySelector("#article-dialog");

function applySiteConfig() {
  document.title = siteConfig.siteName;
  document.querySelector("#brand-name").textContent = siteConfig.siteName;
  document.querySelector("#author-en").textContent = siteConfig.authorEn;
  document.querySelector("#author-bio").textContent = siteConfig.bio;
  document.querySelector("#footer-name").textContent = siteConfig.author;
}

function filteredArticles() {
  const normalizedQuery = state.query.trim().toLowerCase();

  return articles.filter((article) => {
    const matchesCategory = state.category === "全部" || article.category === state.category;
    const searchable = `${article.title} ${article.excerpt} ${article.category}`.toLowerCase();
    const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);
    return matchesCategory && matchesQuery;
  });
}

function renderArticles() {
  const visibleArticles = filteredArticles();
  articleCount.textContent = `${visibleArticles.length} 篇文章`;
  emptyState.hidden = visibleArticles.length !== 0;

  articleList.innerHTML = visibleArticles
    .map(
      (article) => `
        <article class="article-row" data-article="${article.id}" tabindex="0">
          <time class="article-date" datetime="${article.isoDate}">${article.date}</time>
          <div class="article-main">
            <span class="article-category">${article.category}</span>
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
          </div>
          <div class="article-thumb">
            <img src="${article.image}" alt="${article.imageAlt}" loading="lazy" />
          </div>
          <button class="article-open" type="button" aria-label="阅读《${article.title}》">
            <i data-lucide="arrow-up-right" aria-hidden="true"></i>
          </button>
        </article>
      `,
    )
    .join("");

  refreshIcons();
}

function openArticle(articleId, updateHash = true) {
  const article = articles.find((item) => item.id === articleId);
  if (!article) return;

  document.querySelector("#reader-category").textContent = article.category;
  document.querySelector("#reader-date").textContent = article.date;
  document.querySelector("#reader-time").textContent = article.readTime;
  document.querySelector("#reader-title").textContent = article.title;
  document.querySelector("#reader-lead").textContent = article.excerpt;
  document.querySelector("#reader-body").innerHTML = article.body;

  if (!dialog.open) dialog.showModal();
  if (updateHash) history.replaceState(null, "", `#${article.id}`);
}

function closeArticle() {
  dialog.close();
  if (location.hash && articles.some((article) => `#${article.id}` === location.hash)) {
    history.replaceState(null, "", `${location.pathname}${location.search}`);
  }
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-button.active")?.classList.remove("active");
    button.classList.add("active");
    state.category = button.dataset.category;
    renderArticles();
  });
});

articleList.addEventListener("click", (event) => {
  const row = event.target.closest(".article-row");
  if (row) openArticle(row.dataset.article);
});

articleList.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches(".article-row")) {
    event.preventDefault();
    openArticle(event.target.dataset.article);
  }
});

document.querySelectorAll(".open-article").forEach((button) => {
  button.addEventListener("click", () => openArticle(button.dataset.article));
});

const searchPanel = document.querySelector("#search-panel");
const searchInput = document.querySelector("#search-input");

function setSearchOpen(isOpen) {
  searchPanel.classList.toggle("open", isOpen);
  searchPanel.setAttribute("aria-hidden", String(!isOpen));
  if (isOpen) {
    window.setTimeout(() => searchInput.focus(), 50);
  }
}

document.querySelector("#search-toggle").addEventListener("click", () => setSearchOpen(true));
document.querySelector("#search-close").addEventListener("click", () => setSearchOpen(false));
searchInput.addEventListener("input", () => {
  state.query = searchInput.value;
  renderArticles();
  document.querySelector("#articles").scrollIntoView({ block: "start" });
});

const themeToggle = document.querySelector("#theme-toggle");

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark", isDark);
  localStorage.setItem("blog-theme", theme);
  themeToggle.innerHTML = `<i data-lucide="${isDark ? "sun" : "moon"}" aria-hidden="true"></i>`;
  themeToggle.setAttribute("aria-label", isDark ? "切换浅色模式" : "切换深色模式");
  refreshIcons();
}

themeToggle.addEventListener("click", () => {
  applyTheme(document.body.classList.contains("dark") ? "light" : "dark");
});

const savedTheme = localStorage.getItem("blog-theme");
const preferredTheme =
  savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

const menuToggle = document.querySelector("#menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  mobileNav.setAttribute("aria-hidden", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "关闭菜单" : "打开菜单");
  menuToggle.innerHTML = `<i data-lucide="${isOpen ? "x" : "menu"}" aria-hidden="true"></i>`;
  refreshIcons();
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    mobileNav.setAttribute("aria-hidden", "true");
    menuToggle.innerHTML = '<i data-lucide="menu" aria-hidden="true"></i>';
    refreshIcons();
  });
});

document.querySelector("#dialog-close").addEventListener("click", closeArticle);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeArticle();
});
dialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeArticle();
});

document.querySelector("#copy-link").addEventListener("click", async (event) => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText(location.href);
    button.lastChild.textContent = " 已复制";
  } catch {
    button.lastChild.textContent = " 复制失败";
  }

  window.setTimeout(() => {
    button.lastChild.textContent = " 复制链接";
  }, 1600);
});

document.querySelector("#newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#email-input");
  const message = document.querySelector("#form-message");
  message.textContent = `谢谢，下一封信会寄到 ${input.value}`;
  event.currentTarget.reset();
});

document.querySelector("#back-to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !event.ctrlKey && !event.metaKey && !event.altKey) {
    const tagName = document.activeElement?.tagName;
    if (tagName !== "INPUT" && tagName !== "TEXTAREA") {
      event.preventDefault();
      setSearchOpen(true);
    }
  }

  if (event.key === "Escape" && searchPanel.classList.contains("open")) {
    setSearchOpen(false);
  }
});

applySiteConfig();
applyTheme(preferredTheme);
renderArticles();
document.querySelector("#current-year").textContent = new Date().getFullYear();
refreshIcons();

const initialArticle = location.hash.slice(1);
if (articles.some((article) => article.id === initialArticle)) {
  openArticle(initialArticle, false);
}
