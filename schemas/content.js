import React from 'react';
import {MdLink} from 'react-icons/md';
import {FiAnchor} from 'react-icons/fi';

const ColourRenderer = props => {
  const {hex} = props.color || '#000';
  return <span style={{color: hex}}>{props.children}</span>;
};

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
                type: 'url',
                validation: Rule =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ['https', 'http', 'mailto', 'tel']
                  })
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                description: 'Read https://css-tricks.com/use-target_blank/',
                type: 'boolean'
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
          },
          {
            name: 'anchorpoint',
            type: 'object',
            title: 'Anchor ID',
            blockEditor: {
              icon: FiAnchor
            },
            fields: [{name: 'id', type: 'string', title: 'ID'}]
          },
          {
            name: 'colourPicker',
            type: 'object',
            title: 'Text Colour',
            blockEditor: {
              icon: () => 'C',
              render: ColourRenderer
            },
            fields: [
              {
                Title: 'Colour',
                name: 'color',
                type: 'color'
              }
            ]
          }
        ]
      }
    },
    {
      type: 'image',
      options: {hotspot: true}
    },
    {
      type: 'video'
    }
  ]
};
