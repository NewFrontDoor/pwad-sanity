import {MdAccountCircle} from 'react-icons/md';

export default {
  name: 'user',
  title: 'User',
  type: 'document',
  icon: MdAccountCircle,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'object',
      readOnly: 'true',
      fields: [
        {name: 'last', type: 'string', title: 'Last'},
        {name: 'first', type: 'string', title: 'First'}
      ]
    },
    {
      name: 'email',
      title: 'Email',
      readOnly: 'true',
      type: 'string'
    },
    {
      name: 'hasFreeAccount',
      title: 'Free Account',
      type: 'boolean'
    },
    {
      name: 'hasPaidAccount',
      title: 'Paid Account',
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
      readOnly: 'true',
      type: 'string',
      hidden: true
    },
    {
      name: 'shortlist',
      title: 'Shortlist',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'hymn'},
            {type: 'liturgy'},
            {type: 'scripture'},
            {type: 'prayer'}
          ]
        }
      ]
    },
    {
      name: 'permission',
      title: 'Permissions',
      type: 'object',
      fields: [
        {
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
        }
      ]
    }
  ],
  preview: {
    select: {
      first: 'name.first',
      last: 'name.last',
      subtitle: 'email'
    },
    prepare(selection) {
      const {first, last, subtitle} = selection;
      return {
        title: `${first} ${last}`,
        subtitle
      };
    }
  }
};
