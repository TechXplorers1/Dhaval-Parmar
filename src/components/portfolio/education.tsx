import Image from 'next/image';
import { portfolioData } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from '../animated-section';
import { GraduationCap } from 'lucide-react';

export function Education() {
  const { education } = portfolioData;

  if (!education || education.length === 0) {
    return null;
  }

  return (
    <section id="education" className="w-full py-20 md:py-32">
      <div className="container">
        <AnimatedSection animation="animate-zoom-in">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Education
            </h2>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="animate-zoom-in">
          <div className="grid gap-8 md:grid-cols-2">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-secondary/30 backdrop-blur-sm border border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <CardContent className="flex items-center gap-6 p-6">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.university}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Graduated {edu.year}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
