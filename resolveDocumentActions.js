// Import the default document actions
import defaultResolve from 'part:@sanity/base/document-actions';

import {PPTAction} from './PPTAction';

export default function resolveDocumentActions(props) {
  return [...defaultResolve(props), PPTAction];
}
