/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BuyerGuaranteeTestQueryVariables = {};
export type BuyerGuaranteeTestQueryResponse = {
    readonly artwork: {
        readonly " $fragmentRefs": FragmentRefs<"BuyerGuarantee_artwork">;
    } | null;
};
export type BuyerGuaranteeTestQuery = {
    readonly response: BuyerGuaranteeTestQueryResponse;
    readonly variables: BuyerGuaranteeTestQueryVariables;
};



/*
query BuyerGuaranteeTestQuery {
  artwork(id: "whatevs") {
    ...BuyerGuarantee_artwork
    id
  }
}

fragment BuyerGuarantee_artwork on Artwork {
  is_acquireable: isAcquireable
  is_offerable: isOfferable
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "whatevs"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BuyerGuaranteeTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BuyerGuarantee_artwork"
          }
        ],
        "storageKey": "artwork(id:\"whatevs\")"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BuyerGuaranteeTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "alias": "is_acquireable",
            "args": null,
            "kind": "ScalarField",
            "name": "isAcquireable",
            "storageKey": null
          },
          {
            "alias": "is_offerable",
            "args": null,
            "kind": "ScalarField",
            "name": "isOfferable",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "artwork(id:\"whatevs\")"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "BuyerGuaranteeTestQuery",
    "operationKind": "query",
    "text": "query BuyerGuaranteeTestQuery {\n  artwork(id: \"whatevs\") {\n    ...BuyerGuarantee_artwork\n    id\n  }\n}\n\nfragment BuyerGuarantee_artwork on Artwork {\n  is_acquireable: isAcquireable\n  is_offerable: isOfferable\n}\n"
  }
};
})();
(node as any).hash = 'de621d52ac2587b8a82786b6a78ded16';
export default node;
