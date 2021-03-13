/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AuthContextQueryVariables = {|
  token?: ?string
|};
export type AuthContextQueryResponse = {|
  +validateToken: ?{|
    +isValidToken: ?boolean
  |}
|};
export type AuthContextQuery = {|
  variables: AuthContextQueryVariables,
  response: AuthContextQueryResponse,
|};
*/


/*
query AuthContextQuery(
  $token: String
) {
  validateToken(token: $token) {
    isValidToken
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "token"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "token",
        "variableName": "token"
      }
    ],
    "concreteType": "ValidateAuth",
    "kind": "LinkedField",
    "name": "validateToken",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isValidToken",
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
    "name": "AuthContextQuery",
    "selections": (v1/*: any*/),
    "type": "Queries",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AuthContextQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7c0b38b54cd568633fc586af7bc49692",
    "id": null,
    "metadata": {},
    "name": "AuthContextQuery",
    "operationKind": "query",
    "text": "query AuthContextQuery(\n  $token: String\n) {\n  validateToken(token: $token) {\n    isValidToken\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7058b378ac60d41461a34ae9b0324138';

module.exports = node;
