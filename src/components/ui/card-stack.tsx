"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CardStackProps {
  items: {
    id: number;
    name: string;
    designation: string;
    content: React.ReactNode;
  }[];
  className?: string;
}

export const CardStack = ({ items, className }: CardStackProps) => {
  return (
    <div className={cn("w-full h-[40rem] relative", className)}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            "absolute inset-0 w-full h-full bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-neutral-200 dark:border-slate-700 p-4",
            "transition-transform duration-300 ease-out",
            "hover:scale-105 hover:z-10"
          )}
          style={{
            transform: `translateY(${index * -15}px) scale(${1 - index * 0.03})`,
            zIndex: items.length - index,
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.name}`} />
              <AvatarFallback className="text-xs">{item.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xs font-medium leading-none">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.designation}</p>
            </div>
          </div>
          <div className="text-xs text-muted-foreground leading-relaxed">
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};
