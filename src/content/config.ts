// src/content/config.ts
import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),        // ⬅️ accepte "2025-08-20" (string) et convertit en Date
    author: z.string(),
    rubrique: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    excerpt: z.string().optional(),
    premium: z.boolean().default(false),
    status: z.enum(["draft", "published"]).default("published"),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const auteures = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    bio: z.string().optional(),
    avatar: z.string().optional(),
    x: z.string().optional(),
    instagram: z.string().optional(),
    site: z.string().optional(),
  }),
});

const rubriques = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { articles, auteures, rubriques };