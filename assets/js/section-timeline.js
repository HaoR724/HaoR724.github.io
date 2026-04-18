document.addEventListener("DOMContentLoaded", () => {
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const configs = [
    {
      container: ".home-shell",
      timeline: ".home-timeline",
      sections: ".home-section",
      label: ".home-section-label span",
      current: ".home-timeline__current",
      nav: ".home-timeline__nav",
      itemClass: "home-timeline__item",
      dotClass: "home-timeline__dot",
      activationRatio: 0.28,
    },
    {
      container: ".detail-shell--project",
      timeline: ".detail-shell--project .detail-timeline",
      sections: ".detail-shell__content h2",
      label: null,
      current: ".detail-shell--project .detail-timeline__current",
      nav: ".detail-shell--project .detail-timeline__nav",
      itemClass: "detail-timeline__item",
      dotClass: "detail-timeline__dot",
      activationRatio: 0.24,
    },
    {
      container: ".detail-shell--cv",
      timeline: ".detail-shell--cv .detail-timeline",
      sections: ".detail-shell__content .anchor",
      label: null,
      current: ".detail-shell--cv .detail-timeline__current",
      nav: ".detail-shell--cv .detail-timeline__nav",
      itemClass: "detail-timeline__item",
      dotClass: "detail-timeline__dot",
      activationRatio: 0.24,
    },
  ];

  const getHeadingText = (node, labelSelector) => {
    if (labelSelector) {
      const label = node.querySelector(labelSelector);
      return label ? label.textContent.trim() : "";
    }

    if (node.classList.contains("anchor")) {
      const card = node.nextElementSibling;
      const title = card?.querySelector(".card-title");
      return title ? title.textContent.trim() : "";
    }

    return node.textContent.replace(/\s+/g, " ").trim();
  };

  const getHighlightTarget = (node) => {
    if (node.classList.contains("anchor")) {
      return node.nextElementSibling || node;
    }

    return node;
  };

  const mountTimeline = (config) => {
    const container = document.querySelector(config.container);
    const timeline = document.querySelector(config.timeline);
    const current = document.querySelector(config.current);
    const nav = document.querySelector(config.nav);
    const rail = timeline?.querySelector(".home-timeline__rail, .detail-timeline__rail");

    if (!container || !timeline || !current || !nav) return;

    const sections = Array.from(container.querySelectorAll(config.sections)).filter((node) => getHeadingText(node, config.label));
    if (!sections.length) return;

    const items = sections.map((section, index) => {
      const text = getHeadingText(section, config.label);
      if (!section.id) {
        section.id = `${config.itemClass}-${index + 1}`;
      }

      const li = document.createElement("li");
      li.className = config.itemClass;

      const dot = document.createElement("span");
      dot.className = config.dotClass;
      dot.setAttribute("aria-hidden", "true");

      const indexLabel = document.createElement("span");
      indexLabel.className = `${config.itemClass.replace("__item", "__index")}`;
      indexLabel.setAttribute("aria-hidden", "true");
      indexLabel.textContent = String(index + 1).padStart(2, "0");

      const button = document.createElement("button");
      button.type = "button";
      button.textContent = text;
      button.addEventListener("click", () => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      });

      li.append(dot, indexLabel, button);
      nav.append(li);

      return { section, li, text, index, highlightTarget: getHighlightTarget(section) };
    });

    let activeIndex = -1;

    const setActive = (index) => {
      const target = items[index];
      if (!target || activeIndex === index) return;
      activeIndex = index;
      current.textContent = target.text;
      current.dataset.step = String(index + 1).padStart(2, "0");
      items.forEach((item, itemIndex) => {
        const isActive = itemIndex === index;
        item.li.classList.toggle("is-active", isActive);
        item.li.querySelector("button")?.setAttribute("aria-current", isActive ? "true" : "false");
        item.highlightTarget?.classList.toggle("is-current", isActive);
      });
    };

    setActive(0);

    const getAbsoluteTop = (node) => window.scrollY + node.getBoundingClientRect().top;

    const resolveActiveIndex = () => {
      const marker = window.scrollY + window.innerHeight * (config.activationRatio || 0.28);
      let nextActiveIndex = 0;

      items.forEach((item, index) => {
        const sectionTop = getAbsoluteTop(item.section);
        const nextSectionTop = index < items.length - 1 ? getAbsoluteTop(items[index + 1].section) : Number.POSITIVE_INFINITY;

        if (marker >= sectionTop && marker < nextSectionTop) {
          nextActiveIndex = index;
        }
      });

      if (marker >= getAbsoluteTop(items[items.length - 1].section)) {
        nextActiveIndex = items.length - 1;
      }

      return nextActiveIndex;
    };

    const updateProgress = () => {
      if (!rail) return;
      const marker = window.scrollY + window.innerHeight * (config.activationRatio || 0.28);
      const start = getAbsoluteTop(items[0].section);
      const end = getAbsoluteTop(items[items.length - 1].section);
      const range = Math.max(end - start, 1);
      const progress = clamp((marker - start) / range, 0, 1);
      rail.style.setProperty("--timeline-progress", `${progress * 100}%`);
    };

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        setActive(resolveActiveIndex());
        updateProgress();
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("load", onScroll);
  };

  configs.forEach(mountTimeline);
});
