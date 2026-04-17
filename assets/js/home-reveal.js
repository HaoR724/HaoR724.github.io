document.addEventListener("DOMContentLoaded", () => {
  const items = Array.from(document.querySelectorAll(".home-reveal"));
  if (!items.length) return;

  const reveal = (entry) => {
    entry.target.classList.add("is-visible");
  };

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal(entry);
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.16,
    }
  );

  items.forEach((item) => observer.observe(item));
});
