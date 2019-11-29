export default {
  name: 'copyright',
  title: 'Copyright',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'text',
      rows: 4
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
};
