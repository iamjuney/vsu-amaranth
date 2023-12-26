import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      description: 'A suitable title within 60 characters.',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(60),
    }),
    defineField({
      name: 'description',
      description: 'A fitting description of the article.',
      type: 'text',
      rows: 4,
      title: 'Description',
      validation: (Rule) => Rule.required().min(100).max(350),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{type: 'author'}],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'source',
          type: 'string',
          title: 'Alt text',
          description: 'E.g. Photo by ...',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: {type: 'category'},
    }),
    defineField({
      name: 'subcategory',
      title: 'Subcategory',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: {type: 'subcategory'},
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{type: 'comment'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
