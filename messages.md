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


## List of message types for ixo blockchain modules
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


## MsgSend

    {
        "type": "cosmos-sdk/MsgSend",
        "value": {
            "amount": [{"amount": "100000", "denom": "uixo"}],
            "from_address": "ixoy92h2d0rshhpga3a5m672wx59l9njkwhe32kjh",
            "to_address": "ixo1x70tkjl6kqy92h2d0rshhpga3a5m672wx59l9n"
        }
    }

##  MsgMultiSend

    {
        "type": "cosmos-sdk/MsgMultiSend",
        "value": {
            "inputs": [
                {
                    "address": "ixo1x70tkjl6kqy92h2d0rshhpga3a5m672wx59l9n",
                    "coins": [{"amount": "100000", "denom": "uixo"}]
                }
            ],
            "outputs": [
                {
                    "address": "ixo1x70tkjl6kqy92h2d0rshhpga3a5m672wx59l9n",
                    "coins": [{"amount": "100000", "denom": "uixo"}]
                }
            ]
        }
    }


## MsgCreateValidator

    {
        "type": "cosmos-sdk/MsgCreateValidator",
        "value": {
            "description": {
                "moniker": "Test Validator",
                "identity": "",
                "website": "",
                "details": ""
            },
            "commission": {
                "rate": "0.250000000000000000",
                "max_rate": "1.000000000000000000",
                "max_change_rate": "0.100000000000000000"
            },
            "min_self_delegation": "1",
            "delegator_address": "ixo1x70tkjl6kqy92h2d0rshhpga3a5m672wx59l9n",
            "validator_address": "ixovaloper1lf70x8jt4ytwff4rt8678nar9tla4jwr6vucae",
            "pubkey: "ixovalconspub1zcjduepqzd8v0chrhwmg86fzudzxz3xehk4nshdpa8y8meyf0vuuqzw6n7wqse8gcr",
            "value": {"denom": "uixo", "amount": "1"}
        }
    }


## MsgEditValidator

    {
        "type": "cosmos-sdk/MsgEditValidator",
        "value": {
            "Description": {
                "moniker": "Best Validator",
                "identity": "[do-not-modify]",
                "website": "[do-not-modify]",
                "details": "[do-not-modify]"
            },
            "address": "ixovaloper1lf70x8jt4ytwff4rt8678nar9tla4jwr6vucae",
            "commission_rate": "0.220000000000000000",
            "min_self_delegation": null
        }
    }


## MsgDelegate

    {
        "type": "cosmos-sdk/MsgDelegate",
        "value": {
            "amount": {"amount": "1000000", "denom": "uixo"},
            "delegator_address": "ixo1x70tkjl6kqy92h2d0rshhpga3a5m672wx59l9n",
            "validator_address": "ixovaloper1lf70x8jt4ytwff4rt8678nar9tla4jwr6vucae"
        }
    }


## MsgUndelegate

    {
        "type": "cosmos-sdk/MsgUndelegate",
        "value": {
            "amount": {"amount": "1000000", "denom": "uixo"},
            delegator_address: "ixo1x70tkjl6kqy92h2d0rshhpga3a5m672wx59l9n",
            validator_address: "ixovaloper1lf70x8jt4ytwff4rt8678nar9tla4jwr6vucae"
        }
    }


## MsgBeginRedelegate

    {
        "type": "cosmos-sdk/MsgBeginRedelegate",
        "value": {
            amount: {"amount": "1000000", "denom": "uixo"},
            delegator_address: "ixo1x70tkjl6kqy92h2d0rshhpga3a5m672wx59l9n",
            validator_dst_address: "ixovaloper1lf70x8jt4ytwff4rt8678nar9tla4jwr6vucae",
            validator_src_address: "ixovaloper1clpqr4nrk4khgkxj78fcwwh6dl3uw4epsluffn"
        }
    }


## MsgWithdrawDelegationReward

    {
        "type": "cosmos-sdk/MsgWithdrawDelegationReward",
        "value": {
            "delegator_address": "ixo1x70tkjl6kqy92h2d0rshhpga3a5m672wx59l9n",
            "validator_address": "ixovaloper1lf70x8jt4ytwff4rt8678nar9tla4jwr6vucae"
        }
    }


## MsgWithdrawValidatorCommission

    {
        "type": "cosmos-sdk/MsgWithdrawValidatorCommission",
        "value": {
            "validator_address": "ixovaloper1lf70x8jt4ytwff4rt8678nar9tla4jwr6vucae"
        }
    }


## MsgModifyWithdrawAddress

    {
        "type": "cosmos-sdk/MsgModifyWithdrawAddress",
        "value": {
            "delegator_address": "ixo1x70tkjl6kqy92h2d0rshhpga3a5m672wx59l9n",
            "withdraw_address": "ixo1x70tkjl6kqy92h2d0rshhpga3a5m672wx59l9n"
        }
    }


## MsgSubmitProposal

    {
        "type": "cosmos-sdk/MsgSubmitProposal",
        "value": {
            "title": "Activate the Community Pool",
            "description": "Enable governance to spend funds from the community pool. Full proposal: https://ipfs.io/ipfs/QmNsVCsyRmEiep8rTQLxVNdMHm2uiZkmaSHCR6S72Y1sL1",
            "initial_deposit": [{"amount": "1000000", "denom": "uixo"}],
            "proposal_type": "Text",
            "proposer": "ixo1x70tkjl6kqy92h2d0rshhpga3a5m672wx59l9n"
        }
    }


## MsgDeposit

    {
        "type": "cosmos-sdk/MsgDeposit",
        "value": {
            "amount": [{"amount": "1000000", "denom": "uixo"}],
            "depositor": "ixo1x70tkjl6kqy92h2d0rshhpga3a5m672wx59l9n",
            "proposal_id": "1"
        }
    }


