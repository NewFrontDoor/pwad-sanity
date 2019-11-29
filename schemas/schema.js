import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import main from './main';
import content from './content';
import textOnlyContent from './text-only-content';
import category from './category';
import author from './author';
import copyright from './copyright';
import hymn from './hymn';
import keyword from './keyword';
import liturgy from './liturgy';
import menu from './menu';
import metre from './metre';
import occasion from './occasion';
import prayer from './prayer';
import scripture from './scripture';
import tune from './tune';
import asset from './asset';
import resource from './resource';
import pageContent from './page-content';
import user from './user';
import relativeUrl from './relative-url';
import externalUrl from './external-url';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    main,
    content,
    textOnlyContent,
    author,
    category,
    copyright,
    hymn,
    keyword,
    liturgy,
    menu,
    metre,
    occasion,
    prayer,
    scripture,
    tune,
    asset,
    resource,
    pageContent,
    user,
    relativeUrl,
    externalUrl
  ])
});
