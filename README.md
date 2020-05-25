# Material DID

[https://material-did.com](https://material-did.com)

> Material UI for Decentralized Identifiers, Verifiable Credentials and Wallets.

![CI](https://github.com/transmute-industries/material-did/workflows/CI/badge.svg)

This is a mono repo using [Lerna](https://github.com/lerna/lerna)

`Beware that lerna bootstrap causes: Invalid Hook Call Warning`... You must publish `core` to avoid this for now.

```
npm i
npm run lint
npm run test
npm run build
```

## Core

See [./packages/core](./packages/core)

This module contains all components and stories.
