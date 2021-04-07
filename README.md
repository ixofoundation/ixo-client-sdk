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

const someProject = await client.getProject('<a valid project DID>')

const someClaims = await client.listClaims(someProject)
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
- [`listProjects`](#listProjects)
- [`listTemplates`](#listTemplates)
- [`listCells`](#listCells)
- [`getProject`](#getProject)
- [`getTemplate`](#getTemplate)
- [`getCell`](#getCell)
- [`createProject`](#createProject)
- [`createEntityFile`](#createEntityFile)
- [`getEntityFile`](#getEntityFile)
- [`updateProjectStatus`](#updateProjectStatus)
- [`getProjectFundAddress`](#getProjectFundAddress)
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

    **Note**: Registering triggers a write operation on the
    blockchain which requires a gas fee in terms of ixo tokens to
    be paid. So the account you are trying to register has to have
    some ixo tokens. To credit accounts on the testnet you can use
    the [faucet](https://t.me/joinchat/I4_MXBmVGJKAMmEVX3SVaA).
    The specific address you will need to use is the address of
    the agent subwallet. Get it with `wallet.agent.address`. See
    [wallet API](#wallet-api) for more info.

- `getSecpAccount()`: Get account info for the SECP subwallet <a id='getSecpAccount' />

- `getAgentAccount()`: Get account info for the agent subwallet <a id='getAgentAccount' />

- `sendTokens(targetAddress, amount, denom)` <a id='sendTokens' />

  - `targetAddress`: A wallet address to send coins to

  - `amount`: Any positive number

  - `denom`: Coin type. Optional, defaults to `"uixo"`.

- `getDidDoc(did)`: Return the full DID document for the given DID <a id='getDidDoc' />

- `listProjects()`: Lists all available projects <a id='listProjects' />

- `listTemplates()`: Lists all available templates <a id='listTemplates' />

- `listCells()`: Lists all available cells <a id='listCells' />

- `getProject(projectDid)`: Get complete project record for the given DID <a id='getProject' />

- `getTemplate(tplDid)`: Get complete template record for the given DID <a id='getTemplate' />

- `getCell(cellDid)`: Get complete cell record for the given DID <a id='getCell' />

- `createProject(projectData, cellnodeURL)`: Create a new project <a id='createProject' />

    - `projectData`: To be documented; for now please see
      [here](https://github.com/ixofoundation/ixo-apimodule/blob/master/src/common/dummyData.ts#L3-L207)
      for an example

    - `cellnodeURL`: URL of the cell node where various project
      data will be kept. Optional, defaults to the URL of ixo's
      shared cell node

- `createEntityFile(target, dataUrl)`: Upload a file to entity's cell node <a id='createEntityFile' />

  - `target`: Either an entity record, an entity DID, or a cell
    node URL

  - `dataUrl`: Any valid [data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)

- `getEntityFile(target, key)` <a id='getEntityFile' />

  - `target`: Either an entity record, an entity DID, or a cell
    node URL

  - `key`: Key of the target file, as returned from
    `createProjectFile`.

- `updateProjectStatus(target, status)` <a id='updateProjectStatus' />

  - `target`: Either a project record or a project DID

  - `status`: `"CREATED"` | `"PENDING"` | `"FUNDED"` | `"STARTED"` | `"STOPPED"` | `"PAIDOUT"`

  **Note I**: Status is a state machine in that you can only
  update it in the order seen above. So `"CREATED"` -> `"PENDING"`
  is a valid transition while `"CREATED"` -> `"STARTED"` is not.

  **Note II**: Before setting a project's status to `FUNDED`, you
  have to send some tokens to the project's wallet first. If you
  don't do that before trying to set the status to `FUNDED`, you
  won't get an error but the status won't be changed either. This
  is because of a poor error handling logic in the ixo backend
  which is going to be fixed as soon as possible. For now just
  please keep this in mind. Use `getProjectFundAddress` below to
  get the wallet address to send tokens to.

  Use `getProjectFundAddress` below to get the wallet address to
  send tokens to.

- `getProjectFundAddress(projectDid)` <a id='getProjectFundAddress' />

- `listAgents(projectRecordOrDid)`: List agents belonging to a given project <a id='listAgents' />

- `createAgent(projectRecordOrDid, agentRecord)`: Create an agent for the given project <a id='createAgent' />

  - `agentRecord`: An object with the following properties:

    - `did`: The DID of an already registered user

    - `email`: Agent email

    - `name`: Agent name

    - `role`: Any one of the following:

      - `"PO"` for owner
      - `"EA"` for evaluator
      - `"SA"` for service provider
      - `"IA"` for investor

    **Note**: The new agent will need to be approved before they
    can start their activity. See `updateAgentStatus` below:

- `updateAgentStatus(projectRecordOrDid, agentDid, updates)` <a id='updateAgentStatus' />

  - `updates`: An object with the following properties:

    - `status`: Any one of the following:

      - `0` for pending
      - `1` for approved
      - `2` for revoked
      - `3` for invited

    - `role`: See the `role` property under `createAgent`

    - `version`: Optional

- `listClaims(projectRecordOrDid, projectTemplateId)` <a id='listClaims' />

  - `projectTemplateId`: Optional, provide a value to filter claims
    by template id

- `createClaim(projectRecordOrDid, templateRecordOrDid, claimItems)` <a id='createClaim' />

  - `claimItems`: Array of objects that has the following schema:

    - `id`: Id of the claim item. Must match the value in the
      claim template.

    - `attribute`: Attribute of the claim item. Must match the
      value in the claim template.

    - `value`: Value of the claim item.


- `evaluateClaim(projectRecordOrDid, claimId, status)` <a id='evaluateClaim' />

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
  or a plain object representing a wallet state (possibly obtained
  via `toJSON()` -see below for details). Optional.

  If empty, a brand new wallet is generated. If a mnemonic string,
  recovers a wallet based on the mnemonic. If serialized wallet,
  deserializes it. If a state object, revives the wallet using
  that state.

- `serializationPwd`: Serializations involve encryption so a
  password is *required* if the first parameter is an encryption
  string.

`makeWallet` returns a wallet object with the following
properties:

- `secp`: An instance of CosmJS'
  [`Secp256k1HdWallet`](https://github.com/cosmos/cosmjs/tree/main/packages/launchpad#create-a-wallet)

- `agent`: An instance of `IxoAgentWallet` which is a subclass of
  `Secp256k1HdWallet` and 100% API compatible with it.

- `toJSON()`: Standard
  [`toJSON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#tojson_behavior)
  method for `JSON.stringify` integration. One can also use this
  to get a representation of the wallet's internal state as a
  plain object and use it in a context where a class instance is
  not supported. (e.g. Global application state of a client app)


## Debugging

Put the `ixo-client-sdk` string into your `DEBUG` environment
variable to log network requests and responses. See [the `debug`
package](https://www.npmjs.com/package/debug) for more info.
