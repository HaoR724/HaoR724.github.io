document.addEventListener("DOMContentLoaded", () => {
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
    },
    {
      container: ".detail-shell--project",
      timeline: ".detail-shell--project .detail-timeline",
      sections: ".detail-shell--project .detail-shell__content h2",
      label: null,
      current: ".detail-shell--project .detail-timeline__current",
      nav: ".detail-shell--project .detail-timeline__nav",
      itemClass: "detail-timeline__item",
      dotClass: "detail-timeline__dot",
    },
    {
      container: ".detail-shell--cv",
      timeline: ".detail-shell--cv .detail-timeline",
      sections: ".detail-shell--cv .detail-shell__content .anchor",
      label: null,
      current: ".detail-shell--cv .detail-timeline__current",
      nav: ".detail-shell--cv .detail-timeline__nav",
      itemClass: "detail-timeline__item",
      dotClass: "detail-timeline__dot",
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

  const mountTimeline = (config) => {
    const container = document.querySelector(config.container);
    const timeline = document.querySelector(config.timeline);
    const current = document.querySelector(config.current);
    const nav = document.querySelector(config.nav);

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

      const button = document.createElement("button");
      button.type = "button";
      button.textContent = text;
      button.addEventListener("click", () => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      });

      li.append(dot, button);
      nav.append(li);

      return { section, li, text };
    });

    const setActive = (index) => {
      const target = items[index];
      if (!target) return;
      current.textContent = target.text;
      items.forEach((item, itemIndex) => item.li.classList.toggle("is-active", itemIndex === index));
    };

    setActive(0);

    const onScroll = () => {
      let activeIndex = 0;
      items.forEach((item, index) => {
        const rect = item.section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.28) {
          activeIndex = index;
        }
      });
      setActive(activeIndex);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  };

  configs.forEach(mountTimeline);
});
