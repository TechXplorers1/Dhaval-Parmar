import Image from 'next/image';
import { portfolioData } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from '../animated-section';

export function Certifications() {
  const { certifications } = portfolioData;

  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="w-full py-20 md:py-32">
      <div className="container">
        <AnimatedSection animation="animate-zoom-in">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Certifications
            </h2>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="animate-zoom-in">
          <div className="grid gap-8 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-secondary/30 backdrop-blur-sm border border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <CardContent className="flex items-center gap-6 p-6">
                  <Image
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    width={64}
                    height={64}
                    className="rounded-lg bg-white p-2 object-contain"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold">{cert.name}</h3>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Issued {cert.date}
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
