import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolioData } from '@/lib/data';
import { AnimatedSection } from '../animated-section';
import { Badge } from '../ui/badge';

export function CoreCompetencies() {
  const { coreCompetencies } = portfolioData;
  return (
    <section id="competencies" className="w-full py-10 md:py-16">
      <div className="container">
        <AnimatedSection animation="animate-zoom-in">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Core Competencies
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              A breakdown of my technical and leadership skills.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="animate-zoom-in">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coreCompetencies.map((category) => (
              <Card key={category.title} className="bg-secondary/30 backdrop-blur-sm border border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                     <Badge key={skill} variant="outline" className="border-primary/50 text-primary">
                        {skill}
                      </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
