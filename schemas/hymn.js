export default {
  name: 'hymn',
  title: 'Hymn',
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}]
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'book',
      title: 'Book',
      type: 'string',
      options: {
        list: [
          {title: 'Book1', value: 'book1'},
        ],
      }
    },
    {
      name: 'bookId',
      title: 'BookId',
      type: 'number'
    },
    {
      name: 'chapter',
      title: 'Chapter',
      type: 'number'
    },
    {
      name: 'chapterVerse',
      title: 'Chapter Verse',
      type: 'string'
    },
    {
      name: 'files',
      title: 'Files',
      type: 'array',
      of: [{type: 'asset'}]
    },
    {
      name: 'hymnNumber',
      title: 'Hymn Number',
      type: 'number'
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'keyword'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'lyrics',
      title: 'Lyrics',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'occasions',
      title: 'Occasions',
      type: 'array',
      of: [{type: 'occasion'}]
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'tune',
      title: 'Tune',
      type: 'reference',
      to: [{type: 'tune'}]
    },
    {
      name: 'verses',
      title: 'Verses',
      type: 'string'
    },
    {
      name: 'wordsCopyright',
      title: 'Words Copyright',
      type: 'reference',
      to: [{type: 'copyright'}]
    },
  ]
}
