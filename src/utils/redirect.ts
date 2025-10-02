export function handleRedirectScroll(hash: string, offset = 80) {
  if (!hash) return;

  const id = hash.startsWith("#") ? hash.substring(1) : hash;
  const el = document.getElementById(id);

  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
    // window.history.pushState(null, "", `#${id}`);
  }
}
