import { portfolioData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import Image from 'next/image';
import { AnimatedSection } from '../animated-section';

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="w-full py-20 md:py-32">
      <div className="container">
        <AnimatedSection animation="animate-zoom-in">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Work Experience
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              My professional journey and key accomplishments.
            </p>
          </div>
        </AnimatedSection>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border"></div>
          {experience.map((item, index) => (
            <div key={index} className="group relative mb-12 flex items-start">
              <div
                className={`absolute top-4 flex h-full items-center ${
                  index % 2 === 0 ? 'left-1/2 -translate-x-1/2' : 'left-1/2 -translate-x-1/2'
                }`}
              >
                <div className="z-10 rounded-full bg-primary p-2">
                  <Briefcase className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>

              <AnimatedSection
                animation={index % 2 === 0 ? 'animate-fade-in-right' : 'animate-fade-in-left'}
                className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
              >
                <Card
                  className={`bg-secondary/30 backdrop-blur-sm border border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 w-full`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{item.role}</CardTitle>
                        <CardDescription className="mt-1">
                          {item.company} &middot; {item.type}
                        </CardDescription>
                        <CardDescription className="mt-1">
                          {item.date} {item.duration && `· ${item.duration}`}
                        </CardDescription>
                        <CardDescription className="mt-1">{item.location}</CardDescription>
                      </div>
                      <Image
                        src={item.logo}
                        alt={`${item.company} logo`}
                        width={40}
                        height={40}
                        className="rounded-full bg-white p-1"
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                      {item.description.split('. ').filter(d => d).map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    {item.skills && item.skills.length > 0 && (
                      <div className="text-sm text-muted-foreground mt-4">
                        <span className="font-semibold text-foreground">Skills:</span>{' '}
                        {item.skills.join(' · ')}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
