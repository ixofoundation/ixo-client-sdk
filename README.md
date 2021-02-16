# ixo-client SDK

A complete package of client software for developing client
applications which connect to the [ixo](https://ixo.world/)
software stack and build on the Internet of Impact.


## Usage Example

```js
const {makeWallet, makeClient} = require('@ixo/client-sdk')

const
    wallet = await makeWallet(),
    client = makeClient(wallet)

await client.register()

await client.sendTokens('<target address>', 10)

const someEntity = await client.getEntity('<a valid entity DID>')

const someClaims = await client.listClaims(someEntity)
console.log('Here are the claims', someClaims)
```

See [client API](#client-api) and [wallet API](#wallet-api) for
details.


## Client API <a id='client-api' />

- [`makeClient`](#makeClient) to create a new client

Client methods:

- [`register`](#register)
- [`getSecpAccount`](#getSecpAccount)
- [`getAgentAccount`](#getAgentAccount)
- [`sendTokens`](#sendTokens)
- [`getDidDoc`](#getDidDoc)
- [`listEntities`](#listEntities)
- [`getEntity`](#getEntity)
- [`createEntity`](#createEntity)
- [`createEntityFile`](#createEntityFile)
- [`listAgents`](#listAgents)
- [`createAgent`](#createAgent)
- [`updateAgentStatus`](#updateAgentStatus)
- [`listClaims`](#listClaims)
- [`createClaim`](#createClaim)
- [`evaluateClaim`](#evaluateClaim)
- [`custom`](#custom)

### Create a new client

- `makeClient(signer, blockchainURL, blocksyncURL)`: Create a new ixo client <a id='makeClient' />

  - `signer`: Either a wallet object created by
    [`makeWallet`](#makeWallet) or a custom signer object with the
    following properties:

    - `secp`: Object with the following properties:

      - `address`
      - `sign(address, document)`

    - `agent`: Object with the following properties:

      - `did`
      - `address`
      - `sign(address, document)`

    See [the wallet API](#wallet-api) for more info on `secp` and
    `agent` keywords.

    Optional. If empty, client methods that require a signer won't
    work.

  - `blockchainURL`: The URL of the target ixo chain. Optional,
    defaults to the current mainnet URL.

  - `blocksyncURL`: The URL of the target ixo blocksync service.
    Optional, defaults to the current main blocksync service URL.

### Client methods

- `register(verifyKey)`: Register the current user <a id='register' />

  - `verifyKey`: Only required if the client is configured to use
    a custom signer. No need to provide this if the client is
    initialized with a wallet created with
    [`makeWallet`](#makeWallet), as the value can be obtained from
    it.

- `getSecpAccount()`: Get account info for the SECP subwallet <a id='getSecpAccount' />

- `getAgentAccount()`: Get account info for the agent subwallet <a id='getAgentAccount' />

- `sendTokens(targetAddress, amount, denom)` <a id='sendTokens' />

  - `targetAddress`: A wallet address to send coins to

  - `amount`: Any positive number

  - `denom`: Coin type. Optional, defaults to `"uixo"`.

- `getDidDoc(did)`: Return the full DID document for the given DID <a id='getDidDoc' />

- `listEntities()`: Lists all available entities <a id='listEntities' />

- `getEntity(entityDid)`: Get complete entity record for the given DID <a id='getEntity' />

- `createEntity(entityData, cellnodeURL)`: Create a new entity <a id='createEntity' />

    - `entityData`: To be documented; for now please see
      [here](https://github.com/ixofoundation/ixo-apimodule/blob/master/src/common/dummyData.ts#L3-L207)
      for an example

    - `cellnodeURL`: URL of the cell node where various project
      data will be kept. Optional, defaults to the URL of ixo's
      shared cell node

- `createEntityFile(target, dataUrl)`: Upload a file to project's cell node <a id='createEntityFile' />

  - `target`: Either a project record, a project DID, or a cell
    node URL

  - `dataUrl`: Any valid [data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)

- `getEntityFile(target, key)` <a id='getEntityFile' />

  - `target`: Either a project record, a project DID, or a cell
    node URL

  - `key`: Key of the target file, as returned from
    `createEntityFile`.

- `listAgents(entityRecordOrDid)`: List agents belonging to a given entity <a id='listAgents' />

- `createAgent(entityRecordOrDid, agentRecord)`: Create an agent for the given entity <a id='createAgent' />

  - `agentRecord`: An object with the following properties:

    - `did`: The DID of an already registered user

    - `email`: Agent email

    - `name`: Agent name

    - `role`: Any one of the following:

      - `"PO"` for owner
      - `"EA"` for evaluator
      - `"SA"` for service provider
      - `"IA"` for investor

- `updateAgentStatus(entityRecordOrDid, agentDid, updates)` <a id='updateAgentStatus' />

  - `updates`: An object with the following properties:

    - `status`: Any one of the following:

      - `0` for pending
      - `1` for approved
      - `2` for revoked
      - `3` for invited

    - `role`: See the `role` property under `createAgent`

    - `version`: Optional

- `listClaims(entityRecordOrDid, entityTemplateId)` <a id='listClaims' />

  - `entityTemplateId`: Optional, provide a value to filter claims
    by template id

- `createClaim(entityRecordOrDid, claimData)` <a id='createClaim' />

  - `claimData`: Any object is accepted

- `evaluateClaim(entityRecordOrDid, claimId, status)` <a id='evaluateClaim' />

  - `claimId`: A claim id as returned from `createClaim`

  - `status`: Any one of the following:

    - `0` for pending
    - `1` for approved
    - `2` for rejected

- `custom(walletType, msg)`: Send a custom message to the blockchain <a id='custom' />

  - `walletType`: Either `"secp"` or `"agent"`. See [the wallet API](#wallet-api)
    for more info

  - `msg`: See
    [here](https://github.com/ixofoundation/ixo-client-sdk/blob/74725d861ac7cf73e8983ce3dc9d91868cd4ce62/messages.md)
    for available options


## Wallet API <a id='wallet-api' />

`makeWallet(source, serializationPwd)`: Create a new wallet <a id='makeWallet' />

- `source`: Either a mnemonic string, a serialized wallet string,
  or an object with the schema `{secp, agent}` containing
  constructor arguments for Secp256k1HdWallet and IxoAgentWallet
  classes. Optional.

  If empty, a brand new wallet is generated. If a mnemonic string,
  recovers a wallet based on the mnemonic. If serialized wallet,
  deserializes it. If an object of constructor arguments,
  instantiates the wallet using those arguments.

- `serializationPwd`: Serializations involve encryption so a
  password is *required* if the first parameter is an encryption
  string.

`makeWallet` returns a wallet object with the following
properties:

- `secp`: An instance of CosmJS'
  [`Secp256k1HdWallet`](https://github.com/cosmos/cosmjs/tree/main/packages/launchpad#create-a-wallet)

- `agent`: An instance of `IxoAgentWallet` which is a subclass of
  `Secp256k1HdWallet` and 100% API compatible with it.

- `serialize()`


## Debugging

Put the `ixo-client-sdk` string into your `DEBUG` environment
variable to log network requests and responses. See [the `debug`
package](https://www.npmjs.com/package/debug) for more info.
