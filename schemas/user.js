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
      name: 'invoiceStatus',
      title: 'Invoice Status',
      type: 'string',
      options: {
        list: ['draft', 'open', 'paid', 'uncollectible', 'void']
      }
    },
    {
      name: 'stripeCustomerId',
      title: 'Customer ID',
      type: 'string'
    },
    {
      name: 'periodEndDate',
      title: 'Subscription period end date',
      type: 'datetime'
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
      name: 'presentationOptions',
      title: 'Presentation Options',
      type: 'object',
      fields: [
        {
          name: 'font',
          type: 'string',
          title: 'Font',
          options: {
            list: [
              {title: 'Arial', value: 'arial'},
              {title: 'Helvetica', value: 'helvetica'},
              {title: 'Arial Rounded', value: 'arounded'}
            ]
          }
        },
        {
          name: 'background',
          type: 'string',
          title: 'Background',
          options: {
            list: [
              {title: 'Presbyterian image background', value: 'pca'},
              {title: 'White', value: 'white'},
              {title: 'Black', value: 'black'},
              {title: 'Beige', value: 'beige'}
            ]
          }
        },
        {
          name: 'ratio',
          type: 'string',
          title: 'Ratio',
          options: {
            list: [
              {title: '16:9', value: 'LAYOUT_16x9'},
              {title: '16:10', value: 'LAYOUT_16x10'},
              {title: '4:3', value: 'LAYOUT_4x3'}
            ]
          }
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
