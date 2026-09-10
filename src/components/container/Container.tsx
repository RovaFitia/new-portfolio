import React from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn("w-full max-w-7xl mx-auto px-5 lg:px-10", className)}
      {...props}
    >
      {children}
    </div>
  );
};
