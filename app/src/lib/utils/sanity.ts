import { createClient } from '@sanity/client';
import groq from 'groq';
import type { Post } from '../../types';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2023-03-20' // date of setup
});

export async function getPosts(): Promise<Post[]> {
	return await client.fetch(
		groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc) {
            _type,
            _createdAt,
            title,
            'slug': slug.current,
            'author': author->{name, slug, image, bio},
            excerpt,
            mainImage,
            imageCourtesy,
            'categories': categories[]->{title, slug},
            publishedAt,
            body
        }`
	);
}

export async function getPost(slug: string): Promise<Post> {
	return await client.fetch(groq`*[_type == "post" && slug.current == $slug][0] {
        _type,
            _createdAt,
            title,
            slug,
            'author': author->{name, slug, image, bio},
            excerpt,
            mainImage,
            imageCourtesy,
            'categories': categories[]->{title, slug},
            publishedAt,
            body
    }`, {
		slug
	});
}


