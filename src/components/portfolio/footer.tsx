import { portfolioData } from "@/lib/data";
import Link from "next/link";
import { Separator } from "../ui/separator";

export function Footer() {
  const { socials, name, title, contact } = portfolioData;

  const socialLinks = [...socials];
  const emailSocial = socials.find(s => s.name === 'Email');
  if (!emailSocial && contact.email) {
    const { Mail } = require('lucide-react');
    socialLinks.push({ name: 'Email', url: `mailto:${contact.email}`, icon: Mail });
  }


  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-2">
             <Link href="/" className="font-bold text-lg flex items-center gap-2">
                {name}
             </Link>
             <p className="text-muted-foreground max-w-sm">
              {title}
             </p>
          </div>
           <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link key={social.name} href={social.url} target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} {name}. All rights reserved.
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
}
