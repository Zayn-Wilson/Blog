"use client";

import { motion } from "framer-motion";
import { PostCard } from "../ui/post-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// 模拟数据 - 实际项目中应该从 CMS 或 API 获取
const featuredPosts = [
  {
    id: 1,
    title: "Next.js 14 App Router 完全指南",
    excerpt: "深入探讨 Next.js 14 的新特性，包括 App Router、Server Components 和最新的性能优化技巧。",
    date: "2024-01-15",
    readTime: "8 分钟阅读",
    tags: ["Next.js", "React", "Web开发"],
    image: "/blog/nextjs-guide.jpg",
    slug: "nextjs-14-app-router-guide",
  },
  {
    id: 2,
    title: "TypeScript 高级类型系统实战",
    excerpt: "通过实际案例学习 TypeScript 的高级类型特性，提升代码的类型安全性和开发效率。",
    date: "2024-01-10",
    readTime: "12 分钟阅读",
    tags: ["TypeScript", "JavaScript", "类型系统"],
    image: "/blog/typescript-advanced.jpg",
    slug: "typescript-advanced-types",
  },
  {
    id: 3,
    title: "现代 CSS 布局技巧",
    excerpt: "掌握 Grid、Flexbox 和 Container Queries 等现代 CSS 特性，创建响应式布局。",
    date: "2024-01-05",
    readTime: "6 分钟阅读",
    tags: ["CSS", "布局", "响应式设计"],
    image: "/blog/css-layout.jpg",
    slug: "modern-css-layout-techniques",
  },
  {
    id: 4,
    title: "React 性能优化最佳实践",
    excerpt: "学习如何使用 React 的最新特性来优化应用性能，包括 Suspense、Concurrent Features 等。",
    date: "2024-01-01",
    readTime: "10 分钟阅读",
    tags: ["React", "性能优化", "前端"],
    image: "/blog/react-performance.jpg",
    slug: "react-performance-optimization",
  },
];

export function FeaturedPosts() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            精选文章
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            分享我在前端开发、技术架构和编程实践中的见解与经验
          </p>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Featured Post - Takes 2 columns on larger screens */}
          <PostCard
            {...featuredPosts[0]}
            variant="featured"
            className="md:col-span-2 md:row-span-2"
          />
          
          {/* Regular Posts */}
          {featuredPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <PostCard {...post} />
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors group"
          >
            查看所有文章
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}