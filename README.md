# ts-indirect-type-reference-bug

This repository reproduce the ts-bug `error TS2742: The inferred type of 'Subclass' cannot be named without a reference to `

Reproduction steps

```bash
# install pnpm if you dont have it
# https://pnpm.io/installation

# install packages
pnpm i

# build monorepo
pnpm --filter consumer... build

```

# Architecture

- No external deps ( aside of TS )
- There is 3 packages, `consumer` which depends on `middle` which depends on `types`

# Solution

Add types in `packages/consumer`:

```
pnpm --filter consumer add -D types
```

Then, in `packages/consumer/index.ts` import types

```typescript
import type {} from "types";
```

This will make typescript aware of how to forward the types
