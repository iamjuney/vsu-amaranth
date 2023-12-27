import type { LayoutLoad } from "./$types";
import { client } from '$lib/utils/sanity'
import groq from 'groq';
import type { HeaderLink } from "$lib/utils/types";

export const load: LayoutLoad = async () => {
    const categories = await client.fetch(
        groq`*[_type == "category"] | order(_createdAt asc) {
            title,
            'slug': slug.current,
        }`
    ) as HeaderLink[];

    if (categories) {
        return {
            categories
        }
    }
};