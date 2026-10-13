import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "작은 정원, 뜰 — Shaula의 프로젝트 정원",
  description: "작은 정원, 뜰 — 이람다가 만든 프로젝트와 자라나는 실험을 모으는 곳.",
};
export const viewport: Viewport = { themeColor: "#f5f4ec" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
