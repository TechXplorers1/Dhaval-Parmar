'use client';

import { useRef } from 'react';
import { useOnScreen } from '@/hooks/use-on-screen';
import { cn } from '@/lib/utils';

type AnimatedSectionProps = {
  children: React.ReactNode;
  animation?: string;
  className?: string;
};

export function AnimatedSection({
  children,
  animation = 'animate-fade-in',
  className,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-opacity duration-1000 ease-in-out',
        isVisible ? 'opacity-100' : 'opacity-0',
        isVisible && animation,
        className
      )}
    >
      {children}
    </div>
  );
}
