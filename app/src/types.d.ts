import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';

export interface Article {
	_type: 'article';
	_createdAt: string;
	title: string;
    description: string;
	slug: Slug;
    author: Author;
	mainImage: ImageAsset;
    category: Category;
    subcategory: Category;
    publishedAt: string;
	body: PortableTextBlock[];
    comments?: Comment[];
}

export interface Author {
    _type: 'author';
    name: string;
    slug: Slug;
    image?: ImageAsset;
    bio?: string;
}

export interface Category {
    _type: 'category';
    title: string;
    slug: Slug;
    subcategories?: Subcategory[];
}

export interface Subcategory {
    _type: 'subcategory';
    title: string;
    slug: Slug;
}

export interface Comment {
    _type: 'comment';
    _createdAt: string;
    name: string;
    approved: boolean;
    email: string;
    comment: string;
}