/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AuthContextMutationVariables = {|
  email?: ?string,
  password?: ?string,
|};
export type AuthContextMutationResponse = {|
  +auth: ?{|
    +token: ?string,
    +user: ?{|
      +name: ?string
    |},
  |}
|};
export type AuthContextMutation = {|
  variables: AuthContextMutationVariables,
  response: AuthContextMutationResponse,
|};
*/


/*
mutation AuthContextMutation(
  $email: String
  $password: String
) {
  auth(email: $email, password: $password) {
    token
    user {
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      }
    ],
    "concreteType": "Auth",
    "kind": "LinkedField",
    "name": "auth",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
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
    "name": "AuthContextMutation",
    "selections": (v1/*: any*/),
    "type": "Mutations",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AuthContextMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bcd8480f24cd241d7cbf4c0e92a410c6",
    "id": null,
    "metadata": {},
    "name": "AuthContextMutation",
    "operationKind": "mutation",
    "text": "mutation AuthContextMutation(\n  $email: String\n  $password: String\n) {\n  auth(email: $email, password: $password) {\n    token\n    user {\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7b29de44d0d8dff1759fa1f805b96e79';

module.exports = node;
