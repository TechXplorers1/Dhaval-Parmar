import { About } from '@/components/portfolio/about';
import { Certifications } from '@/components/portfolio/certifications';
import { Contact } from '@/components/portfolio/contact';
import { Experience } from '@/components/portfolio/experience';
import { Footer } from '@/components/portfolio/footer';
import { Header } from '@/components/portfolio/header';
import { Hero } from '@/components/portfolio/hero';
import { Skills } from '@/components/portfolio/skills';
import { Separator } from '@/components/ui/separator';
import { AnimatedSection } from '@/components/animated-section';
import { CoreCompetencies } from '@/components/portfolio/core-competencies';
import { Domains } from '@/components/portfolio/domains';
import { Education } from '@/components/portfolio/education';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col container relative bg-transparent">
      <Header />
      <main>
        <Hero />
        <Separator className="my-2" />
        <AnimatedSection animation="animate-fade-in-left">
          <About />
        </AnimatedSection>
        <Separator className="my-2" />
        <AnimatedSection animation="animate-fade-in-right">
          <Skills />
        </AnimatedSection>
        <Separator className="my-2" />
        <AnimatedSection animation="animate-fade-in-left">
          <CoreCompetencies />
        </AnimatedSection>
        <Separator className="my-2" />
        <AnimatedSection animation="animate-fade-in-right">
          <Domains />
        </AnimatedSection>
        <Separator className="my-2" />
        <AnimatedSection animation="animate-fade-in-left">
          <Experience />
        </AnimatedSection>
        <Separator className="my-2" />
        <AnimatedSection animation="animate-fade-in-right">
          <Certifications />
        </AnimatedSection>
        <Separator className="my-2" />
        <AnimatedSection animation="animate-fade-in-left">
          <Education />
        </AnimatedSection>
        <Separator className="my-2" />
        <AnimatedSection animation="animate-zoom-in">
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
