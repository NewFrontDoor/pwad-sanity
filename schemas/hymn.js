function toPlainText(blocks = []) {
  return blocks
    // loop through each block
    .map(block => {
      // if it's not a text block with children, 
      // return nothing
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      // loop through the children spans, and join the
      // text strings
      return block.children.map(child => child.text).join('')
    })
    // join the parapgraphs leaving split by two linebreaks
    .join('\n\n')
}

export default {
  name: 'hymn',
  title: 'Hymn',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}]
    },
    {
      name: 'hymnNumber',
      title: 'Hymn Number',
      type: 'number'
    },
    {
      name: 'content',
      title: 'Lyrics',
      type: 'textOnlyContent'
    },
    {
      name: 'tune',
      title: 'Tune',
      type: 'reference',
      to: [{type: 'tune'}]
    },
    {
      name: 'book',
      title: 'Book',
      type: 'string',
      options: {
        list: [
          {
            title: '-',
            value: 'none'
          },
          {
            title: 'Genesis',
            value: 'genesis'
          },
          {
            title: 'Exodus',
            value: 'exodus'
          },
          {
            title: 'Leviticus',
            value: 'leviticus'
          },
          {
            title: 'Numbers',
            value: 'numbers'
          },
          {
            title: 'Deuteronomy',
            value: 'deuteronomy'
          },
          {
            title: 'Joshua',
            value: 'joshua'
          },
          {
            title: 'Judges',
            value: 'judges'
          },
          {
            title: 'Ruth',
            value: 'ruth'
          },
          {
            title: '1 Samuel',
            value: 'first_samuel'
          },
          {
            title: '2 Samuel',
            value: 'second_samuel'
          },
          {
            title: '1 Kings',
            value: 'first_kings'
          },
          {
            title: '2 Kings',
            value: 'second_kings'
          },
          {
            title: '1 Chronicles',
            value: 'first_chronicles'
          },
          {
            title: '2 Chronicles',
            value: 'second_chronicles'
          },
          {
            title: 'Ezra',
            value: 'ezra'
          },
          {
            title: 'Nehemiah',
            value: 'nehemiah'
          },
          {
            title: 'Esther',
            value: 'esther'
          },
          {
            title: 'Job',
            value: 'job'
          },
          {
            title: 'Psalms',
            value: 'psalms'
          },
          {
            title: 'Proverbs',
            value: 'proverbs'
          },
          {
            title: 'Ecclesiastes',
            value: 'ecclesiastes'
          },
          {
            title: 'Song of Solomon',
            value: 'song_of_songs'
          },
          {
            title: 'Isaiah',
            value: 'isaiah'
          },
          {
            title: 'Jeremiah',
            value: 'jeremiah'
          },
          {
            title: 'Lamentations',
            value: 'lamentations'
          },
          {
            title: 'Ezekiel',
            value: 'ezekiel'
          },
          {
            title: 'Daniel',
            value: 'daniel'
          },
          {
            title: 'Hosea',
            value: 'hosea'
          },
          {
            title: 'Joel',
            value: 'joel'
          },
          {
            title: 'Amos',
            value: 'amos'
          },
          {
            title: 'Obadiah',
            value: 'obadiah'
          },
          {
            title: 'Jonah',
            value: 'jonah'
          },
          {
            title: 'Micah',
            value: 'micah'
          },
          {
            title: 'Nahum',
            value: 'nahum'
          },
          {
            title: 'Habakkuk',
            value: 'habakkuk'
          },
          {
            title: 'Zephaniah',
            value: 'zephaniah'
          },
          {
            title: 'Haggai',
            value: 'haggai'
          },
          {
            title: 'Zechariah',
            value: 'zechariah'
          },
          {
            title: 'Malachi',
            value: 'malachi'
          },
          {
            title: 'Matthew',
            value: 'matthew'
          },
          {
            title: 'Mark',
            value: 'mark'
          },
          {
            title: 'Luke',
            value: 'luke'
          },
          {
            title: 'John',
            value: 'john'
          },
          {
            title: 'Acts',
            value: 'acts'
          },
          {
            title: 'Romans',
            value: 'romans'
          },
          {
            title: '1 Corinthians',
            value: 'first_corinthians'
          },
          {
            title: '2 Corinthians',
            value: 'second_corinthians'
          },
          {
            title: 'Galatians',
            value: 'galatians'
          },
          {
            title: 'Ephesians',
            value: 'ephesians'
          },
          {
            title: 'Philippians',
            value: 'philippians'
          },
          {
            title: 'Colossians',
            value: 'colossians'
          },
          {
            title: '1 Thessalonians',
            value: 'first_thessalonians'
          },
          {
            title: '2 Thessalonians',
            value: 'second_thessalonians'
          },
          {
            title: '1 Timothy',
            value: 'first_timothy'
          },
          {
            title: '2 Timothy',
            value: 'second_timothy'
          },
          {
            title: 'Titus',
            value: 'titus'
          },
          {
            title: 'Philemon',
            value: 'philemon'
          },
          {
            title: 'Hebrews',
            value: 'hebrews'
          },
          {
            title: 'James',
            value: 'james'
          },
          {
            title: '1 Peter',
            value: 'first_peter'
          },
          {
            title: '2 Peter',
            value: 'second_peter'
          },
          {
            title: '1 John',
            value: 'first_john'
          },
          {
            title: '2 John',
            value: 'second_john'
          },
          {
            title: '3 John',
            value: 'third_john'
          },
          {
            title: 'Jude',
            value: 'jude'
          },
          {
            title: 'Revelation',
            value: 'revelation'
          }
        ],
      }
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
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'keyword'},
          ]
        }
      ],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'occasions',
      title: 'Occasions',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'occasion'},
          ]
        }
      ]
    },
    {
      name: 'verses',
      title: 'Verses',
      type: 'string'
    },
    {
      name: 'copyright',
      title: 'Words Copyright',
      type: 'reference',
      to: [{type: 'copyright'}]
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'author.name',
      preview: 'content'
    },
    prepare(selection) {
      const {title, subtitle, preview} = selection
      return {
        title: title,
        subtitle: subtitle,
        description: toPlainText(preview)
      }
    }
  }
}
