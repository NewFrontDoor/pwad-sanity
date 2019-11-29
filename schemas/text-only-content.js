export default {
  title: 'Text Only Content',
  name: 'textOnlyContent',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [{title: 'Normal', value: 'normal'}],
      lists: [],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'}
        ],
        annotations: []
      }
    }
  ]
};
