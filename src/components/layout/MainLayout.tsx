import type { PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
