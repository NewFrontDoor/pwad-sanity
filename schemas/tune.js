export default {
  name: 'tune',
  title: 'Tune',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'metre',
      title: 'Metre',
      type: 'reference',
      to: [{type: 'metre'}]
    },
    {
      name: 'composer',
      title: 'Composer',
      type: 'reference',
      to: [{type: 'author'}]
    },
    {
      name: 'files',
      title: 'Files',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'asset'}
          ]
        }
      ]
    },
    {
      name: 'musicCopyright',
      title: 'Music Copyright',
      type: 'reference',
      to: [{type: 'copyright'}]
    },
  ]
}
