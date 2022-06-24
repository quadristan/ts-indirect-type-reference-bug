import { createBaseClass } from "middle";

import type {} from "types";

// this will trigger an error
// index.ts:3:14 - error TS2742: The inferred type of 'Subclass' cannot be named without
// a reference to '../middle/node_modules/types/lib'. This is likely not portable. A type annotation is necessary.
export class Subclass extends createBaseClass() {}
