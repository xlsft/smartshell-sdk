import { Shell } from "../../mod.ts";
import { gql } from "../../src/utils/syntax.ts";
import type { IntrospectQuery } from "../types/types.ts";

const shell = new Shell({ anonymous: true })

export const introspect = async () => { return (await shell.call<IntrospectQuery>(gql`{
    __schema {
        queryType {
            name
            fields {
                name
                args {
                    name
                    type {
                        ...TypeRef
                    }
                }
                type {
                    ...TypeRef
                }
                isDeprecated
                deprecationReason
            }
        }
        mutationType {
            name
            fields {
                name
                args {
                    name
                    type {
                        ...TypeRef
                    }
                }
                type {
                    ...TypeRef
                }
                isDeprecated
                deprecationReason
            }
        }
        types {
            name
            kind
            inputFields {
                name
                type {
                    name
                    kind
                    ofType {
                        name
                        kind
                        ofType {
                            name
                            kind
                            ofType {
                                name
                                kind
                                ofType {
                                    name
                                    kind
                                }
                            }
                        }
                    }
                }
            }
            enumValues {
                name
            }
            possibleTypes {
                name
            }
            fields {
                name
                type {
                    name
                    kind
                    ofType {
                        name
                        kind
                        ofType {
                            name
                            kind
                            ofType {
                                name
                                kind
                                ofType {
                                    name
                                    kind
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

fragment TypeRef on __Type {
  kind
  name
  ofType {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
          }
        }
      }
    }
  }
}

`)).__schema}