import React from 'react';
import MenuReference from '../menu-refs';

export default {
  name: 'pageContent',
  title: 'Page Content',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      id: '_id'
    },
    prepare(selection) {
      const {title, id} = selection;
      return {
        title,
        media: <MenuReference id={id} />
      };
    }
  }
};