## MsgVote

    {
        "type": "cosmos-sdk/MsgVote",
        "value": {
            "option": "Yes",  // Yes, No, NowithVeto, Abstain
            "proposal_id": "1",
            "voter": "ixo1x70tkjl6kqy92h2d0rshhpga3a5m672wx59l9n"
        }
    }


## MsgUnjail

    {
        "type": "cosmos-sdk/MsgUnjail",
        "value": {
            "address": "ixovaloper1lf70x8jt4ytwff4rt8678nar9tla4jwr6vucae"
        }
    }


## MsgCreateBond

    {
        "type": "bonds/MsgCreateBond",
        "value": {
            "bond_did": "did:ixo:U7GK8p8rVhJMKhBVRCJJ8c",
            "token": "abc",
            "name": "A B C",
            "description": "Description about A B C",
            "function_type": "power_function",
            "function_parameters": "m:12,n:2,c:100",
            "creator_did": "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
            "reserve_tokens": "res",
            "tx_fee_percentage": "0.5",
            "exit_fee_percentage": "0.1",
            "fee_address": "ixo107pmtx9wyndup8f9lgj6d7dnfq5kuf3sapg0vx",
            "max_supply": {"amount": "1000000", "denom": "abc" },
            "order_quantity_limits": "",
            "sanity_rate": "0",
            "sanity_margin_percentage": "0",
            "allow_sells": "true",
            "batch_blocks": "1",
            "outcome_payment": [{"amount": "100000000", "denom": "res"}],
        }
    }


## MsgEditBond

    {
        "type": "bonds/MsgEditBond",
        "value": {
            "bond_did": "did:ixo:U7GK8p8rVhJMKhBVRCJJ8c",
            "token": "abc",
            "name": "New A B C",
            "description": "New description about A B C",
            "order_quantity_limits": "[do-not-modify]",
            "sanity_rate": "[do-not-modify]",
            "sanity_margin_percentage": "[do-not-modify]",
            "editor_did": "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
        }
    }


## MsgBuy

    {
        "type": "bonds/MsgBuy",
        "value": {
            "buyer_did": "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
            "amount": {"amount": "10", "denom": "abc" },
            "max_prices": {"amount": "1000000", "denom": "res"},
            "bond_did": "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
        }
    }


## MsgSell

    {
        "type": "bonds/MsgSell",
        "value": {
            "seller_did": "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
            "amount": {"amount": "10", "denom": "abc"},
            "bond_did": "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
        }
    }


## MsgSwap

    {
        "type": "bonds/MsgSwap",
        "value": {
            "swapper_did": "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
            "bond_did": "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
            "from": {"amount": "10", "denom": "res"},
            "to_token": "rez",
        }
    }


## MsgMakeOutcomePayment

    {
        "type": "bonds/MsgMakeOutcomePayment",
        "value": {
            "sender_did": "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
            "bond_did": "did:ixo:U7GK8p8rVhJMKhBVRCJJ8c",
        }
    }


## MsgWithdrawShare

    {
        "type": "bonds/MsgWithdrawShare",
        "value": {
            "recipient_did": "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
            "bond_did": "did:ixo:U7GK8p8rVhJMKhBVRCJJ8c",
        }
    }


## MsgAddDid

    {
        "type": "did/AddDid",
        "value": {
            "did": "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
            "pubKey": "2vMHhssdhrBCRFiq9vj7TxGYDybW4yYdrYh9JG56RaAt",
        }
    }


## MsgAddCredential

TODO

## MsgCreatePaymentTemplate

    {
        "type": "payments/MsgCreatePaymentTemplate",
        "value": {
            "creator_did": "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
            "payment_template": {
                "id": "payment:template:template1",
                "payment_amount": [{"amount": "10", "denom": "uixo"}],
                "payment_minimum": [{"amount": "10", "denom": "uixo"}],
                "payment_maximum": [{"amount": "100", "denom": "uixo"}],
                "discounts": [{"id": "1", "percent": "10"}],
            }
        }
    }


## MsgCreatePaymentContract

    {
        "type": "payments/MsgCreatePaymentContract",
        "value": {
            "creator_did": "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
            "payment_template_id": "payment:contract:contract1",
            "payment_contract_id": "payment:template:template1",
            "payer": "ixo1x70tkjl6kqy92h2d0rshhpga3a5m672wx59l9n",
            "recipients": [
                {
                    "address": "ixo107pmtx9wyndup8f9lgj6d7dnfq5kuf3sapg0vx",
                    "percentage": "100",
                }
            ],
            "can_deauthorise": "false",
            "discount_id": "1",
        }
    }


## MsgCreateSubscription

TODO

## MsgSetPaymentContractAuthorisation

TODO

## MsgGrantDiscount

TODO

## MsgRevokeDiscount

TODO

## MsgEffectPayment

    {
        "type": "payments/MsgEffectPayment",
        "value": {
            "sender_did": "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
            "payment_contract_id": "payment:contract:contract1",
        }
    }

## CreateProject

TODO

## UpdateProjectStatus

TODO

## CreateAgent

TODO

## UpdateAgent

TODO

## CreateClaim

TODO

## CreateEvaluation

TODO

## WithdrawFunds

TODO

## Treasury MsgSend

    {
        "type": "treasury/MsgSend",
        "value": {
            "from_did": "did:ixo:U7GK8p8rVhJMKhBVRCJJ8c",
            "to_did_or_addr": "did:ixo:4XJLBfGtWSGKSz4BeRxdun",
            "amount": [{"amount": "100", "denom": "uixo"}],
        }
    }

## MsgOracleTransfer

TODO

## MsgOracleMint

TODO

## MsgOracleBurn

TODO
