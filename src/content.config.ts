import { glob, file } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";


const Home = defineCollection({
    loader: glob({
        base: './src/content/homepage',
        pattern: "**/*.{md,mdx}",

    }),
    schema: z.object({
        badge: z.string(),

        title: z.string(),

        highlight: z.string(),

        description: z.string(),

        buttonText: z.string(),

        buttonLink: z.string(),

        image: z.string(),

        stats: z.array(
            z.object({
                number: z.string(),

                label: z.string(),

                icon: z.string(),
            }),
        ),
    }),
});

export const collections = {
    Home,
};