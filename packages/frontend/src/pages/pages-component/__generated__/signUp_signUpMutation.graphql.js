/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type signUp_signUpMutationVariables = {|
  username?: ?string,
  email?: ?string,
  password?: ?string,
  name?: ?string,
|};
export type signUp_signUpMutationResponse = {|
  +addUser: ?{|
    +_id: ?string
  |}
|};
export type signUp_signUpMutation = {|
  variables: signUp_signUpMutationVariables,
  response: signUp_signUpMutationResponse,
|};
*/


/*
mutation signUp_signUpMutation(
  $username: String
  $email: String
  $password: String
  $name: String
) {
  addUser(username: $username, name: $name, email: $email, password: $password) {
    _id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "username"
},
v4 = [
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
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      },
      {
        "kind": "Variable",
        "name": "username",
        "variableName": "username"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "addUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "signUp_signUpMutation",
    "selections": (v4/*: any*/),
    "type": "Mutations",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "signUp_signUpMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "a12f0a56e106af23cbd4dc5c4c4a66e5",
    "id": null,
    "metadata": {},
    "name": "signUp_signUpMutation",
    "operationKind": "mutation",
    "text": "mutation signUp_signUpMutation(\n  $username: String\n  $email: String\n  $password: String\n  $name: String\n) {\n  addUser(username: $username, name: $name, email: $email, password: $password) {\n    _id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd287b543c953b9a6b0a3dc540ed356eb';

module.exports = node;
