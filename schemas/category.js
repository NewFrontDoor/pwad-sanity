export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'parent',
      title: 'Parent',
      type: 'reference',
      to: [{type: 'category'}]
    }
  ]
}
