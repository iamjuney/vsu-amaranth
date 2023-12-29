import { client } from '$lib/utils/sanity'
import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import type { Article } from '$lib/utils/types'
import groq from 'groq';

export const load = (async ({params}) => {
    const category = await client.fetch(
        groq`*[_type == "category" && slug.current == "${params.slug}"][0]`
    );

	const articles = await client.fetch(
        groq`*[_type == "article" && category._ref == "${category._id}"] | order(_createdAt desc) {
                ...,
                'slug': slug.current,
                'authors': authors[]->{name, 'slug': slug.current},
                'category': category->{title, 'slug': slug.current},
                'subcategory': subcategory->{title, 'slug': slug.current},
            }`
        ) as Article[];

	if (category && articles) {
		return {
            category,
			articles,
		}
	}

	error(404, 'Not found')
}) satisfies PageLoad
