/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type auth_signInMutationVariables = {|
  email?: ?string,
  password?: ?string,
|};
export type auth_signInMutationResponse = {|
  +auth: ?{|
    +token: ?string
  |}
|};
export type auth_signInMutation = {|
  variables: auth_signInMutationVariables,
  response: auth_signInMutationResponse,
|};
*/


/*
mutation auth_signInMutation(
  $email: String
  $password: String
) {
  auth(email: $email, password: $password) {
    token
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
    "name": "auth_signInMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "auth_signInMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "426f643ee11919b4610556a4fda48578",
    "id": null,
    "metadata": {},
    "name": "auth_signInMutation",
    "operationKind": "mutation",
    "text": "mutation auth_signInMutation(\n  $email: String\n  $password: String\n) {\n  auth(email: $email, password: $password) {\n    token\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '26780b3f0414b63651dfa8102cf66f32';

module.exports = node;
