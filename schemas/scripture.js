export default {
  name: 'scripture',
  title: 'Scripture',
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
      name: 'translation',
      title: 'Translation',
      type: 'string',
      options: {
        list: [
          {title: 'NIV', value: 'niv'},
          {title: 'KJV', value: 'kjv'}
        ]
      }
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
      of: [
        {
          type: 'reference',
          to: [
            {type: 'occasion'}
          ]
        }
      ]
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'keyword'}
          ]
        }
      ],
      options: {
        layout: 'tags'
      }
    }
  ]
}
