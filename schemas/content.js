import {MdLink} from 'react-icons/md';

export default {
  title: 'Content',
  name: 'content',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'}
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'}
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              }
            ]
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            blockEditor: {
              icon: MdLink
            },
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  {type: 'pageContent'},
                  {type: 'prayer'},
                  {type: 'liturgy'},
                  {type: 'scripture'},
                  {type: 'hymn'},
                  {type: 'pageContent'}
                ]
              }
            ]
          }
        ]
      }
    },
    {
      type: 'image',
      options: {hotspot: true}
    }
  ]
};
