function toPlainText(blocks = []) {
  return blocks
    // loop through each block
    .map(block => {
      // if it's not a text block with children, 
      // return nothing
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      // loop through the children spans, and join the
      // text strings
      return block.children.map(child => child.text).join('')
    })
    // join the parapgraphs leaving split by two linebreaks
    .join('\n\n')
}

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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}]
    },
    {
      name: 'content',
      title: 'Prayer content',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'note',
      title: 'Note',
      type: 'text'
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
      name: 'copyright',
      title: 'Copyright',
      type: 'reference',
      to: [{type: 'copyright'}]
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
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'category'}
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'author.name',
      preview: 'content'
    },
    prepare(selection) {
      const {title, subtitle, preview} = selection
      return {
        title: title,
        subtitle: subtitle ? subtitle : 'No listed author',
        description: toPlainText(preview)
      }
    }
  }
}
