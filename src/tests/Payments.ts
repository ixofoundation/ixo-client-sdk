import { Registry } from '@cosmjs/proto-signing';
import { Coin } from '../codec/cosmos/coin';
import { BlockPeriod, DistributionShare, PaymentTemplate } from '../codec/payments/payments';
import { MsgCreatePaymentContract, MsgCreatePaymentTemplate, MsgCreateSubscription, MsgEffectPayment, MsgGrantDiscount, MsgRevokeDiscount, MsgSetPaymentContractAuthorisation } from '../codec/payments/tx';
import { createClient, offlineWallet, fee } from './constants';

export const paymentTemplateId = 'payment:template:oracle-fee';
export const paymentContractId = 'payment:contract:oracle-fee1';
export const paymentSubscripionId = 'payment:subscription:oracle-fee1';
export const paymentContractRecipient = { address: 'ixo107pmtx9wyndup8f9lgj6d7dnfq5kuf3sapg0vx', percentage: '100' };

export const CreatePaymentTemplate = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/payments.MsgCreatePaymentTemplate', MsgCreatePaymentTemplate);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/payments.MsgCreatePaymentTemplate',
		value: MsgCreatePaymentTemplate.fromPartial({
			creatorDid: did,
			creatorAddress: myAddress,
			paymentTemplate: PaymentTemplate.fromPartial({
				id: paymentTemplateId,
				paymentAmount: [
					Coin.fromPartial({
						denom: 'uixo',
						amount: '5000000',
					}),
				],
				paymentMinimum: [
					Coin.fromPartial({
						denom: 'uixo',
						amount: '5000000',
					}),
				],
				paymentMaximum: [
					Coin.fromPartial({
						denom: 'uixo',
						amount: '5000000',
					}),
				],
				discounts: [],
			}),
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const CreatePaymentContract = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/payments.MsgCreatePaymentContract', MsgCreatePaymentContract);

	const ad = await offlineWallet.getAccounts();
	const client = await createClient(myRegistry);
	const myAddress = ad[0].address;
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/payments.MsgCreatePaymentContract',
		value: MsgCreatePaymentContract.fromPartial({
			creatorDid: did,
			paymentTemplateId: paymentTemplateId,
			paymentContractId: paymentContractId,
			payer: myAddress,
			recipients: [DistributionShare.fromPartial(paymentContractRecipient)],
			discountId: '0',
			canDeauthorise: true,
			creatorAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const SetPaymentContractAuthorization = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/payments.MsgSetPaymentContractAuthorisation', MsgSetPaymentContractAuthorisation);

	const ad = await offlineWallet.getAccounts();
	const client = await createClient(myRegistry);
	const myAddress = ad[0].address;
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/payments.MsgSetPaymentContractAuthorisation',
		value: MsgSetPaymentContractAuthorisation.fromPartial({
			paymentContractId: paymentContractId,
			payerDid: did,
			authorised: true,
			payerAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const CreateSubscription = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/payments.MsgCreateSubscription', MsgCreateSubscription);

	const ad = await offlineWallet.getAccounts();
	const client = await createClient(myRegistry);
	const myAddress = ad[0].address;
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/payments.MsgCreateSubscription',
		value: MsgCreateSubscription.fromPartial({
			creatorDid: did,
			subscriptionId: paymentSubscripionId,
			paymentContractId: paymentContractId,
			maxPeriods: '3',
			// @ts-ignore
			period: BlockPeriod.fromPartial({ periodLength: '3', periodStartBlock: '5' }),
			creatorAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const GrantDiscount = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/payments.MsgGrantDiscount', MsgGrantDiscount);

	const ad = await offlineWallet.getAccounts();
	const client = await createClient(myRegistry);
	const myAddress = ad[0].address;
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/payments.MsgGrantDiscount',
		value: MsgGrantDiscount.fromPartial({
			senderDid: did,
			paymentContractId: paymentContractId,
			discountId: '0',
			recipient: paymentContractRecipient.address,
			senderAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const RevokeDiscount = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/payments.MsgRevokeDiscount', MsgRevokeDiscount);

	const ad = await offlineWallet.getAccounts();
	const client = await createClient(myRegistry);
	const myAddress = ad[0].address;
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/payments.MsgRevokeDiscount',
		value: MsgRevokeDiscount.fromPartial({
			senderDid: did,
			paymentContractId: paymentContractId,
			holder: myAddress,
			senderAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const EffectPayment = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/payments.MsgEffectPayment', MsgEffectPayment);

	const ad = await offlineWallet.getAccounts();
	const client = await createClient(myRegistry);
	const myAddress = ad[0].address;
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/payments.MsgEffectPayment',
		value: MsgEffectPayment.fromPartial({
			senderDid: did,
			paymentContractId: paymentContractId,
			senderAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};
