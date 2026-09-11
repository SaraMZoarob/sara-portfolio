import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sara Zoarob — Full Stack Software Engineer",
  description:
    "Portfolio of Sara Zoarob, a frontend-focused full stack engineer building interfaces that feel simple, even when the systems behind them aren't.",
  metadataBase: new URL("https://sarazoarob.dev"),
  openGraph: {
    title: "Sara Zoarob — Full Stack Software Engineer",
    description: "Frontend architecture, product thinking, and systems that scale.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}