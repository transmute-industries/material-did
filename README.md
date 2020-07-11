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

The previous core module has been deprecated, please updrade.

`@transmute/material-did-core` => `@material-did/core`

This module contains all modules... its also very large.

```
npm i @material-did/core
```

## Modules

See [./packages](./packages).

### License

```
Copyright 2020 Transmute Industries Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
