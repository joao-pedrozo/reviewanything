/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type pages_indexQueryVariables = {|
  id?: ?string
|};
export type pages_indexQueryResponse = {|
  +review: ?{|
    +_id: ?string,
    +title: ?string,
    +overall: ?number,
    +imageUrl: ?string,
  |}
|};
export type pages_indexQuery = {|
  variables: pages_indexQueryVariables,
  response: pages_indexQueryResponse,
|};
*/


/*
query pages_indexQuery(
  $id: String
) {
  review(id: $id) {
    _id
    title
    overall
    imageUrl
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Review",
    "kind": "LinkedField",
    "name": "review",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "overall",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "imageUrl",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "pages_indexQuery",
    "selections": (v1/*: any*/),
    "type": "Queries",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pages_indexQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "64116806c15c976cb7600493bd4bf8b4",
    "id": null,
    "metadata": {},
    "name": "pages_indexQuery",
    "operationKind": "query",
    "text": "query pages_indexQuery(\n  $id: String\n) {\n  review(id: $id) {\n    _id\n    title\n    overall\n    imageUrl\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '54d60da6340714393d3fb1f6370962e4';

module.exports = node;
