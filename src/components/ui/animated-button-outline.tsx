import Link from 'next/link';
import { cn } from '@/lib/utils';

type AnimatedButtonOutlineProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function AnimatedButtonOutline({ href, children, className }: AnimatedButtonOutlineProps) {
  return (
    <Link href={href} className={cn('animated-button-outline', className)}>
      <span className="animated-button-outline-text">{children}</span>
    </Link>
  );
}
