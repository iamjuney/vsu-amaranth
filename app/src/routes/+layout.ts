import { client } from '$lib/utils/sanity';
import type { HeaderLink } from "$lib/utils/types";
import groq from 'groq';
import type { LayoutLoad } from "./$types";

export const prerender = true;

export const load: LayoutLoad = async () => {
    const header_links = await client.fetch(
        groq`*[_type == "category"] | order(_createdAt asc) {
            title,
            'slug': slug.current,
        }`
    ) as HeaderLink[];

    header_links.unshift({
        title: 'Home',
        slug: ''
    });

    if (header_links) {
        return {
            header_links
        }
    }
};