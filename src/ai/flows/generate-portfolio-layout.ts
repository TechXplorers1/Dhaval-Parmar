//The `generate-portfolio-layout` flow analyzes a provided URL and generates a similar portfolio layout.
// It exports the GeneratePortfolioLayoutInput and GeneratePortfolioLayoutOutput interfaces for defining the input and output schemas respectively.
'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePortfolioLayoutInputSchema = z.object({
  url: z.string().url().describe('The URL of the website to analyze.'),
});
export type GeneratePortfolioLayoutInput = z.infer<typeof GeneratePortfolioLayoutInputSchema>;

const GeneratePortfolioLayoutOutputSchema = z.object({
  layoutDescription: z
    .string()
    .describe('A description of the generated portfolio layout in JSON format.'),
});
export type GeneratePortfolioLayoutOutput = z.infer<typeof GeneratePortfolioLayoutOutputSchema>;

export async function generatePortfolioLayout(input: GeneratePortfolioLayoutInput): Promise<GeneratePortfolioLayoutOutput> {
  return generatePortfolioLayoutFlow(input);
}

const generatePortfolioLayoutPrompt = ai.definePrompt({
  name: 'generatePortfolioLayoutPrompt',
  input: {schema: GeneratePortfolioLayoutInputSchema},
  output: {schema: GeneratePortfolioLayoutOutputSchema},
  prompt: `You are an AI assistant designed to analyze a website URL and generate a similar portfolio layout.

  Analyze the following URL and provide a description of a similar portfolio layout in JSON format.
  Consider the website's structure, color scheme, typography, and overall design.

  URL: {{{url}}}

  Ensure the JSON format is valid and includes the following keys:
  - sections: An array of sections in the portfolio (e.g., "hero", "about", "projects", "contact").
  - elements: An array of UI elements used in the layout (e.g., "grid", "card", "image", "text").
  - style: CSS styles (e.g., "colors", "typography", "layout").
  `,
});

const generatePortfolioLayoutFlow = ai.defineFlow(
  {
    name: 'generatePortfolioLayoutFlow',
    inputSchema: GeneratePortfolioLayoutInputSchema,
    outputSchema: GeneratePortfolioLayoutOutputSchema,
  },
  async input => {
    const {output} = await generatePortfolioLayoutPrompt(input);
    return output!;
  }
);
