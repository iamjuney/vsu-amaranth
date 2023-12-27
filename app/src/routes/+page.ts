import { getArticles } from '$lib/utils/sanity'
import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load = (async () => {
	const articles = await getArticles()

	if (articles) {
		return {
			articles
		}
	}

	error(404, 'Not found')
}) satisfies PageLoad
