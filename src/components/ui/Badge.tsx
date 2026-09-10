import React from "react";
import { cn } from "@/utils/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "solid" | "ghost" | "super";
  children: React.ReactNode;
}

const variantClasses: Record<NonNullable<BadgeProps["variant"]>, string> = {
  solid: "border-primary-400 bg-primary-400 text-text",
  ghost: "border-text bg-text text-white",
  super: "border-gray-300 bg-gray-300 text-text",
};

export const Badge: React.FC<BadgeProps> = ({
  variant = "solid",
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
