/**
 * 红苹果短剧落地页 - 交互脚本
 */

(function () {
  "use strict";

  // ========== 短剧数据（真实风格标题 + 免费可商用封面图）==========
  const dramas = [
    {
      id: 1,
      title: "十八岁太奶奶驾到，重整家族荣耀",
      episodes: 102,
      tags: ["家族", "家族振兴", "穿越"],
      category: "都市",
      cover: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=560&fit=crop&q=80"
    },
    {
      id: 2,
      title: "和离后我带女儿横扫魔域",
      episodes: 999,
      tags: ["玄幻", "系统", "异界"],
      category: "玄幻",
      cover: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=560&fit=crop&q=80"
    },
    {
      id: 3,
      title: "重生之我救郭靖",
      episodes: 260,
      tags: ["脑洞", "重生", "系统"],
      category: "脑洞",
      cover: "https://images.unsplash.com/重生之我救郭靖.jpg?w=400&h=560&fit=crop&q=80"
    },
    {
      id: 4,
      title: "退役归来，这个保镖不好惹",
      episodes: 100,
      tags: ["战神", "都市"],
      category: "都市",
      cover: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=560&fit=crop&q=80"
    },
    {
      id: 5,
      title: "一念沉沦，霍总心动了",
      episodes: 96,
      tags: ["爱情", "都市爱情", "暧昧拉扯"],
      category: "甜宠",
      cover: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=560&fit=crop&q=80"
    },
    {
      id: 6,
      title: "人前小保姆，人后是亲妈",
      episodes: 78,
      tags: ["爱情", "都市爱情", "日久生情"],
      category: "甜宠",
      cover: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=560&fit=crop&q=80"
    },
    {
      id: 7,
      title: "聚宝仙盆之杂灵根才是真BOSS",
      episodes: 300,
      tags: ["玄幻", "异界"],
      category: "玄幻",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=560&fit=crop&q=80"
    },
    {
      id: 8,
      title: "魔神人生：弃子问天",
      episodes: 586,
      tags: ["玄幻", "穿越", "系统"],
      category: "玄幻",
      cover: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=560&fit=crop&q=80"
    },
    {
      id: 9,
      title: "认下混混老爹，我一路青云",
      episodes: 75,
      tags: ["家庭", "家庭伦理", "逆风翻盘"],
      category: "家庭",
      cover: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=560&fit=crop&q=80"
    },
    {
      id: 10,
      title: "系统让我攻略弟弟",
      episodes: 58,
      tags: ["家庭", "家庭伦理", "逆风翻盘"],
      category: "家庭",
      cover: "/assets/images/be0364cb-1c8b-4957-a44e-9ff1a63f8d70.jpg?w=400&h=560&fit=crop&q=80"
    },
    {
      id: 11,
      title: "重生之我救郭靖",
      episodes: 168,
      tags: ["脑洞", "穿越", "求生"],
      category: "脑洞",
      cover: "https://images.unsplash.com/重生之我救郭靖.jpg?w=400&h=560&fit=crop&q=80"
    },
    {
      id: 12,
      title: "王妈在顾家当保姆后全家只会搞笑了",
      episodes: 86,
      tags: ["喜剧", "轻喜剧", "反转"],
      category: "都市",
      cover: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=560&fit=crop&q=80"
    }
  ];

  // ========== DOM 引用 ==========
  const hotGrid = document.getElementById("hotGrid");
  const categoryGrid = document.getElementById("categoryGrid");
  const catTabs = document.querySelectorAll(".cat-tab");
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const headerDownloadBtn = document.getElementById("headerDownloadBtn");
  const header = document.getElementById("header");

  // ========== 渲染卡片 ==========
  function createCard(drama) {
    const tagsHtml = drama.tags
      .slice(0, 3)
      .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
      .join("");

    return `
      <article class="drama-card" data-id="${drama.id}" role="listitem">
        <div class="drama-cover">
          <img src="${drama.cover}" alt="${escapeHtml(drama.title)} 封面" loading="lazy" width="300" height="420">
          <span class="drama-ep">全${drama.episodes}集</span>
        </div>
        <div class="drama-info">
          <h3 class="drama-title">${escapeHtml(drama.title)}</h3>
          <div class="drama-tags">${tagsHtml}</div>
        </div>
      </article>
    `;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function renderGrid(container, list) {
    if (!container) return;
    container.innerHTML = list.map(createCard).join("");
  }

  // 热播：取前 8 部
  renderGrid(hotGrid, dramas.slice(0, 8));

  // 分类：全部
  renderGrid(categoryGrid, dramas);

  // ========== 分类筛选 ==========
  catTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      catTabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      const cat = tab.dataset.cat;
      const filtered =
        cat === "all" ? dramas : dramas.filter((d) => d.category === cat || d.tags.includes(cat));
      renderGrid(categoryGrid, filtered);
    });
  });

  // ========== 移动端菜单 ==========
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const open = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
      menuToggle.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
    });

    // 点击导航链接后关闭菜单
    mainNav.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ========== 滚动时导航高亮 ==========
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function updateActiveNav() {
    const scrollY = window.scrollY + 100;
    let current = "";
    sections.forEach((sec) => {
      if (sec.offsetTop <= scrollY) {
        current = sec.getAttribute("id") || "";
      }
    });
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });

  // ========== Header 下载按钮 ==========
  if (headerDownloadBtn) {
    headerDownloadBtn.addEventListener("click", () => {
      document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  // ========== 下载按钮占位提示 ==========
  document.querySelectorAll(".store-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      //e.preventDefault();
      //alert("请前往官方应用商店搜索「红苹果短剧」下载正式版本。\n本页面仅为展示落地页示例。");
    });
  });

  // ========== 简单视差 / 浮动卡片轻微动效 ==========
  const floatingCards = document.querySelectorAll(".floating-card");
  if (floatingCards.length && window.matchMedia("(min-width: 901px)").matches) {
    window.addEventListener(
      "mousemove",
      (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 12;
        const y = (e.clientY / window.innerHeight - 0.5) * 8;
        floatingCards.forEach((card, i) => {
          const depth = (i + 1) * 0.4;
          card.style.transform = `translate(${x * depth}px, ${y * depth}px) rotate(${parseFloat(getComputedStyle(card).getPropertyValue("transform")?.match(/rotate\(([^)]+)\)/)?.[1] || "0deg")})`;
        });
      },
      { passive: true }
    );
  }

  console.log("[红苹果短剧] 落地页已加载");
})();
