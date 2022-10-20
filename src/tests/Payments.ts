/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Registry } from '@cosmjs/proto-signing';
import { Coin } from '../codec/cosmos/coin';
import { Discount, DistributionShare, PaymentTemplate } from '../codec/payments/payments';
import { MsgCreatePaymentContract, MsgCreatePaymentTemplate, MsgCreateSubscription, MsgEffectPayment, MsgGrantDiscount, MsgRevokeDiscount, MsgSetPaymentContractAuthorisation } from '../codec/payments/tx';
import { createClient, edClient, fee } from './constants';

export const SetPaymentContractAuthorization = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/payments.MsgSetPaymentContractAuthorisation', MsgSetPaymentContractAuthorisation); // Replace with your own type URL and Msg class

	const ad = await edClient.getAccounts();

	const client = await createClient(myRegistry);
	const myAddress = ad[0].address;

	const message = {
		typeUrl: '/payments.MsgSetPaymentContractAuthorisation',
		value: MsgSetPaymentContractAuthorisation.fromPartial({
			paymentContractId: '',
			payerDid: '',
			authorised: false,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const CreatePaymentTemplate = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/payments.MsgCreatePaymentTemplate', MsgCreatePaymentTemplate); // Replace with your own type URL and Msg class

	const ad = await edClient.getAccounts();

	const client = await createClient(myRegistry);

	const myAddress = ad[0].address;

	const message = {
		typeUrl: '/payments.MsgCreatePaymentTemplate',
		value: MsgCreatePaymentTemplate.fromPartial({
			creatorDid: '',
			paymentTemplate: PaymentTemplate.fromPartial({
				id: '',
				paymentAmount: [
					Coin.fromPartial({
						denom: '',
						amount: '',
					}),
				],
				paymentMinimum: [
					Coin.fromPartial({
						denom: '',
						amount: '',
					}),
				],
				paymentMaximum: [
					Coin.fromPartial({
						denom: '',
						amount: '',
					}),
				],
				discounts: [Discount.fromPartial({ id: '', percent: '' })],
			}),
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const CreatePaymentContract = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/payments.MsgCreatePaymentContract', MsgCreatePaymentContract); // Replace with your own type URL and Msg class

	const ad = await edClient.getAccounts();

	const client = await createClient(myRegistry);

	const myAddress = ad[0].address;

	const message = {
		typeUrl: '/payments.MsgCreatePaymentContract',
		value: MsgCreatePaymentContract.fromPartial({
			creatorDid: '',
			paymentTemplateId: '',
			paymentContractId: '',
			payer: '',
			recipients: [DistributionShare.fromPartial({ address: '', percentage: '' })],
			canDeauthorise: false,
			discountId: '',
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const CreateSubscription = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/payments.MsgCreateSubscription', MsgCreateSubscription); // Replace with your own type URL and Msg class

	const ad = await edClient.getAccounts();

	const client = await createClient(myRegistry);

	const myAddress = ad[0].address;
	const test = new Uint8Array();
	const message = {
		typeUrl: '/payments.MsgCreateSubscription',
		value: MsgCreateSubscription.fromPartial({
			creatorDid: '',
			subscriptionId: '',
			paymentContractId: '',
			maxPeriods: '',
			period: {
				typeUrl: '',
				value: test,
			},
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const GrantDiscount = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/payments.MsgGrantDiscount', MsgGrantDiscount); // Replace with your own type URL and Msg class

	const ad = await edClient.getAccounts();

	const client = await createClient(myRegistry);

	const myAddress = ad[0].address;

	const message = {
		typeUrl: '/payments.MsgGrantDiscount',
		value: MsgGrantDiscount.fromPartial({
			senderDid: '',
			paymentContractId: '',
			discountId: '',
			recipient: '',
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const RevokeDiscount = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/payments.MsgRevokeDiscount', MsgRevokeDiscount); // Replace with your own type URL and Msg class

	const ad = await edClient.getAccounts();

	const client = await createClient(myRegistry);

	const myAddress = ad[0].address;

	const message = {
		typeUrl: '/payments.MsgRevokeDiscount',
		value: MsgRevokeDiscount.fromPartial({
			senderDid: '',
			paymentContractId: '',
			holder: '',
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const EffectPayment = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/payments.MsgEffectPayment', MsgEffectPayment); // Replace with your own type URL and Msg class

	const ad = await edClient.getAccounts();

	const client = await createClient(myRegistry);

	const myAddress = ad[0].address;

	const message = {
		typeUrl: '/payments.MsgEffectPayment',
		value: MsgEffectPayment.fromPartial({
			senderDid: '',
			paymentContractId: '',
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};
