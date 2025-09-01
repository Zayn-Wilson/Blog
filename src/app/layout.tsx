import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "我的博客 - 技术分享与成长记录",
  description: "分享前端开发、技术架构和编程实践的个人博客",
  keywords: ["前端开发", "React", "Next.js", "TypeScript", "技术博客"],
  authors: [{ name: "张三" }],
  creator: "张三",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://your-blog.com",
    title: "我的博客 - 技术分享与成长记录",
    description: "分享前端开发、技术架构和编程实践的个人博客",
    siteName: "我的博客",
  },
  twitter: {
    card: "summary_large_image",
    title: "我的博客 - 技术分享与成长记录",
    description: "分享前端开发、技术架构和编程实践的个人博客",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background font-sans antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}