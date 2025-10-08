import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolioData } from '@/lib/data';
import { AnimatedSection } from '../animated-section';
import { Badge } from '../ui/badge';

export function Domains() {
  const { domains } = portfolioData;
  return (
    <section id="domains" className="w-full py-10 md:py-16">
      <div className="container">
        <AnimatedSection animation="animate-zoom-in">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Domains
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              My experience across various industries.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="animate-zoom-in">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {domains.map((domain) => (
              <Card key={domain.name} className="bg-secondary/30 backdrop-blur-sm border border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col">
                <CardHeader>
                  <div className='relative h-48 w-full mb-4'>
                    <Image 
                      src={domain.image} 
                      alt={domain.name} 
                      fill 
                      className="rounded-t-lg object-cover"
                      data-ai-hint={domain.dataAiHint}
                    />
                  </div>
                  <CardTitle>{domain.name}</CardTitle>
                  <CardDescription>{domain.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow" />
                <CardFooter>
                   <Badge variant="outline" className="border-primary/50 text-primary">
                    Industry Experience
                  </Badge>
                </CardFooter>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
