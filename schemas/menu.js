export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    {
      name: 'code',
      title: 'Code',
      type: 'string'
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Menu list', value: 'list'},
          {title: 'Menu link', value: 'link'},
        ],
      }
    },
    {
      name: 'link',
      title: 'Link',
      type: 'reference',
      to: [{type: 'pageContent'}]
    }
  ]
}
