import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

export default () => {
  return S.list()
    .title('PWAD admin')
    .items([
      S.listItem()
        .title('Home and Menu')
        .child(
          S.editor()
            .title('Home and Menu')
            .id('global-main')
            .schemaType('main')
            .documentId('global-main')
        ),
      S.listItem()
        .title('Pages')
        .child(
          S.documentTypeList('pageContent').title('Page content')
        ),
      S.listItem()
        .title('Resources')
        .child(
          S.list()
            .title('Resources')
            .items([
              S.listItem()
                .title('Hymns')
                .child(S.documentTypeList('hymn').title('Hymns')),
              S.listItem()
                .title('Prayers')
                .child(S.documentTypeList('prayer').title('Prayers')),
              S.listItem()
                .title('Liturgies')
                .child(S.documentTypeList('liturgy').title('Liturgies')),
              S.listItem()
                .title('Scriptures')
                .child(S.documentTypeList('scripture').title('Scriptures')),
              S.listItem()
                .title('Files')
                .child(S.documentTypeList('asset').title('Files'))
            ])
        ),
        S.listItem()
          .title('Other')
          .child(
            S.list()
              .title('Other')
              .items([
                S.listItem()
                  .title('Authors')
                  .child(S.documentTypeList('author').title('Authors')),
                S.listItem()
                  .title('Categories')
                  .child(S.documentTypeList('category').title('Categories')),
                S.listItem()
                  .title('Copyrights')
                  .child(S.documentTypeList('copyright').title('Copyrights')),
                S.listItem()
                  .title('Keywords')
                  .child(S.documentTypeList('keyword').title('Keywords')),
                S.listItem()
                  .title('Metres')
                  .child(S.documentTypeList('metre').title('Metres')),
                S.listItem()
                  .title('Occasions')
                  .child(S.documentTypeList('occasion').title('Occasions')),
                S.listItem()
                  .title('Tunes')
                  .child(S.documentTypeList('tune').title('Tunes'))
              ])
          ),
          S.listItem()
          .title('Users')
          .child(
            S.documentTypeList('user').title('Users')
          )
    ]);
};
