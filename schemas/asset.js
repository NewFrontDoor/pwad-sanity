export default {
  name: 'asset',
  title: 'Asset',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'file',
      title: 'File',
      type: 'string'
    },
    {
      name: 'size',
      title: 'Size',
      type: 'number'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url'
    },
    {
      name: 'mimetype',
      title: 'Mimetype',
      type: 'string'
    },
    {
      name: 'path',
      title: 'Path',
      type: 'string'
    },
    {
      name: 'bucket',
      title: 'Bucket',
      type: 'string'
    }
  ]
};
