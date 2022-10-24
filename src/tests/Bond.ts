import { Registry } from '@cosmjs/proto-signing';
import { FunctionParam } from '../codec/bonds/bonds';
import { MsgBuy, MsgCreateBond, MsgEditBond, MsgMakeOutcomePayment, MsgSell, MsgSetNextAlpha, MsgSwap, MsgUpdateBondState, MsgWithdrawReserve, MsgWithdrawShare } from '../codec/bonds/tx';
import { Coin } from '../codec/external/cosmos/base/v1beta1/coin';
import { createClient, offlineWallet, fee } from './constants';

const bondDid = 'did:ixo:C2bFfs9g6VfFEissiCUuPK';
const feeReserveAddress = 'ixo1tkq38dndpxmw6pe5dr07j0gp9ctxd0jsu2eu50';
const bondToken = 'abc';
const bondReserveToken = 'res';

export const CreateBond = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/bonds.MsgCreateBond', MsgCreateBond);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/bonds.MsgCreateBond',
		value: MsgCreateBond.fromPartial({
			bondDid: bondDid,
			token: bondToken,
			name: 'A B C',
			description: 'Description about A B C',
			creatorDid: did,
			controllerDid: did,
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
			reserveTokens: [bondReserveToken],
			txFeePercentage: '0.000000000000000000',
			exitFeePercentage: '0.000000000000000000',
			feeAddress: feeReserveAddress,
			reserveWithdrawalAddress: feeReserveAddress,
			maxSupply: Coin.fromPartial({
				denom: 'abc',
				amount: '1000000000000',
			}),
			orderQuantityLimits: [],
			sanityRate: '0.000000000000000000',
			sanityMarginPercentage: '0.000000000000000000',
			allowSells: true,
			allowReserveWithdrawals: true,
			alphaBond: true,
			batchBlocks: '1',
			outcomePayment: '68100',
			creatorAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const EditBond = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/bonds.MsgEditBond', MsgEditBond);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/bonds.MsgEditBond',
		value: MsgEditBond.fromPartial({
			bondDid: bondDid,
			name: 'New A B C',
			// description: '',
			// orderQuantityLimits: '',
			// sanityRate: '',
			// sanityMarginPercentage: '',
			editorDid: did,
			editorAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const SetNextAlpha = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/bonds.MsgSetNextAlpha', MsgSetNextAlpha);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/bonds.MsgSetNextAlpha',
		value: MsgSetNextAlpha.fromPartial({
			bondDid: bondDid,
			alpha: '0.52',
			editorDid: did,
			editorAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const UpdateBondState = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/bonds.MsgUpdateBondState', MsgUpdateBondState);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/bonds.MsgUpdateBondState',
		value: MsgUpdateBondState.fromPartial({
			bondDid: bondDid,
			state: 'SETTLE',
			editorDid: did,
			editorAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const Buy = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/bonds.MsgBuy', MsgBuy);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/bonds.MsgBuy',
		value: MsgBuy.fromPartial({
			buyerDid: did,
			buyerAddress: myAddress,
			amount: Coin.fromPartial({
				denom: bondToken,
				amount: '400000',
			}),
			maxPrices: [
				Coin.fromPartial({
					denom: bondReserveToken,
					amount: '500000',
				}),
			],
			bondDid: bondDid,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const Sell = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/bonds.MsgSell', MsgSell);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/bonds.MsgSell',
		value: MsgSell.fromPartial({
			sellerDid: did,
			sellerAddress: myAddress,
			amount: Coin.fromPartial({
				denom: bondToken,
				amount: '200000',
			}),
			bondDid: bondDid,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

// Needs swapper function
export const Swap = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/bonds.MsgSwap', MsgSwap);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/bonds.MsgSwap',
		value: MsgSwap.fromPartial({
			swapperDid: did,
			swapperAddress: myAddress,
			bondDid: bondDid,
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
	myRegistry.register('/bonds.MsgMakeOutcomePayment', MsgMakeOutcomePayment);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/bonds.MsgMakeOutcomePayment',
		value: MsgMakeOutcomePayment.fromPartial({
			senderDid: did,
			senderAddress: myAddress,
			amount: '50000000',
			bondDid: bondDid,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const WithdrawShare = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/bonds.MsgWithdrawShare', MsgWithdrawShare);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/bonds.MsgWithdrawShare',
		value: MsgWithdrawShare.fromPartial({
			recipientDid: did,
			bondDid: bondDid,
			recipientAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const WithdrawReserve = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/bonds.MsgWithdrawReserve', MsgWithdrawReserve);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/bonds.MsgWithdrawReserve',
		value: MsgWithdrawReserve.fromPartial({
			withdrawerDid: did,
			withdrawerAddress: myAddress,
			amount: [Coin.fromPartial({ denom: bondReserveToken, amount: '5000' })],
			bondDid: bondDid,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};
