import { createClient, getUser } from './common';
import { constants, fee, WalletUsers } from './constants';
import { impact } from '../index';

export const CreateBond = async (allowSells: boolean) => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const bond = getUser(WalletUsers.bond);
	const bondDid = bond.did;
	const feeReserveAddress = myAddress;

	const message = {
		typeUrl: '/bonds.MsgCreateBond',
		value: impact.bonds.MsgCreateBond.fromPartial({
			bondDid: bondDid,
			token: constants.bondToken,
			name: 'A B C',
			description: 'Description about A B C',
			creatorDid: did,
			controllerDid: did,
			functionType: 'augmented_function',
			functionParameters: [
				impact.bonds.FunctionParam.fromPartial({
					param: 'p0',
					value: '1000000000000000000', //1
				}),
				impact.bonds.FunctionParam.fromPartial({
					param: 'theta',
					value: '0',
				}),
				impact.bonds.FunctionParam.fromPartial({
					param: 'kappa',
					value: '3000000000000000000', //3
				}),
				impact.bonds.FunctionParam.fromPartial({
					param: 'd0',
					value: '1000000000000000000000000', // 1mil
				}),
			],
			reserveTokens: [constants.bondReserveToken],
			txFeePercentage: '0',
			exitFeePercentage: '0',
			feeAddress: feeReserveAddress,
			reserveWithdrawalAddress: feeReserveAddress,
			maxSupply: impact.cosmos.Coin.fromPartial({
				denom: constants.bondToken,
				amount: '1000000000000',
			}),
			orderQuantityLimits: [],
			sanityRate: '0',
			sanityMarginPercentage: '0',
			allowSells: allowSells,
			allowReserveWithdrawals: !allowSells,
			alphaBond: true,
			batchBlocks: '1',
			outcomePayment: '300000000',
			creatorAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const EditBond = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const bond = getUser(WalletUsers.bond);
	const bondDid = bond.did;

	const message = {
		typeUrl: '/bonds.MsgEditBond',
		value: impact.bonds.MsgEditBond.fromPartial({
			bondDid: bondDid,
			name: 'New A B C',
			description: 'Description about A B C',
			sanityRate: '0',
			sanityMarginPercentage: '0',
			editorDid: did,
			editorAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

/**
 * @param alpha alpha string number as e18
 */
export const SetNextAlpha = async (alpha: string = '520000000000000000') => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const bond = getUser(WalletUsers.bond);
	const bondDid = bond.did;

	const message = {
		typeUrl: '/bonds.MsgSetNextAlpha',
		value: impact.bonds.MsgSetNextAlpha.fromPartial({
			bondDid: bondDid,
			alpha,
			editorDid: did,
			editorAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

/**
 * @param state one of 'HATCH' | 'OPEN' | 'SETTLE' | 'FAILED'
 */
export const UpdateBondState = async (state: 'HATCH' | 'OPEN' | 'SETTLE' | 'FAILED') => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const bond = getUser(WalletUsers.bond);
	const bondDid = bond.did;

	const message = {
		typeUrl: '/bonds.MsgUpdateBondState',
		value: impact.bonds.MsgUpdateBondState.fromPartial({
			bondDid: bondDid,
			state: state,
			editorDid: did,
			editorAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const Buy = async (signer: WalletUsers = WalletUsers.tester, amount: number) => {
	const client = await createClient(getUser(signer));

	const user = getUser(signer);
	const account = (await user.getAccounts())[0];
	const myAddress = account.address;
	const did = user.did;

	const bond = getUser(WalletUsers.bond);
	const bondDid = bond.did;

	const message = {
		typeUrl: '/bonds.MsgBuy',
		value: impact.bonds.MsgBuy.fromPartial({
			buyerDid: did,
			buyerAddress: myAddress,
			amount: impact.cosmos.Coin.fromPartial({
				denom: constants.bondToken,
				amount: amount.toString(),
			}),
			maxPrices: [
				impact.cosmos.Coin.fromPartial({
					denom: constants.bondReserveToken,
					amount: '1000000',
				}),
			],
			bondDid: bondDid,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const Sell = async (signer: WalletUsers = WalletUsers.tester, amount: number) => {
	const client = await createClient(getUser(signer));

	const user = getUser(signer);
	const account = (await user.getAccounts())[0];
	const myAddress = account.address;
	const did = user.did;

	const bond = getUser(WalletUsers.bond);
	const bondDid = bond.did;

	const message = {
		typeUrl: '/bonds.MsgSell',
		value: impact.bonds.MsgSell.fromPartial({
			sellerDid: did,
			sellerAddress: myAddress,
			amount: impact.cosmos.Coin.fromPartial({
				denom: constants.bondToken,
				amount: amount.toString(),
			}),
			bondDid: bondDid,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

// Needs swapper function
export const Swap = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const bond = getUser(WalletUsers.bond);
	const bondDid = bond.did;

	const message = {
		typeUrl: '/bonds.MsgSwap',
		value: impact.bonds.MsgSwap.fromPartial({
			swapperDid: did,
			swapperAddress: myAddress,
			bondDid: bondDid,
			from: impact.cosmos.Coin.fromPartial({
				denom: '',
				amount: '',
			}),
			toToken: '',
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const MakeOutcomePayment = async (amount: number) => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const bond = getUser(WalletUsers.bond);
	const bondDid = bond.did;

	const message = {
		typeUrl: '/bonds.MsgMakeOutcomePayment',
		value: impact.bonds.MsgMakeOutcomePayment.fromPartial({
			senderDid: did,
			senderAddress: myAddress,
			amount: amount.toString(),
			bondDid: bondDid,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const WithdrawShare = async (signer: WalletUsers = WalletUsers.tester) => {
	const client = await createClient(getUser(signer));

	const user = getUser(signer);
	const account = (await user.getAccounts())[0];
	const myAddress = account.address;
	const did = user.did;

	const bond = getUser(WalletUsers.bond);
	const bondDid = bond.did;

	const message = {
		typeUrl: '/bonds.MsgWithdrawShare',
		value: impact.bonds.MsgWithdrawShare.fromPartial({
			recipientDid: did,
			bondDid: bondDid,
			recipientAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const WithdrawReserve = async (signer: WalletUsers = WalletUsers.tester, amount: number) => {
	const client = await createClient(getUser(signer));

	const user = getUser(signer);
	const account = (await user.getAccounts())[0];
	const myAddress = account.address;
	const did = user.did;

	const bond = getUser(WalletUsers.bond);
	const bondDid = bond.did;

	const message = {
		typeUrl: '/bonds.MsgWithdrawReserve',
		value: impact.bonds.MsgWithdrawReserve.fromPartial({
			withdrawerDid: did,
			withdrawerAddress: myAddress,
			amount: [impact.cosmos.Coin.fromPartial({ denom: constants.bondReserveToken, amount: amount.toString() })],
			bondDid: bondDid,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};
