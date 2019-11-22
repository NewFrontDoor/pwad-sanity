export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'dates',
      title: 'Dates',
      type: 'string'
    }]
}
