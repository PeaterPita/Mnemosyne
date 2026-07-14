import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { constellations } from "./data/constellations";

const blogs = defineCollection({

    loader: glob({
        base: "./src/content/blogs",
        pattern: "**/*.md",
    }),

    schema: z.object({
        title: z.string(),
        description: z.string(),
        constellation: z.enum(constellations.flatMap(constellation => constellation.name)),
        tags: z.array(z.string()),
        date: z.coerce.date()
    })


})

export const collections = { blogs };
