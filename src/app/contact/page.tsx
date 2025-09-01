"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: Mail,
    label: "邮箱",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    icon: Phone,
    label: "电话",
    value: "+86 138 0000 0000",
    href: "tel:+8613800000000",
  },
  {
    icon: MapPin,
    label: "位置",
    value: "北京，中国",
    href: "#",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: Github,
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
    color: "hover:text-blue-600",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourusername",
    icon: Twitter,
    color: "hover:text-blue-400",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟表单提交
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // 这里应该实现实际的表单提交逻辑
    console.log("Form submitted:", formData);
    
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("消息已发送！我会尽快回复您。");
  };

  return (
    <div className="container py-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4 mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          联系我
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          有任何问题或想法？欢迎随时与我联系，我很乐意与您交流
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-bold mb-6">联系信息</h2>
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-lg border hover:bg-accent transition-colors group"
                    >
                      <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-muted-foreground">{item.value}</div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">社交媒体</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + 0.1 * index }}
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-secondary rounded-full transition-colors ${link.color}`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="sr-only">{link.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Additional Info */}
          <div className="p-6 bg-muted/50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">快速回复</h3>
            <p className="text-muted-foreground text-sm">
              我通常会在 24 小时内回复邮件。如果您有紧急事务，
              请通过电话联系我。
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6">发送消息</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  姓名 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="您的姓名"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  邮箱 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                主题 *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="消息主题"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                消息 *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="请输入您的消息..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  发送中...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  发送消息
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}