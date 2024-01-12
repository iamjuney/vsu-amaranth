import { client } from '$lib/utils/sanity';
import type { Article } from '$lib/utils/types';
import { error } from '@sveltejs/kit';
import groq from 'groq';
import type { PageLoad } from './$types';

export const load = (async ({params}) => {
	const article = await client.fetch(
		groq`*[_type == "article" && slug.current == '${params.slug}'][0] {
            ...,
            'slug': slug.current,
            'authors': authors[]->{name, 'slug': slug.current},
            'category': category->{title, 'slug': slug.current},
            'subcategory': subcategory->{title, 'slug': slug.current},
        }`
	) as Article;

    const most_popular = await client.fetch(
        groq`*[_type == "article" && slug.current != '${params.slug}'] | order(_createdAt desc) [0...5] {
             ...,
            'slug': slug.current,
            'authors': authors[]->{name, 'slug': slug.current},
            'category': category->{title, 'slug': slug.current},
            'subcategory': subcategory->{title, 'slug': slug.current},
        }`
    ) as Article[];

	if (article && most_popular) {
		return {
			article,
            most_popular
		}
	}

	error(404, 'Not found')
}) satisfies PageLoad
