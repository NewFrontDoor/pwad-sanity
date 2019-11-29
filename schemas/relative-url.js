export default {
  name: 'relativeUrl',
  title: 'Relative URL',
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
        relativeOnly: true
      }
    }
  ]
};
