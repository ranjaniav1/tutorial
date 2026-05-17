import { defineCollection, z } from "astro:content";

const homepage = defineCollection({
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
    homepage,
};