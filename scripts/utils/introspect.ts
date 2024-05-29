import { Shell } from "../../mod.ts";
import { gql } from "../../src/utils/syntax.ts";
import type { IntrospectQuery } from "../types/types.ts";

const shell = new Shell({ anonymous: true })

export const introspect = async () => { return (await shell.call<IntrospectQuery>(gql`{
    __schema {
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
}`)).__schema.types}