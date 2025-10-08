import Image from 'next/image';
import { portfolioData } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from '../animated-section';

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="w-full py-20 md:py-32">
      <div className="container">
        <AnimatedSection animation="animate-zoom-in">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Technical Skills
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              A look at the languages, frameworks, and tools I use to bring ideas to life.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="animate-zoom-in">
          <Card className="bg-secondary/30 backdrop-blur-sm border-secondary/50">
            <CardContent className="p-8">
              {skills.map((category) => (
                <div key={category.title}>
                  <h3 className="text-xl font-bold text-primary mb-6">{category.title}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {category.tools.map((tool) => (
                      <div key={tool.name} className="flex flex-col items-center gap-3 text-center">
                        <div className="bg-background/50 rounded-full p-4 flex items-center justify-center w-20 h-20 border border-border transition-all duration-300 hover:shadow-md hover:border-primary/50">
                          {typeof tool.logo === 'string' ? (
                            <Image src={tool.logo} alt={`${tool.name} logo`} width={48} height={48} className="object-contain" />
                          ) : (
                            tool.logo
                          )}
                        </div>
                        <p className="font-semibold text-sm">{tool.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}
