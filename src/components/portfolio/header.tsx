'use client';

import Link from 'next/link';
import { portfolioData } from '@/lib/data';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { ThemeToggle } from '../theme-toggle';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { socials, name } = portfolioData;

  const closeSheet = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="font-bold text-lg flex items-center gap-2">
          {name}
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center space-x-8 text-sm font-medium md:flex">
            <Link href="#achievements" className="transition-colors hover:text-primary">Achievements</Link>
            <Link href="#skills" className="transition-colors hover:text-primary">Skills</Link>
            <Link href="#competencies" className="transition-colors hover:text-primary">Competencies</Link>
            <Link href="#domains" className="transition-colors hover:text-primary">Domains</Link>
            <Link href="#experience" className="transition-colors hover:text-primary">Experience</Link>
            <Link href="#certifications" className="transition-colors hover:text-primary">Certifications</Link>
            <Link href="#education" className="transition-colors hover:text-primary">Education</Link>
            <Link href="#contact" className="transition-colors hover:text-primary">Contact</Link>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
          </div>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col h-full">
                  <nav className="flex flex-col gap-6 text-lg font-medium mt-8">
                    <Link href="#achievements" onClick={closeSheet} className="transition-colors hover:text-primary">Achievements</Link>
                    <Link href="#skills" onClick={closeSheet} className="transition-colors hover:text-primary">Skills</Link>
                    <Link href="#competencies" onClick={closeSheet} className="transition-colors hover:text-primary">Competencies</Link>
                    <Link href="#domains" onClick={closeSheet} className="transition-colors hover:text-primary">Domains</Link>
                    <Link href="#experience" onClick={closeSheet} className="transition-colors hover:text-primary">Experience</Link>
                    <Link href="#certifications" onClick={closeSheet} className="transition-colors hover:text-primary">Certifications</Link>
                    <Link href="#education" onClick={closeSheet} className="transition-colors hover:text-primary">Education</Link>
                    <Link href="#contact" onClick={closeSheet} className="transition-colors hover:text-primary">Contact</Link>
                  </nav>
                  <div className="mt-auto flex flex-col gap-4">
                    <div className='flex justify-center'>
                      <ThemeToggle />
                    </div>
                     <div className="flex justify-center gap-4">
                      {socials.map((social) => (
                        <Link key={social.name} href={social.url} target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                          <social.icon className="h-6 w-6" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
