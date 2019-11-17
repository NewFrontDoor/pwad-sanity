export default {
  name: 'liturgy',
  title: 'Liturgy',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
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
      name: 'copyright',
      title: 'Copyright',
      type: 'reference',
      to: [{type: 'copyright'}]
    },
    {
      name: 'occasions',
      title: 'Occasions',
      type: 'array',
      of: [{type: 'occasion'}]
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
      name: 'files',
      title: 'Files',
      type: 'array',
      of: [{type: 'asset'}]
    }
  ]
}
