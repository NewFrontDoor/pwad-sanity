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
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // Will be ignored if slugify is set
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200)
      }
    },
    {
      name: 'content',
      title: 'Content',
      type: 'content'
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
