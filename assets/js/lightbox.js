
document.addEventListener("DOMContentLoaded", () => {
  // Find only images explicitly designated for the lightbox.
  const links = document.querySelectorAll("a.lightbox-link");

  if (links.length === 0) return;

  // Create the lightbox overlay.
  const overlay = document.createElement("div");
  overlay.className = "pv-lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Expanded image");

  overlay.innerHTML = `
    <button class="pv-lightbox-close"
            type="button"
            aria-label="Close expanded image">&times;</button>
    <img class="pv-lightbox-image" alt="">
  `;

  document.body.appendChild(overlay);

  const image = overlay.querySelector(".pv-lightbox-image");
  const closeButton = overlay.querySelector(".pv-lightbox-close");
  let previousFocus = null;

  function closeLightbox() {
    overlay.classList.remove("is-open");
    image.removeAttribute("src");
    document.body.style.overflow = "";
    if (previousFocus) previousFocus.focus();
  }

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Leave modified clicks and non-primary clicks alone.
      if (
        event.button !== 0 ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
      ) return;

      event.preventDefault();
      previousFocus = document.activeElement;

      image.src = link.href;
      image.alt = link.querySelector("img")?.alt || "";
      overlay.classList.add("is-open");
      document.body.style.overflow = "hidden";
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", closeLightbox);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (!overlay.classList.contains("is-open")) return;

    if (event.key === "Escape") closeLightbox();

    // Keep keyboard focus inside the lightbox.
    if (event.key === "Tab") {
      event.preventDefault();
      closeButton.focus();
    }
  });
});

