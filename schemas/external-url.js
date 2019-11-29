export default {
  name: 'externalUrl',
  title: 'External URL',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      options: {
        scheme: ['https']
      }
    }
  ]
};
