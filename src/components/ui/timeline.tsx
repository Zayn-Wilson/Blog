"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  logo?: string;
  type: "work" | "education";
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Timeline Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5" />

      {/* Timeline Items */}
      <div className="space-y-12">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          const isWork = item.type === "work";

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative flex items-center",
                "md:justify-center"
              )}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:transform md:-translate-x-1/2 z-10" />

              {/* Content Card */}
              <div className={cn(
                "ml-16 md:ml-0 w-full md:w-5/12",
                "md:flex md:items-center",
                isEven ? "md:justify-end md:pr-8" : "md:justify-start md:pl-8 md:ml-auto"
              )}>
                <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    {/* Logo */}
                    {item.logo && (
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                          <Image
                            src={item.logo}
                            alt={item.company}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    )}

                    {/* Title and Company */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-primary font-medium">
                        {item.company}
                      </p>
                    </div>

                    {/* Type Badge */}
                    <div className={cn(
                      "px-2 py-1 rounded-full text-xs font-medium",
                      isWork 
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                        : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                    )}>
                      {isWork ? "工作" : "教育"}
                    </div>
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}