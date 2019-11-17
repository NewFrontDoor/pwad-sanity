export default {
  name: 'occasion',
  title: 'Occasion',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'parent',
      title: 'Parent',
      type: 'reference',
      to: [{type: 'occasion'}]
    },
    {
      name: 'churchyear',
      title: 'Church year',
      type: 'boolean'
    }
  ]
}
