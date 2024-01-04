import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';

export interface Article {
	_createdAt: string;
    _updatedAt: string;
	title: string;
    description: string;
	slug: string;
    authors: Author[];
	mainImage: ImageAsset;
    altText: string;
    category: Category;
    subcategory?: Subcategory;
    publishedAt: string;
	body: PortableTextBlock[];
    comments?: Comment[];
}

export interface Author {
    name: string;
    slug: Slug;
    image: ImageAsset;
    bio?: string;
}

export interface Category {
    title: string;
    slug: string;
    description?: string;
    subcategories?: Subcategory[];
}

export interface Subcategory {
    title: string;
    slug: string;
    description?: string;
}

export interface Comment {
    _createdAt: string;
    name: string;
    approved: boolean;
    email: string;
    comment: string;
}

export type HeaderLink = {
    title: string;
    slug: string;
};