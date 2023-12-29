import { client } from '$lib/utils/sanity';
import type { Article } from '$lib/utils/types';
import { error } from '@sveltejs/kit';
import groq from 'groq';
import type { PageLoad } from './$types';

export const load = (async () => {
	const top_articles = await client.fetch(
		groq`*[_type == "article"] | order(publishedAt desc)[0...8] {
            ...,
            'slug': slug.current,
            'authors': authors[]->{name, 'slug': slug.current},
            'category': category->{title, 'slug': slug.current},
            'subcategory': subcategory->{title, 'slug': slug.current},
        }`
	) as Article[];

	if (top_articles) {
		return {
			top_articles
		}
	}

	error(404, 'Not found')
}) satisfies PageLoad
