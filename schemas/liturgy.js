function toPlainText(blocks = []) {
  return (
    blocks
      // Loop through each block
      .map(block => {
        // if it's not a text block with children,
        // return nothing
        if (block._type !== 'block' || !block.children) {
          return '';
        }

        // Loop through the children spans, and join the
        // text strings
        return block.children.map(child => child.text).join('');
      })
      // Join the parapgraphs leaving split by two linebreaks
      .join('\n\n')
  );
}

export default {
  name: 'liturgy',
  title: 'Liturgy',
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
      title: 'Content',
      type: 'content'
    },
    {
      name: 'note',
      title: 'Note',
      type: 'text'
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
          to: [{type: 'occasion'}]
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
          to: [{type: 'keyword'}]
        }
      ],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'files',
      title: 'Files',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'asset'}]
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
      const {title, subtitle, preview} = selection;
      return {
        title,
        subtitle: subtitle ? subtitle : 'No listed source',
        description: toPlainText(preview)
      };
    }
  }
};
