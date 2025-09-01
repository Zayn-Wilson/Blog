"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

// 模拟博客数据 - 实际项目中应该从 CMS 或 API 获取
const blogPosts = {
  "nextjs-14-app-router-guide": {
    id: 1,
    title: "Next.js 14 App Router 完全指南",
    excerpt: "深入探讨 Next.js 14 的新特性，包括 App Router、Server Components 和最新的性能优化技巧。",
    content: `Next.js 14 带来了许多令人兴奋的新特性，其中最重要的就是 App Router。这个新的路由系统不仅提供了更好的开发体验，还带来了显著的性能提升。

## 什么是 App Router？

App Router 是 Next.js 13 引入的新路由系统，在 Next.js 14 中得到了进一步的完善。它基于 React Server Components，提供了：

- **更好的性能**: 通过服务器组件减少客户端 JavaScript 包大小
- **改进的开发体验**: 更直观的文件系统路由
- **增强的数据获取**: 新的数据获取模式
- **流式渲染**: 支持 Suspense 和流式 SSR

## 核心概念

### 1. 文件系统路由

在 App Router 中，路由是通过 app 目录中的文件夹结构定义的。每个文件夹代表一个路由段，而 page.tsx 文件则定义了该路由的 UI。

### 2. Server Components

Server Components 是 React 18 的新特性，允许组件在服务器上渲染。这意味着我们可以直接在组件中访问数据库、文件系统或其他服务器端资源，而无需通过 API 路由。

### 3. 数据获取

App Router 提供了新的数据获取模式，我们可以在 Server Components 中直接使用 async/await 来获取数据，这使得数据获取变得更加直观和高效。

## 性能优化

### 1. 代码分割

App Router 自动进行代码分割，每个路由只加载必要的代码。这意味着用户只会下载他们当前页面所需的 JavaScript，从而提高了应用的加载速度。

### 2. 图片优化

Next.js 的 Image 组件提供了自动的图片优化功能，包括懒加载、响应式图片和现代格式转换。

### 3. 缓存策略

App Router 提供了灵活的缓存选项，我们可以为不同的数据设置不同的缓存策略，从而在性能和数据新鲜度之间找到平衡。

## 最佳实践

1. **合理使用 Server 和 Client Components**
   - 默认使用 Server Components
   - 只在需要交互性时使用 Client Components

2. **优化数据获取**
   - 在最接近数据使用位置获取数据
   - 使用并行数据获取提高性能

3. **错误处理**
   - 使用 error.tsx 文件处理错误
   - 实现适当的加载状态

## 总结

Next.js 14 的 App Router 为现代 Web 开发提供了强大的工具。通过合理使用 Server Components、优化数据获取和实施最佳实践，我们可以构建出性能卓越的 Web 应用。

随着 React 生态系统的不断发展，App Router 将成为构建现代 Web 应用的标准方式。现在就开始学习和使用它，为未来的项目做好准备吧！`,
    date: "2024-01-15",
    readTime: "8 分钟阅读",
    tags: ["Next.js", "React", "Web开发"],
    image: "/blog/nextjs-guide.jpg",
    author: {
      name: "张三",
      avatar: "/avatar.jpg",
    },
  },
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-8">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          返回博客列表
        </Link>
      </motion.div>

      <article className="max-w-4xl mx-auto">
        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          {/* Featured Image */}
          {post.image && (
            <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-medium">{post.author.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('zh-CN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Share Button */}
          <div className="flex gap-4">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-colors">
              <Share2 className="w-4 h-4" />
              分享文章
            </button>
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg max-w-none dark:prose-invert"
        >
          <div className="whitespace-pre-wrap leading-relaxed">
            {post.content}
          </div>
        </motion.div>

        {/* Article Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">
                  全栈开发工程师，热爱技术分享
                </div>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              <Share2 className="w-4 h-4" />
              分享文章
            </button>
          </div>
        </motion.footer>
      </article>
    </div>
  );
}