"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";

// 技能数据
const skills = [
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "React", level: 95 },
  { name: "Next.js", level: 88 },
  { name: "Vue.js", level: 85 },
  { name: "Node.js", level: 82 },
  { name: "Python", level: 75 },
  { name: "Docker", level: 70 },
];

// 时间线数据
const timelineData = [
  {
    id: 1,
    title: "高级前端工程师",
    company: "字节跳动",
    location: "北京",
    period: "2022年3月 - 至今",
    description: "负责抖音创作者平台的前端开发，使用 React 和 TypeScript 构建高性能的 Web 应用。参与了多个核心功能的设计和实现，包括视频编辑器、数据分析仪表板等。",
    logo: "/companies/bytedance.png",
    type: "work" as const,
  },
  {
    id: 2,
    title: "前端工程师",
    company: "腾讯",
    location: "深圳",
    period: "2020年7月 - 2022年2月",
    description: "在微信事业群负责小程序开发工具的前端开发，使用 Vue.js 和 Electron 技术栈。优化了开发者体验，提升了工具的性能和稳定性。",
    logo: "/companies/tencent.png",
    type: "work" as const,
  },
  {
    id: 3,
    title: "计算机科学与技术学士",
    company: "清华大学",
    location: "北京",
    period: "2016年9月 - 2020年6月",
    description: "主修计算机科学与技术，专业排名前10%。参与了多个科研项目，包括机器学习和 Web 开发相关研究。获得优秀毕业生称号。",
    logo: "/universities/tsinghua.png",
    type: "education" as const,
  },
];

export default function AboutPage() {
  return (
    <div className="container py-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8 mb-16"
      >
        <div className="relative inline-block">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-background p-1">
              <Image
                src="/avatar.jpg"
                alt="张三"
                width={120}
                height={120}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            关于我
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            我是张三，一名充满热情的全栈开发工程师。专注于现代 Web 技术，
            热爱创造优雅的用户体验和高效的解决方案。在过去的几年里，
            我参与了多个大型项目的开发，积累了丰富的前端和后端开发经验。
          </p>
        </div>

        {/* Contact Links */}
        <div className="flex justify-center gap-4">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            className="p-3 bg-secondary rounded-full hover:bg-accent transition-colors"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="p-3 bg-secondary rounded-full hover:bg-accent transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="mailto:your.email@example.com"
            className="p-3 bg-secondary rounded-full hover:bg-accent transition-colors"
          >
            <Mail className="w-5 h-5" />
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
          >
            <Download className="w-5 h-5" />
          </Link>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            技能专长
          </h2>
          <p className="text-muted-foreground">
            我在以下技术领域有丰富的经验和深入的理解
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + 0.1 * index }}
                  className="bg-primary h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            我的经历
          </h2>
          <p className="text-muted-foreground">
            从学习到工作，记录我的成长轨迹
          </p>
        </div>

        <Timeline items={timelineData} />
      </motion.section>
    </div>
  );
}