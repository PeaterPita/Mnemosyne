import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Practically Copied From:
// https://docs.astro.build/en/guides/content-collections/
// TODO: Simplify, reduce. All three has repeating fields


const projects = defineCollection({

    loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        image: image().optional(),
        tags: z.array(z.string()).default([]),

        featured: z.boolean().default(false),
        repo: z.string().optional(),
        url: z.string().optional,

    })
})


const blog = defineCollection({
    loader: glob({ base: "./src/content/blogs", pattern: "**/*.md" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()).default([]),
    })
})


const research = defineCollection({
    loader: glob({ base: "./src/content/research", pattern: "**/*.md" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        image: image().optional(),
        date: z.coerce.date(),
        tags: z.array(z.string()).default([]),

        pdf: z.string().optional(),
        // TODO: DOI?
    })
})


export const collections = { blog, projects, research };
