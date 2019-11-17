export default {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Type',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'asset'},
            {type: 'url'},
            {type: 'pageContent'}
          ]
        }
      ]
    },
    {
      name: 'menu',
      title: 'Menu',
      type: 'reference',
      to: [{type: 'menu'}]
    }
  ]
}
