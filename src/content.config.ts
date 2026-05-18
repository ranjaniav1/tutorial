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
        categories: z.array(
            z.object({
                title: z.string(),
                lessons: z.number(),
                image: z.string(),
                slug: z.string()
            })
        ),
        latestArticles: z.array(
            z.object({
                title: z.string(),
                description: z.string(),
                category: z.enum(["Python", "JavaScript", "React", "English"]),
                image: z.string(),
                slug: z.string(),
                date: z.date(),
                readTime: z.string(),
            })
        )
    }),
});

const SeriesLessons = defineCollection({
    loader: glob({
        base: "./src/content/series",
        pattern: "**/*.{md,mdx}",
    }),

    schema: z.object({
        title: z.string(),

        day: z.number(),

        description: z.string(),
    }),
});

export const collections = {
    Home, SeriesLessons
};