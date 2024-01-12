import { client } from '$lib/utils/sanity';
import type { Article } from '$lib/utils/types';
import { error } from '@sveltejs/kit';
import groq from 'groq';
import type { PageLoad } from './$types';

export const prerender = true;

export const load = (async () => {
    const category = await client.fetch(
        groq`*[_type == "category" && slug.current == "news"][0]`
    );

	const results = await client.fetch(
        groq`*[_type == "article" && category._ref == "${category._id}"] | order(_createdAt desc) {
                ...,
                'slug': slug.current,
                'authors': authors[]->{name, 'slug': slug.current},
                'category': category->{title, 'slug': slug.current},
                'subcategory': subcategory->{title, 'slug': slug.current},
            }`
        ) as Article[];

	if (results) {
		return {
			results,
		}
	}

	error(404, 'Not found')
}) satisfies PageLoad
