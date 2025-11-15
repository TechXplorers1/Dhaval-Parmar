import Image from 'next/image';
import { Mail } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import Link from 'next/link';
import { AnimatedSection } from '../animated-section';
import { AnimatedButton } from '../ui/animated-button';
import { Button } from '../ui/button';
import { AnimatedButtonOutline } from '../ui/animated-button-outline';

export function Hero() {
  const { name, title, description } = portfolioData;
  return (
    <section id="home" className="grid grid-cols-1 items-center gap-12 py-20 text-center md:grid-cols-2 md:py-32 md:text-left">
      <AnimatedSection animation="animate-fade-in-left">
        <div className="flex flex-col items-center md:items-start md:ml-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-br from-foreground to-muted-foreground">
            {name}
          </h1>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-primary">{title}</h2>
          <p className="mt-6 max-w-[600px] text-lg text-muted-foreground">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <AnimatedButton href="#experience" text="View My Work" />
            <AnimatedButton href="#contact" text="Get In Touch" />
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection animation="animate-fade-in-right">
        <div className="relative flex justify-center group">
          <Image
            src="https://media.licdn.com/dms/image/v2/D5603AQE4wI5u0v_fcA/profile-displayphoto-crop_800_800/B56ZgntS7XH0AM-/0/1753012843219?e=1762992000&v=beta&t=ruvkrnZoDkL5YZx6wljp5AneSaxa1ozC_rDAjUqsnAE"
            alt="John Doe"
            width={400}
            height={400}
            className="rounded-full border-4 border-background object-cover shadow-lg relative transform transition-transform duration-500 group-hover:scale-105"          />
        </div>
      </AnimatedSection>
    </section>
  );
}
