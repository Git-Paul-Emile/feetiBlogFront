import { useEffect, useState } from "react";

export function usePathname() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onNavigate = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onNavigate);
    return () => window.removeEventListener("popstate", onNavigate);
  }, []);

  return path;
}
