export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'reference',
      to: [{type: 'metre'}]
    },
    {
      name: 'hasFreeAccount',
      title: 'Free Account',
      type: 'boolean'
    },
    {
      name: 'profilePhoto',
      title: 'Profile photo',
      type: 'string'
    },
    {
      name: 'googleProviderId',
      title: 'Google Provider Id',
      type: 'string',
      readonly: true
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
      readOnly: true
    },
    {
      name: 'shortlist',
      title: 'Shortlist',
      type: 'object',
      fields: [{
        name: 'hymns',
        title: 'Hymns',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'hymn'}]}]
      }]
    },
    {
      name: 'permission',
      title: 'Permissions',
      type: 'object',
      fields: [{
        name: 'isprotected',
        title: 'Is protected',
        type: 'boolean',
        readOnly: true
      },
      {
        name: 'role',
        title: 'Role',
        type: 'string',
        options: {
          list: [
            {title: 'Admin', value: 'admin'},
            {title: 'Committee', value: 'committee'},
            {title: 'Public', value: 'public'}
          ]
        }
      }]
    }
  ]
}
