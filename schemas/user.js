export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'object',
      fields: [
        {name: 'last', type: 'string', title: 'Last'},
        {name: 'first', type: 'string', title: 'First'}
      ]
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
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
        of: [
          {
            type: 'reference', to: [
              {type: 'hymn'},
              {type: 'liturgy'},
              {type: 'scripture'},
              {type: 'prayer'}
            ]
          }
        ]
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
