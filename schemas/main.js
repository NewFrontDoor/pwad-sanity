export default {
  name: 'main',
  title: 'Main',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Sub-heading',
      name: 'subheading',
      type: 'string',
    },
    {
      title: 'Home blurb',
      name: 'blurb',
      description: 'This is the blurb that resides on the front page',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      title: 'Search blurb',
      name: 'searchblurb',
      description: 'This is the blurb that accompanies the search box on the front page',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      title: 'Featured links',
      name: 'featured',
      description:
        'Add segments below to feature on the front page',
      type: 'array',
      of: [
        {
          type: 'reference',
          title: 'Segment',
          description: 'Pick a segment from the dropdown list below',
          to: [{type: 'pageContent'}]
        }
      ]
    },
    {
      title: 'Menus',
      name: 'menuitems',
      description: 'Add pages below to feature in the main menu',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {title: 'Menu text', name: 'text', type: 'string'},
            {
              title: 'Child pages',
              name: 'childpages',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  title: 'Child page',
                  description: 'Pick a page from the dropdown list below',
                  to: [
                    {
                      type: 'pageContent',
                    },
                    {
                      type: 'hymn',
                    },
                    {
                      type: 'prayer',
                    },
                    {
                      type: 'liturgy',
                    },
                    {
                      type: 'scripture',
                    },
                    {
                      type: 'asset',
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
