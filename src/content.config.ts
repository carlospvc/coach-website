import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    details: z.array(z.string()).optional(),
    icon: z.string().optional(),
    order: z.number().default(0),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/testimonials' }),
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    position: z.string(),
    company: z.string(),
    photo: z.string().optional(),
    published: z.boolean().default(false),
    order: z.number().default(1),
  }),
});

const accreditations = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/accreditations' }),
  schema: z.object({
    name: z.string(),
    initials: z.string(),
    issuer: z.string(),
    photo: z.string().optional(),
    order: z.number().default(1),
  }),
});

export const collections = { services, testimonials, accreditations };
