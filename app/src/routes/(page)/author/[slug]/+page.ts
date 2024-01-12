import { client } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import groq from 'groq';
import type { PageLoad } from './$lib/types';

export const prerender = true;

export const load = (async ({params}) => {
    const author = await client.fetch(
        groq`*[_type == "author" && slug.current == "${params.slug}"][0] {
            ...,
            'slug': slug.current,
            'articles': *[_type == "article" && references(^._id)] | order(_createdAt desc) {
                ...,
                'slug': slug.current,
                'authors': authors[]->{_id, name, 'slug': slug.current},
                'category': category->{title, 'slug': slug.current},
                'subcategory': subcategory->{title, 'slug': slug.current},
            }
        }`
    );

	if (author) {
		return {
            author,
		}
	}

	error(404, 'Not found')
}) satisfies PageLoad
