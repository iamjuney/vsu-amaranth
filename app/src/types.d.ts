import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';

export interface Post {
	_type: 'post';
	_createdAt: string;
	title: string;
	slug: Slug;
    author: Author;
	excerpt?: string;
	mainImage: ImageAsset;
    imageCourtesy?: string;
    categories: Category[];
    publishedAt: string;
	body: PortableTextBlock[];
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
}

export interface Comment {
    _type: 'comment';
    _createdAt: string;
    name: string;
    approved: boolean;
    email: string;
    comment: string;
    post: Post;
}