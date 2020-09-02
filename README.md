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

### Universal Wallet

This module is currently being developed alongside the univeral wallet experiemental implementation in the W3C CCG.

See https://github.com/w3c-ccg/universal-wallet-interop-spec

## Release process

### Unstable releases

Unstable releases are automatic, from CD:

- On every commit to master an unstable release is pushed. An unstable release is a release with a tag of the form: vA.B.C-unstable.X. Everytime a PR is merged, X is incremented.
- If "skip-ci" is present in the commit message, the aforementioned behavior is skipped

### Stable releases

Stable releases are triggered by a dev locally

- Make sure you are familiar with [Semantic Versioning](https://semver.org/)
- Run `npm install` and `npm build` in the root level directory
- Run
  - `npm run publish:stable:patch` for a patch version increment
  - `npm run publish:stable:minor` for a minor version increment
  - `npm run publish:stable:major` for a major version increment

### Example

- Current version is v0.1.0
- A PR is made to fix bug A. When it's merged a release is made: v0.1.0-unstable-0
- A PR is made to add feature B. When it's merged a release is made: v0.1.0-unstable-1
- A PR is made to add feature C. When it's merged a release is made: v0.1.0-unstable-2
- Dev runs `npm run publish:stable:patch`. Current version is v0.1.0
- A PR is made to fix bug D. When it's merged a release is made: v0.1.1-unstable-0
- etc...

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
