export function navigate(path: string): void {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  const hash = path.includes("#") ? path.split("#")[1] : "";
  window.requestAnimationFrame(() => {
    if (hash) document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
