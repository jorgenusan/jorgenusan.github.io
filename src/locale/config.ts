import { defineCollection, z } from 'astro:content';

const titleCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    title: z.string(),
    company: z.string(),
    image: z.string(),
  })
});

export const collections = {
  'title': titleCollection
};