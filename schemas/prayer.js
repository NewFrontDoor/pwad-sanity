export default {
  name: 'prayer',
  title: 'Prayer',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'note',
      title: 'Note',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}]
    },
    {
      name: 'occasions',
      title: 'Occasions',
      type: 'array',
      of: [{type: 'occasion'}]
    },
    {
      name: 'copyright',
      title: 'Copyright',
      type: 'reference',
      to: [{type: 'copyright'}]
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'keyword'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'category'}]
    }
  ]
}
