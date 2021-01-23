# Message Types  

Currently supported by ixo clients.

## List of message types for standard Cosmos-SDK modules
- [cosmos-sdk/MsgSend](#msgsend)
- [cosmos-sdk/MsgMultiSend](#msgmultisend)
- [cosmos-sdk/MsgCreateValidator](#msgcreatevalidator)
- [cosmos-sdk/MsgEditValidator](#msgeditvalidator)
- [cosmos-sdk/MsgDelegate](#msgdelegate)
- [cosmos-sdk/MsgUndelegate](#msgundelegate)
- [cosmos-sdk/MsgBeginRedelegate](#msgbeginredelegate)
- [cosmos-sdk/MsgWithdrawDelegationReward](#msgwithdrawdelegationreward)
- [cosmos-sdk/MsgWithdrawValidatorCommission](#msgwithdrawvalidatorcommission)
- [cosmos-sdk/MsgModifyWithdrawAddress](#msgmodifywithdrawaddress)
- [cosmos-sdk/MsgSubmitProposal](#msgsubmitproposal)
- [cosmos-sdk/MsgDeposit](#msgdeposit)
- [cosmos-sdk/MsgVote](#msgvote)
- [cosmos-sdk/MsgUnjail](#msgunjail)

## List of messages types for ixo blockchain modules
- [bonds/MsgCreateBond](#msgcreatebond)
- [bonds/MsgEditBond](#msgeditbond)
- [bonds/MsgBuy](#msgbuy)
- [bonds/MsgSell](#msgsell)
- [bonds/MsgSwap](#msgswap)
- [bonds/MsgMakeOutcomePayment](#msgmakeoutcomepayment)
- [bonds/MsgWithdrawShare](#msgwithdrawshare)
- [did/AddDid](#msgadddid)
- [did/AddCredential](#msgaddcredential)
- [payments/MsgCreatePaymentTemplate](#msgcreatepaymenttemplate)
- [payments/MsgCreatePaymentContract](#msgcreatepaymentcontract)
- [payments/MsgCreateSubscription](#msgcreatesubscription)
- [payments/MsgSetPaymentContractAuthorisation](#msgsetpaymentcontractauthorisation)
- [payments/MsgGrantDiscount](#msggrantdiscount)
- [payments/MsgRevokeDiscount](#msgrevokediscount)
- [payments/MsgEffectPayment](#msgeffectpayment)
- [project/CreateProject](#createproject)
- [project/UpdateProjectStatus](#updateprojectstatus)
- [project/CreateAgent](#createagent)
- [project/UpdateAgent](#updateagent)
- [project/CreateClaim](#createclaim)
- [project/CreateEvaluation](#createevaluation)
- [project/WithdrawFunds](#withdrawfunds)
- [treasury/MsgSend](#treasury-msgsend)
- [treasury/MsgOracleTransfer](#msgoracletransfer)
- [treasury/MsgOracleMint](#msgoraclemint)
- [treasury/MsgOracleBurn](#msgoracleburn)

## Message syntax

### MsgSend

```js
// cosmos-sdk/MsgSend
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "cosmos-sdk/MsgSend",
			value: {
				amount: [
					{
						amount: String(100000), 	// 6 decimal places (1000000 uixo = 1 IXO)
						denom: "uixo"
					}
				],
				from_address: address,
				to_address: "ixo1x70tkjl6kqy92h2d0rshhpga3a5m672wx59l9n"
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

###  MsgMultiSend

```js
// cosmos-sdk/MsgMultiSend
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "cosmos-sdk/MsgMultiSend",
			value: {
				inputs: [
					{
						address: address,
						coins: [
							{
								amount: String(100000),		// 6 decimal places (1000000 uixo = 1 IXO)
								denom: "uixo"
							}
						]
					}
				],
				outputs: [
					{
						address: "ixo1x70tkjl6kqy92h2d0rshhpga3a5m672wx59l9n",
						coins: [
							{
								amount: String(100000),
								denom: "uixo"
							}
						]
					}
				]
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgCreateValidator

```js
// cosmos-sdk/MsgCreateValidator
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "cosmos-sdk/MsgCreateValidator",
			value: {
				description: {
					moniker: "Test Validator",
					identity: "",
					website: "",
					details: ""
				},
				commission: {
					rate: "0.250000000000000000",	// 25.0%
					max_rate: "1.000000000000000000",
					max_change_rate: "0.100000000000000000"
				},
				min_self_delegation: String(1),
				delegator_address: address,
				validator_address: "ixovaloper1lf70x8jt4ytwff4rt8678nar9tla4jwr6vucae",
				pubkey: "ixovalconspub1zcjduepqzd8v0chrhwmg86fzudzxz3xehk4nshdpa8y8meyf0vuuqzw6n7wqse8gcr",
				value: {
					denom: "uixo",
					amount: String(1)
				}
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgEditValidator

```js
// cosmos-sdk/MsgEditValidator
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "cosmos-sdk/MsgEditValidator",
			value: {
				Description: {
					moniker: "Best Validator",
					identity: "[do-not-modify]",
					website: "[do-not-modify]",
					details: "[do-not-modify]"
				},
				address: "ixovaloper1lf70x8jt4ytwff4rt8678nar9tla4jwr6vucae",
				commission_rate: "0.220000000000000000",	// 22.0%
				min_self_delegation: null
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgDelegate

```js
// cosmos-sdk/MsgDelegate
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "cosmos-sdk/MsgDelegate",
			value: {
				amount: {
					amount: String(1000000),
					denom: "uixo"
				},
				delegator_address: address,
				validator_address: "ixovaloper1lf70x8jt4ytwff4rt8678nar9tla4jwr6vucae"
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgUndelegate

```js
// cosmos-sdk/MsgUndelegate
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "cosmos-sdk/MsgUndelegate",
			value: {
				amount: {
					amount: String(1000000),
					denom: "uixo"
				},
				delegator_address: address,
				validator_address: "ixovaloper1lf70x8jt4ytwff4rt8678nar9tla4jwr6vucae"
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgBeginRedelegate 

```js
// cosmos-sdk/MsgBeginRedelegate
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "cosmos-sdk/MsgBeginRedelegate",
			value: {
				amount: {
					amount: String(1000000),
					denom: "uixo"
				},
				delegator_address: address,
				validator_dst_address: "ixovaloper1lf70x8jt4ytwff4rt8678nar9tla4jwr6vucae",
				validator_src_address: "ixovaloper1clpqr4nrk4khgkxj78fcwwh6dl3uw4epsluffn"
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgWithdrawDelegationReward

```js
// cosmos-sdk/MsgWithdrawDelegationReward
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "cosmos-sdk/MsgWithdrawDelegationReward",
			value: {
				delegator_address: address,
				validator_address: "ixovaloper1lf70x8jt4ytwff4rt8678nar9tla4jwr6vucae"
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgWithdrawValidatorCommission

```js
// cosmos-sdk/MsgWithdrawValidatorCommission
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "cosmos-sdk/MsgWithdrawValidatorCommission",
			value: {
				validator_address: "ixovaloper1lf70x8jt4ytwff4rt8678nar9tla4jwr6vucae"
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgModifyWithdrawAddress

```js
// cosmos-sdk/MsgModifyWithdrawAddress
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "cosmos-sdk/MsgModifyWithdrawAddress",
			value: {
				delegator_address: address,
				withdraw_address: "ixo1x70tkjl6kqy92h2d0rshhpga3a5m672wx59l9n"
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgSubmitProposal

```js
// cosmos-sdk/MsgSubmitProposal
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "cosmos-sdk/MsgSubmitProposal",
			value: {
				title: "Activate the Community Pool",
				description: "Enable governance to spend funds from the community pool. Full proposal: https://ipfs.io/ipfs/QmNsVCsyRmEiep8rTQLxVNdMHm2uiZkmaSHCR6S72Y1sL1",
				initial_deposit: [
					{
						amount: String(1000000),
						denom: "uixo"
					}
				],
				proposal_type: "Text",
				proposer: address
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgDeposit

```js
// cosmos-sdk/MsgDeposit
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "cosmos-sdk/MsgDeposit",
			value: {
				amount: [
					{
						amount: String(1000000),
						denom: "uixo"
					}
				],
				depositor: address,
				proposal_id: String(1)
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgVote

```js
// cosmos-sdk/MsgVote
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "cosmos-sdk/MsgVote",
			value: {
				option: "Yes",	// Yes, No, NowithVeto, Abstain
				proposal_id: String(1),
				voter: address
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgUnjail

```js
// cosmos-sdk/MsgUnjail
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "cosmos-sdk/MsgUnjail",
			value: {
				address: "ixovaloper1lf70x8jt4ytwff4rt8678nar9tla4jwr6vucae"
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgCreateBond

```js
// bonds/MsgCreateBond
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "bonds/MsgCreateBond",
			value: {
				bond_did: "did:ixo:U7GK8p8rVhJMKhBVRCJJ8c",
				token: "abc",
				name: "A B C",
				description: "Description about A B C",
				function_type: "power_function",
				function_parameters: "m:12,n:2,c:100",
				creator_did: "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
				reserve_tokens: "res",
				tx_fee_percentage: "0.5",
				exit_fee_percentage: "0.1",
				fee_address: "ixo107pmtx9wyndup8f9lgj6d7dnfq5kuf3sapg0vx",
				max_supply: { amount: String(1000000), denom: "abc" },
				order_quantity_limits: "",
				sanity_rate: "0",
				sanity_margin_percentage: "0",
				allow_sells: "true",
				batch_blocks: "1",
				outcome_payment: [ { amount: String(100000000), denom: "res" } ],
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgEditBond

```js
// bonds/MsgEditBond
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "bonds/MsgEditBond",
			value: {
				bond_did: "did:ixo:U7GK8p8rVhJMKhBVRCJJ8c",
				token: "abc",
				name: "New A B C",
				description: "New description about A B C",
				order_quantity_limits: "[do-not-modify]",
				sanity_rate: "[do-not-modify]",
				sanity_margin_percentage: "[do-not-modify]",
				editor_did: "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgBuy

```js
// bonds/MsgBuy
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "bonds/MsgBuy",
			value: {
				buyer_did: "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
				amount: { amount: String(10), denom: "abc" },
				max_prices: { amount: String(1000000), denom: "res" },
				bond_did: "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgSell

```js
// bonds/MsgSell
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "bonds/MsgSell",
			value: {
				seller_did: "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
				amount: { amount: String(10), denom: "abc" },
				bond_did: "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgSwap

```js
// bonds/MsgSwap
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "bonds/MsgSwap",
			value: {
				swapper_did: "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
				bond_did: "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
				from: { amount: String(10), denom: "res" },
				to_token: "rez",
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgMakeOutcomePayment

```js
// bonds/MsgMakeOutcomePayment
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "bonds/MsgMakeOutcomePayment",
			value: {
				sender_did: "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
				bond_did: "did:ixo:U7GK8p8rVhJMKhBVRCJJ8c",
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgWithdrawShare

```js
// bonds/MsgWithdrawShare
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "bonds/MsgWithdrawShare",
			value: {
				recipient_did: "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
				bond_did: "did:ixo:U7GK8p8rVhJMKhBVRCJJ8c",
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgAddDid

```js
// did/AddDid
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "did/AddDid",
			value: {
				did: "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
				pubKey: "2vMHhssdhrBCRFiq9vj7TxGYDybW4yYdrYh9JG56RaAt",
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(0), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgAddCredential

TODO

### MsgCreatePaymentTemplate

```js
// payments/MsgCreatePaymentTemplate
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "payments/MsgCreatePaymentTemplate",
			value: {
				creator_did: "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
				payment_template: {
					id: "payment:template:template1",
					payment_amount: [ { amount: String(10), denom: "uixo" } ],
					payment_minimum: [ { amount: String(10), denom: "uixo" } ],
					payment_maximum: [ { amount: String(100), denom: "uixo" } ],
					discounts: [ { id: "1", percent: "10" } ],
				}
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgCreatePaymentContract

```js
// payments/MsgCreatePaymentContract
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "payments/MsgCreatePaymentContract",
			value: {
				creator_did: "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
				payment_template_id: "payment:contract:contract1",
				payment_contract_id: "payment:template:template1",
				payer: "ixo1x70tkjl6kqy92h2d0rshhpga3a5m672wx59l9n",
				recipients: [
					{
						address: "ixo107pmtx9wyndup8f9lgj6d7dnfq5kuf3sapg0vx",
						percentage: "100",
					}
				],
				can_deauthorise: "false",
				discount_id: "1",
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgCreateSubscription

TODO

### MsgSetPaymentContractAuthorisation

TODO

### MsgGrantDiscount

TODO

### MsgRevokeDiscount

TODO

### MsgEffectPayment

```js
// payments/MsgEffectPayment
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "payments/MsgEffectPayment",
			value: {
				sender_did: "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
				payment_contract_id: "payment:contract:contract1",
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### CreateProject

TODO

### UpdateProjectStatus

TODO

### CreateAgent

TODO

### UpdateAgent

TODO

### CreateClaim

TODO

### CreateEvaluation

TODO

### WithdrawFunds

TODO

### Treasury MsgSend

```js
// treasury/MsgSend
let stdSignMsg = ixo.newStdMsg({
	msgs: [
		{
			type: "treasury/MsgSend",
			value: {
				from_did: "did:ixo:U7GK8p8rVhJMKhBVRCJJ8c",
				to_did_or_addr: "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
				amount: [ { amount: String(100), denom: "uixo" } ],
			}
		}
	],
	chain_id: chainId,
	fee: { amount: [ { amount: String(5000), denom: "uixo" } ], gas: String(200000) },
	memo: "",
	account_number: String(data.result.value.account_number),
	sequence: String(data.result.value.sequence)
});
```

### MsgOracleTransfer

TODO

### MsgOracleMint

TODO

### MsgOracleBurn

TODO
