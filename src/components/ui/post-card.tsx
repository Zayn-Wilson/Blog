"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
  slug: string;
  variant?: "default" | "featured";
  className?: string;
}

export function PostCard({
  title,
  excerpt,
  date,
  readTime,
  tags,
  image,
  slug,
  variant = "default",
  className,
}: PostCardProps) {
  const isFeatured = variant === "featured";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg",
        isFeatured ? "md:col-span-2 md:row-span-2" : "",
        className
      )}
    >
      <Link href={`/blog/${slug}`} className="block">
        {/* Image */}
        {image && (
          <div className={cn(
            "relative overflow-hidden",
            isFeatured ? "h-64 md:h-80" : "h-48"
          )}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className={cn(
          "p-6 space-y-4",
          isFeatured ? "md:p-8" : ""
        )}>
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className={cn(
            "font-bold leading-tight group-hover:text-primary transition-colors",
            isFeatured ? "text-2xl md:text-3xl" : "text-xl"
          )}>
            {title}
          </h3>

          {/* Excerpt */}
          <p className={cn(
            "text-muted-foreground line-clamp-3",
            isFeatured ? "text-base" : "text-sm"
          )}>
            {excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={date}>
                {new Date(date).toLocaleDateString('zh-CN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}