"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PostCard } from "@/components/ui/post-card";
import { Search, Filter } from "lucide-react";

// 模拟博客数据
const allPosts = [
  {
    id: 1,
    title: "Next.js 14 App Router 完全指南",
    excerpt: "深入探讨 Next.js 14 的新特性，包括 App Router、Server Components 和最新的性能优化技巧。",
    date: "2024-01-15",
    readTime: "8 分钟阅读",
    tags: ["Next.js", "React", "Web开发"],
    image: "/blog/nextjs-guide.jpg",
    slug: "nextjs-14-app-router-guide",
    category: "前端开发",
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
    category: "编程语言",
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
    category: "前端开发",
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
    category: "前端开发",
  },
  {
    id: 5,
    title: "Node.js 微服务架构设计",
    excerpt: "探讨如何使用 Node.js 构建可扩展的微服务架构，包括服务发现、负载均衡等关键概念。",
    date: "2023-12-28",
    readTime: "15 分钟阅读",
    tags: ["Node.js", "微服务", "架构设计"],
    image: "/blog/nodejs-microservices.jpg",
    slug: "nodejs-microservices-architecture",
    category: "后端开发",
  },
  {
    id: 6,
    title: "Docker 容器化部署实践",
    excerpt: "从基础到进阶，学习如何使用 Docker 进行应用容器化部署和管理。",
    date: "2023-12-20",
    readTime: "9 分钟阅读",
    tags: ["Docker", "DevOps", "容器化"],
    image: "/blog/docker-deployment.jpg",
    slug: "docker-containerization-guide",
    category: "DevOps",
  },
];

const categories = ["全部", "前端开发", "后端开发", "编程语言", "DevOps"];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("全部");

  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "全部" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container py-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4 mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          博客文章
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          分享我在技术学习和项目实践中的思考与总结
        </p>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col md:flex-row gap-4 mb-8"
      >
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input
            type="text"
            placeholder="搜索文章..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Posts Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <PostCard {...post} />
          </motion.div>
        ))}
      </motion.div>

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-12"
        >
          <p className="text-muted-foreground text-lg">
            没有找到匹配的文章，请尝试其他搜索词或分类。
          </p>
        </motion.div>
      )}
    </div>
  );
}