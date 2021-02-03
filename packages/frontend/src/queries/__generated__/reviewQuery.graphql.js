/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type reviewQueryVariables = {|
  id?: ?string
|};
export type reviewQueryResponse = {|
  +review: ?{|
    +_id: ?string,
    +title: ?string,
    +overall: ?number,
  |}
|};
export type reviewQuery = {|
  variables: reviewQueryVariables,
  response: reviewQueryResponse,
|};
*/


/*
query reviewQuery(
  $id: String
) {
  review(id: $id) {
    _id
    title
    overall
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
    "name": "reviewQuery",
    "selections": (v1/*: any*/),
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "reviewQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f8c5dda763edaa33120826a14f97445d",
    "id": null,
    "metadata": {},
    "name": "reviewQuery",
    "operationKind": "query",
    "text": "query reviewQuery(\n  $id: String\n) {\n  review(id: $id) {\n    _id\n    title\n    overall\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a2d697dcbf04713be8113369ede1b537';

module.exports = node;
