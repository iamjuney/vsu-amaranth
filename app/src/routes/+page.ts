import { client } from '$lib/utils/sanity';
import type { Article } from '$lib/utils/types';
import { error } from '@sveltejs/kit';
import groq from 'groq';
import type { PageLoad } from './$types';

export const load = (async () => {
    const content = `...,
            'slug': slug.current,
            'authors': authors[]->{name, 'slug': slug.current, image},
            'category': category->{title, 'slug': slug.current},
            'subcategory': subcategory->{title, 'slug': slug.current},`;

    const category = await client.fetch(
        groq`*[_type == "category" && slug.current == "bulletin"][0]`
    );

    const fetchTopArticles = client.fetch(
        groq`*[_type == "article"] | order(publishedAt desc)[0...8] { ${content} }`
    ) as Promise<Article[]>;

    const fetchMoreArticles = client.fetch(
        groq`*[_type == "article"] | order(publishedAt desc)[8...20] { ${content} }`
    ) as Promise<Article[]>;

    const fetchBulletin = client.fetch(
        groq`*[_type == "article" && category._ref == "${category._id}"] | order(_createdAt desc) { ${content} }`
    ) as Promise<Article[]>;

    const [top_articles, more_articles, bulletin ] = await Promise.all([fetchTopArticles, fetchMoreArticles, fetchBulletin]);

	if (top_articles && more_articles && bulletin) {
		return {
			top_articles,
            more_articles,
            bulletin,
		}
	}

	error(404, 'Not found')
}) satisfies PageLoad
