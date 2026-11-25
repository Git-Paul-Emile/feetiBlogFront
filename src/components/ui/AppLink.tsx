import type { AnchorHTMLAttributes } from "react";

function navigate(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  const hash = path.includes("#") ? path.split("#")[1] : "";
  window.requestAnimationFrame(() => {
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}

export function AppLink({
  href,
  children,
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <a
      href={href}
      className={className}
      {...props}
      onClick={(event) => {
        props.onClick?.(event);
        if (event.defaultPrevented) return;
        if (!event.metaKey && !event.ctrlKey) {
          event.preventDefault();
          navigate(href);
        }
      }}
    >
      {children}
    </a>
  );
}
