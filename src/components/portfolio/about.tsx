import { portfolioData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { AnimatedSection } from '../animated-section';

export function About() {
  const { about, keyAchievements } = portfolioData;

  return (
    <section id="achievements" className="w-full py-20 md:py-32">
      <div className="container flex justify-center">
        <AnimatedSection animation="animate-zoom-in" className="space-y-6">
            <div className="mb-16 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Key Achievements
                </h2>
            </div>
             <ul className="space-y-4">
              {keyAchievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-muted-foreground md:text-lg/relaxed">
                    {achievement}
                  </p>
                </li>
              ))}
            </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
