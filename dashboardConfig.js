import {feedSettings} from './dashboardfeed';

export default {
  widgets: [
    {
      name: 'feed-widget',
      options: feedSettings
    },
    {
      name: 'structure-menu',
      layout: {width: 'large'}
    },
    {
      name: 'document-list',
      options: {
        title: 'Last edited content',
        order: '_updatedAt desc',
        limit: 7,
        types: ['pageContent', 'hymn', 'liturgy', 'prayer','category','author','copyright','scripture','tune']
      },
      layout: {width: 'small'}
    },
    {
      name: 'document-list',
      options: {
        title: 'Latest created users',
        order: '_createdAt desc',
        limit: 7,
        types: ['user', 'null'],
        createButton: false
      },
      layout: {width: 'small'}
    },
    {
      name: 'document-chart',
      options: {
        title: 'Document chart',
        types: ['pageContent', 'hymn', 'liturgy', 'prayer']
      },
      layout: {width: 'large'}
    }
  ]
};
