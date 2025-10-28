"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Navbar Container
export function Navbar({ children, className, ...props }: any) {
  return (
    <header className={cn("w-full border-b border-neutral-200 bg-white", className)} {...props}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[88px] items-center justify-between">
          {children}
        </div>
      </div>
    </header>
  );
}

// Navbar Body Container
export function NavBody({ children, className, ...props }: any) {
  return (
    <div className={cn("flex items-center justify-between h-10 sm:h-12", className)} {...props}>
      {children}
    </div>
  );
}

// Navbar Logo
export function NavbarLogo({ className, ...props }: any) {
  return (
    <a href="/" className={cn("block", className)} {...props}>
      {/* Prefer SVG for crispness */}
      <img
        src="/Logo-Track.svg"
        alt="Track Accounting Logo"
        className="h-[64px] w-auto object-contain"
      />
      {/* If you must use PNG, uncomment and use 2x for sharpness
      <img
        src="/logo-128.png"
        srcset="/logo-128.png 1x, /logo-256.png 2x"
        alt="Track Accounting Logo"
        className="h-[64px] w-auto object-contain"
      />
      */}
    </a>
  );
}

// Navbar Items
export function NavItems({ items, className, ...props }: any) {
  return (
    <div className={cn("hidden md:flex md:space-x-6", className)} {...props}>
      {items.map((item: any, index: number) => (
        <a
          key={index}
          href={item.link}
          className="text-neutral-600 hover:text-navy-dark dark:text-neutral-300 dark:hover:text-white transition-colors duration-200 font-medium"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}

// Navbar Button
export function NavbarButton({ 
  children, 
  variant = "primary", 
  className, 
  ...props 
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  [key: string]: any;
}) {
  const baseClasses = "px-2 sm:px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-xs sm:text-sm";
  
  const variants = {
    primary: "bg-navy-dark text-white hover:bg-navy-dark/90 focus:ring-navy-dark shadow-md",
    secondary: "bg-transparent text-navy-dark border border-navy-dark hover:bg-navy-dark hover:text-white focus:ring-navy-dark"
  };

  return (
    <button
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

// Mobile Nav Container
export function MobileNav({ children, className, ...props }: any) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

// Mobile Nav Header
export function MobileNavHeader({ children, className, ...props }: any) {
  return (
    <div className={cn("flex items-center justify-between h-12", className)} {...props}>
      {children}
    </div>
  );
}

// Mobile Nav Toggle
export function MobileNavToggle({ 
  isOpen, 
  onClick, 
  className, 
  ...props 
}: {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
  [key: string]: any;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-2 rounded-md text-neutral-600 hover:text-navy-dark hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors duration-200 flex-shrink-0",
        className
      )}
      {...props}
    >
      <span className="sr-only">Open main menu</span>
      {isOpen ? (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      )}
    </button>
  );
}

// Mobile Nav Menu
export function MobileNavMenu({ 
  isOpen, 
  onClose, 
  children, 
  className, 
  ...props 
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute top-[88px] left-0 right-0 bg-white border-b border-neutral-200 shadow-lg z-50",
            className
          )}
          {...props}
        >
          <div className="px-4 sm:px-6 py-3 sm:py-4 space-y-3 sm:space-y-4">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
