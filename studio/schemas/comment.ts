import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      initialValue: false,
      description: "Comments won't show on the site without approval",
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) =>
        Rule.email()
          .required()
          .regex(/@vsu\.edu\.ph$/),
    }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      comment: 'comment',
      article: 'article.title',
    },
    prepare({title, comment, article}) {
      return {
        title,
        subtitle: `${comment.substring(0, 50)}...`,
        description: article,
      }
    },
  },
})
