/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Registry } from '@cosmjs/proto-signing';
import sovrin from 'sovrin-did';
import { FunctionParam } from '../codec/bonds/bonds';
import { MsgBuy, MsgCreateBond, MsgEditBond, MsgMakeOutcomePayment, MsgSell, MsgSetNextAlpha, MsgSwap, MsgUpdateBondState, MsgWithdrawReserve, MsgWithdrawShare } from '../codec/bonds/tx';
import { Coin } from '../codec/external/cosmos/base/v1beta1/coin';
import { createClient, offlineWallet, fee } from './constants';

export const CreateBond = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/bonds.MsgCreateBond', MsgCreateBond); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const bondDID = sovrin.gen();

	const message = {
		typeUrl: '/bonds.MsgCreateBond',
		value: MsgCreateBond.fromPartial({
			token: 'optimw8',
			name: 'w-8 - Pilot Alpha Bond 2 - Optimistic',
			description: 'Pilot Alpha Bond 1 - Optimistic Look a like',
			creatorDid: offlineWallet.didDoc.did,
			controllerDid: offlineWallet.didDoc.did,
			functionType: 'augmented_function',
			functionParameters: [
				FunctionParam.fromPartial({
					param: 'p0',
					value: '1.000000000000000000',
				}),
				FunctionParam.fromPartial({
					param: 'theta',
					value: '0.000000000000000000',
				}),
				FunctionParam.fromPartial({
					param: 'kappa',
					value: '0.000000000000000000',
				}),
				FunctionParam.fromPartial({
					param: 'd0',
					value: '1.000000000000000000',
				}),
			],
			reserveTokens: ['xusd'],
			txFeePercentage: '0.000000000000000000',
			exitFeePercentage: '0.000000000000000000',
			feeAddress: 'ixo1tkq38dndpxmw6pe5dr07j0gp9ctxd0jsu2eu50',
			reserveWithdrawalAddress: 'ixo1tkq38dndpxmw6pe5dr07j0gp9ctxd0jsu2eu50',
			maxSupply: Coin.fromPartial({
				denom: 'optimw8',
				amount: '1000000000000',
			}),
			orderQuantityLimits: [],
			sanityRate: '0.000000000000000000',
			sanityMarginPercentage: '0.000000000000000000',
			allowSells: false,
			allowReserveWithdrawals: true,
			alphaBond: true,
			batchBlocks: '1',
			outcomePayment: '68100',
			bondDid: 'did:ixo:' + bondDID.did,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const EditBond = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/bonds.MsgEditBond', MsgEditBond); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const bondDID = sovrin.gen();

	const message = {
		typeUrl: '/bonds.MsgEditBond',
		value: MsgEditBond.fromPartial({
			bondDid: '',
			name: '',
			description: '',
			orderQuantityLimits: '',
			sanityRate: '',
			sanityMarginPercentage: '',
			editorDid: '',
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const SetNextAlpha = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/bonds.MsgSetNextAlpha', MsgSetNextAlpha); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const bondDID = sovrin.gen();

	const message = {
		typeUrl: '/bonds.MsgSetNextAlpha',
		value: MsgSetNextAlpha.fromPartial({
			bondDid: '',
			alpha: '',
			editorDid: '',
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const UpdateBondState = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/bonds.MsgUpdateBondState', MsgUpdateBondState); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const bondDID = sovrin.gen();

	const message = {
		typeUrl: '/bonds.MsgUpdateBondState',
		value: MsgUpdateBondState.fromPartial({
			bondDid: '',
			state: '',
			editorDid: '',
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const Buy = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/bonds.MsgBuy', MsgBuy); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const bondDID = sovrin.gen();

	const message = {
		typeUrl: '/bonds.MsgBuy',
		value: MsgBuy.fromPartial({
			buyerDid: '',
			amount: Coin.fromPartial({
				denom: '',
				amount: '',
			}),
			maxPrices: [
				Coin.fromPartial({
					denom: '',
					amount: '',
				}),
			],
			bondDid: '',
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const Sell = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/bonds.MsgSell', MsgSell); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const bondDID = sovrin.gen();

	const message = {
		typeUrl: '/bonds.MsgSell',
		value: MsgSell.fromPartial({
			sellerDid: '',
			amount: Coin.fromPartial({
				denom: '',
				amount: '',
			}),

			bondDid: '',
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const Swap = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/bonds.MsgSwap', MsgSwap); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const bondDID = sovrin.gen();

	const message = {
		typeUrl: '/bonds.MsgSwap',
		value: MsgSwap.fromPartial({
			swapperDid: '',
			bondDid: '',
			from: Coin.fromPartial({
				denom: '',
				amount: '',
			}),
			toToken: '',
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const MakeOutcomePayment = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/bonds.MsgMakeOutcomePayment', MsgMakeOutcomePayment); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const bondDID = sovrin.gen();

	const message = {
		typeUrl: '/bonds.MsgMakeOutcomePayment',
		value: MsgMakeOutcomePayment.fromPartial({
			senderDid: '',
			amount: '',
			bondDid: '',
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const WithdrawShare = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/bonds.MsgWithdrawShare', MsgWithdrawShare); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const bondDID = sovrin.gen();

	const message = {
		typeUrl: '/bonds.MsgWithdrawShare',
		value: MsgWithdrawShare.fromPartial({
			recipientDid: '',
			bondDid: '',
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const WithdrawReserve = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/bonds.MsgWithdrawReserve', MsgWithdrawReserve); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const bondDID = sovrin.gen();

	const message = {
		typeUrl: '/bonds.MsgWithdrawReserve',
		value: MsgWithdrawReserve.fromPartial({
			withdrawerDid: '',
			amount: [Coin.fromPartial({ denom: '', amount: '' })],
			bondDid: '',
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};
