import { createClient, getUser } from './common';
import { constants, fee, WalletUsers } from './constants';
import { impact, helpers } from '../index';

export const CreatePaymentTemplate = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const message = {
		typeUrl: '/payments.MsgCreatePaymentTemplate',
		value: impact.payments.MsgCreatePaymentTemplate.fromPartial({
			creatorDid: did,
			creatorAddress: myAddress,
			paymentTemplate: impact.payments.PaymentTemplate.fromPartial({
				id: constants.paymentTemplateId,
				paymentAmount: [
					impact.cosmos.Coin.fromPartial({
						denom: 'uixo',
						amount: '500000',
					}),
				],
				paymentMinimum: [
					impact.cosmos.Coin.fromPartial({
						denom: 'uixo',
						amount: '100000',
					}),
				],
				paymentMaximum: [
					impact.cosmos.Coin.fromPartial({
						denom: 'uixo',
						amount: '500000000',
					}),
				],
				discounts: [impact.payments.Discount.fromPartial({ id: constants.paymentDiscountId, percent: '5000000000000000000' })],
			}),
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

/**
 * Distribution shares must add up to 100, and inputs is to power 18
 */
export const CreatePaymentContract = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const alice = getUser(WalletUsers.alice);
	const aliceAccount = (await alice.getAccounts())[0];

	const message = {
		typeUrl: '/payments.MsgCreatePaymentContract',
		value: impact.payments.MsgCreatePaymentContract.fromPartial({
			creatorDid: did,
			paymentTemplateId: constants.paymentTemplateId,
			paymentContractId: constants.paymentContractId,
			payer: myAddress,
			recipients: [impact.payments.DistributionShare.fromPartial({ address: aliceAccount.address, percentage: '100000000000000000000' })],
			discountId: constants.paymentDiscountId,
			canDeauthorise: true,
			creatorAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const SetPaymentContractAuthorization = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const message = {
		typeUrl: '/payments.MsgSetPaymentContractAuthorisation',
		value: impact.payments.MsgSetPaymentContractAuthorisation.fromPartial({
			paymentContractId: constants.paymentContractId,
			payerDid: did,
			authorised: true,
			payerAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const CreateSubscription = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const message = {
		typeUrl: '/payments.MsgCreateSubscription',
		value: impact.payments.MsgCreateSubscription.fromPartial({
			creatorDid: did,
			subscriptionId: constants.paymentSubscripionId,
			paymentContractId: constants.paymentContractId,
			maxPeriods: '3',
			period: {
				typeUrl: '/payments.BlockPeriod',
				value: impact.payments.BlockPeriod.encode(impact.payments.BlockPeriod.fromPartial({ periodLength: helpers.Long.fromNumber(3), periodStartBlock: helpers.Long.fromNumber(5) })).finish(),
			},
			creatorAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const GrantDiscount = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const message = {
		typeUrl: '/payments.MsgGrantDiscount',
		value: impact.payments.MsgGrantDiscount.fromPartial({
			senderDid: did,
			paymentContractId: constants.paymentContractId,
			discountId: constants.paymentDiscountId,
			recipient: constants.paymentContractRecipient.address,
			senderAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const RevokeDiscount = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const message = {
		typeUrl: '/payments.MsgRevokeDiscount',
		value: impact.payments.MsgRevokeDiscount.fromPartial({
			senderDid: did,
			paymentContractId: constants.paymentContractId,
			holder: myAddress,
			senderAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const EffectPayment = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const message = {
		typeUrl: '/payments.MsgEffectPayment',
		value: impact.payments.MsgEffectPayment.fromPartial({
			senderDid: did,
			paymentContractId: constants.paymentContractId,
			senderAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};
