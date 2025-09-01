"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "../ui/project-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// 模拟数据 - 实际项目中应该从 API 获取
const featuredProjects = [
  {
    id: 1,
    title: "个人博客系统",
    description: "基于 Next.js 14 和 TypeScript 构建的现代化博客系统，支持 Markdown 渲染、明暗主题切换和响应式设计。",
    image: "/projects/blog-system.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/blog-system",
    liveUrl: "https://your-blog.vercel.app",
    stars: 128,
    featured: true,
  },
  {
    id: 2,
    title: "任务管理应用",
    description: "功能完整的任务管理应用，支持拖拽排序、团队协作、实时通知等功能。",
    image: "/projects/task-manager.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
    stars: 89,
  },
  {
    id: 3,
    title: "数据可视化仪表板",
    description: "企业级数据可视化仪表板，支持多种图表类型和实时数据更新。",
    image: "/projects/dashboard.jpg",
    technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/data-dashboard",
    liveUrl: "https://dashboard-demo.netlify.app",
    stars: 156,
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            精选项目
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            展示我在不同技术栈和领域的实践项目，从前端应用到全栈解决方案
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors group"
          >
            查看所有项目
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}