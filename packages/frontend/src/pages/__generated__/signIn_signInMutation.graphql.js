/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type signIn_signInMutationVariables = {|
  email?: ?string,
  password?: ?string,
|};
export type signIn_signInMutationResponse = {|
  +auth: ?{|
    +token: ?string
  |}
|};
export type signIn_signInMutation = {|
  variables: signIn_signInMutationVariables,
  response: signIn_signInMutationResponse,
|};
*/


/*
mutation signIn_signInMutation(
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
    "name": "signIn_signInMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "signIn_signInMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b5f0c82076bc541bb1a398c5ce5535f1",
    "id": null,
    "metadata": {},
    "name": "signIn_signInMutation",
    "operationKind": "mutation",
    "text": "mutation signIn_signInMutation(\n  $email: String\n  $password: String\n) {\n  auth(email: $email, password: $password) {\n    token\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '13a9869e38111081235e9cd61ba03f85';

module.exports = node;
