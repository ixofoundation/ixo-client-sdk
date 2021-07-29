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

See [wallet API](#wallet-api) and [client API](#client-api) for
details.


## Wallet API <a id='wallet-api' />

`makeWallet(source)`: Create a new wallet <a id='makeWallet' />

- `source`: Either a mnemonic string or a plain object
  representing a wallet state (possibly obtained via `toJSON()`
  -see below for details). Optional.

  If empty, a brand new wallet is generated. If a mnemonic string,
  recovers a wallet based on the mnemonic. If a state object,
  revives the wallet using that state.

`makeWallet` returns a wallet object with the following
properties:

- `secp`: An instance of CosmJS'
  [`Secp256k1HdWallet`](https://github.com/cosmos/cosmjs/tree/main/packages/launchpad#create-a-wallet)

- `agent`: A custom wallet instance implementing [OfflineAminoSigner][offline-amino-signer]

- `toJSON()`: Standard
  [`toJSON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#tojson_behavior)
  method for `JSON.stringify` integration. One can also use this
  to get a representation of the wallet's internal state as a
  plain object and use it in a context where a class instance is
  not supported. (e.g. Global application state of a client app)


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
- [`staking.listValidators`](#staking.listValidators)
- [`staking.getValidator`](#staking.getValidator)
- [`staking.myDelegations`](#staking.myDelegations)
- [`staking.pool`](#staking.pool)
- [`staking.validatorDistribution`](#staking.validatorDistribution)
- [`staking.delegatorValidatorRewards`](#staking.delegatorValidatorRewards)
- [`staking.delegation`](#staking.delegation)
- [`staking.delegatorDelegations`](#staking.delegatorDelegations)
- [`staking.delegatorUnbondingDelegations`](#staking.delegatorUnbondingDelegations)
- [`staking.delegatorRewards`](#staking.delegatorRewards)
- [`staking.balances`](#staking.balances)
- [`staking.delegate`](#staking.delegate)
- [`staking.undelegate`](#staking.undelegate)
- [`staking.redelegate`](#staking.redelegate)
- [`bonds.byId`](#bonds.byId)
- [`bonds.list`](#bonds.list)
- [`bonds.buy`](#bonds.buy)
- [`bonds.sell`](#bonds.sell)
- [`custom`](#custom)

### Create a new client

- `makeClient(signer, blockchainURL, blocksyncURL)`: Create a new ixo client <a id='makeClient' />

  - `signer`: Either a wallet object created by
    [`makeWallet`](#makeWallet) or a custom signer object with the
    following properties:

    - `secp`: Object implementing [OfflineAminoSigner][offline-amino-signer]

    - `agent`: Object implementing [OfflineAminoSigner][offline-amino-signer] with the following extra property:

      - `did`

    See [the wallet API](#wallet-api) for more info on `secp` and
    `agent` keywords.

    Optional. If empty, client methods that require a signer won't
    work.

  - `blockchainURL`: The URL of the target ixo chain. Optional,
    defaults to the current mainnet URL.

  - `blocksyncURL`: The URL of the target ixo blocksync service.
    Optional, defaults to the current main blocksync service URL.

### Client methods

- `register(pubKey)`: Register the current user <a id='register' />

  - `pubKey`: Only required if the client is configured to use
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
    the agent subwallet. Get it with `wallet.agent.getAccounts`.
    See [wallet API](#wallet-api) for more info.

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

- `createClaim(projectRecordOrDid, templateRecordOrDid, claimItems, opts)` <a id='createClaim' />

  - `claimItems`: Array of objects that has the following schema:

    - `id`: Id of the claim item. Must match the value in the
      claim template.

    - `attribute`: Attribute of the claim item. Must match the
      value in the claim template.

    - `value`: Value of the claim item.

  - `opts`: An object with the following properties:

    - `dryRun`: Boolean, default `false`. If `true`, Instead of
      creating the claims, returns the full HTTP request that will
      create the claims.


- `evaluateClaim(projectRecordOrDid, claimId, status)` <a id='evaluateClaim' />

  - `claimId`: A claim id as returned from `createClaim`

  - `status`: Any one of the following:

    - `0` for pending
    - `1` for approved
    - `2` for rejected

- `staking`:

    An object that groups the following staking related methods:

    - `listValidators(urlParams)` <a id='staking.listValidators' />

        See
        [here](https://testnet.ixo.world/swagger/#/Staking/get_staking_validators)
        for a description of the url params of the related
        endpoint, and its return value.

    - `getValidator(validatorAddress)` <a id='staking.getValidator' />

        See
        [here](https://testnet.ixo.world/swagger/#/Staking/get_staking_validators__validatorAddr_])
        for the return value.

    - `myDelegations()` <a id='staking.myDelegations' />

        See
        [here](https://testnet.ixo.world/swagger/#/Staking/get_staking_delegators__delegatorAddr__delegations)
        for the return value.

    - `pool()` <a id='staking.pool' />

        See
        [here](https://testnet.ixo.world/swagger/#/Staking/get_staking_pool)
        for the return value.

    - `validatorDistribution(validatorAddress)` <a id='staking.validatorDistribution' />

        See
        [here](https://testnet.ixo.world/swagger/#/Distribution/get_distribution_validators__validatorAddr_)
        for the return value.

    - `delegatorValidatorRewards(delegatorAddress, validatorAddress)` <a id='staking.delegatorValidatorRewards' />

        See
        [here](https://testnet.ixo.world/swagger/#/Distribution/get_distribution_delegators__delegatorAddr__rewards__validatorAddr_)
        for the return value.

    - `delegation(delegatorAddr, validatorAddress)` <a id='staking.delegation' />

        See
        [here](https://testnet.ixo.world/swagger/#/Staking/get_staking_delegators__delegatorAddr__delegations__validatorAddr_)
        for the return value.

    - `delegatorDelegations(delegatorAddress)` <a id='staking.delegatorDelegations' />

        See
        [here](https://testnet.ixo.world/swagger/#/Staking/get_staking_delegators__delegatorAddr__delegations)
        for the return value.

    - `delegatorUnbondingDelegations(delegatorAddress)` <a id='staking.delegatorUnbondingDelegations' />

        See
        [here](https://testnet.ixo.world/swagger/#/Staking/get_staking_delegators__delegatorAddr__unbonding_delegations)
        for the return value.

    - `delegatorRewards(delegatorAddress)` <a id='staking.delegatorRewards' />

        See
        [here](https://testnet.ixo.world/swagger/#/Distribution/get_distribution_delegators__delegatorAddr__rewards)
        for the return value.

    - `balances()` <a id='staking.balances' />

        See
        [here](https://testnet.ixo.world/swagger/#/Bank/get_bank_balances__address_)
        for the return value.

    - `delegate(validatorAddress, amount)` <a id='staking.delegate' />

    - `undelegate(validatorAddress, amount)` <a id='staking.undelegate' />

    - `redelegate(validatorSourceAddress, validatorDestinationAddress)` <a id='staking.redelegate' />

- `bonds`:

    An object that groups the following bond related methods:

    - `byId(did)` <a id='bonds.byId' />

    - `list()` <a id='bonds.list' />

    - `buy({bondDid, bondToken, reserveToken, amount, maxPrice})` <a id='bonds.buy' />

    - `sell({bondDid, bondToken, amount})` <a id='bonds.sell' />

- `custom(walletType, msg)`: Send a custom message to the blockchain <a id='custom' />

  - `walletType`: Either `"secp"` or `"agent"`. See [the wallet API](#wallet-api)
    for more info

  - `msg`: See
    [here](https://github.com/ixofoundation/ixo-client-sdk/blob/74725d861ac7cf73e8983ce3dc9d91868cd4ce62/messages.md)
    for available options


## Debugging

Put the `ixo-client-sdk` string into your `DEBUG` environment
variable to log network requests and responses. See [the `debug`
package](https://www.npmjs.com/package/debug) for more info.





[offline-amino-signer]: https://github.com/cosmos/cosmjs/blob/98e91ae5fe699733497befef95204923c93a7373/packages/amino/src/signer.ts#L22-L38
