"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";
import { Search } from "lucide-react";

// 模拟项目数据
const allProjects = [
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
    description: "功能完整的任务管理应用，支持拖拽排序、团队协作、实时通知等功能。使用现代技术栈构建。",
    image: "/projects/task-manager.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
    stars: 89,
  },
  {
    id: 3,
    title: "数据可视化仪表板",
    description: "企业级数据可视化仪表板，支持多种图表类型和实时数据更新，提供直观的数据分析界面。",
    image: "/projects/dashboard.jpg",
    technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/data-dashboard",
    liveUrl: "https://dashboard-demo.netlify.app",
    stars: 156,
  },
  {
    id: 4,
    title: "电商购物平台",
    description: "全栈电商解决方案，包含用户管理、商品展示、购物车、支付集成等完整功能。",
    image: "/projects/ecommerce.jpg",
    technologies: ["React", "Redux", "Node.js", "Stripe"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    stars: 203,
  },
  {
    id: 5,
    title: "实时聊天应用",
    description: "支持多人聊天、文件分享、表情包的实时通讯应用，具有现代化的用户界面。",
    image: "/projects/chat-app.jpg",
    technologies: ["React", "Socket.io", "Express", "MongoDB"],
    githubUrl: "https://github.com/yourusername/chat-app",
    liveUrl: "https://chat-app-demo.herokuapp.com",
    stars: 67,
  },
  {
    id: 6,
    title: "天气预报应用",
    description: "基于地理位置的天气预报应用，提供详细的天气信息和未来预测。",
    image: "/projects/weather-app.jpg",
    technologies: ["React Native", "TypeScript", "OpenWeather API"],
    githubUrl: "https://github.com/yourusername/weather-app",
    stars: 45,
  },
];

const techFilters = ["全部", "React", "Next.js", "Vue.js", "Node.js", "TypeScript", "React Native"];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("全部");

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTech = selectedTech === "全部" || project.technologies.includes(selectedTech);
    
    return matchesSearch && matchesTech;
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
          我的项目
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          展示我在不同技术栈和领域的实践项目，从前端应用到全栈解决方案
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
            placeholder="搜索项目..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Technology Filter */}
        <div className="flex gap-2 overflow-x-auto">
          {techFilters.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedTech === tech
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-12"
        >
          <p className="text-muted-foreground text-lg">
            没有找到匹配的项目，请尝试其他搜索词或技术栈。
          </p>
        </motion.div>
      )}
    </div>
  );
}