import { defineCollection, z } from "astro:content";

const navigation = defineCollection({
    type: "content",

    schema: z.object({
        logo: z.string(),

        button: z.object({
            label: z.string(),
            href: z.string(),
        }),

        links: z.array(
            z.object({
                label: z.string(),
                href: z.string(),

                badge: z.string().optional(),
            })
        ),
    }),
});

export const collections = {
    navigation,
};