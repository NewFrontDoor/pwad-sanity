import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import category from './category'
import author from './author'
import copyright from './copyright'
import hymn from './hymn'
import keyword from './keyword'
import liturgy from './liturgy'
import menu from './menu'
import metre from './metre'
import occasion from './occasion'
import prayer from './prayer'
import scripture from './scripture'
import tune from './tune'
import asset from './asset'
import resource from './resource'
import pageContent from './page-content'
import user from './user'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([blockContent, author, category, copyright, hymn, keyword, liturgy, menu, metre, occasion, prayer, scripture, tune, asset, resource, pageContent, user])
})
