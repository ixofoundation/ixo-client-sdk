/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Registry } from '@cosmjs/proto-signing';
import { createClient, fee, offlineWallet } from './constants';
import { defaultRegistryTypes as defaultStargateTypes } from '@cosmjs/stargate';
import { MsgSend } from '../codec/external/cosmos/bank/v1beta1/tx';
import { Coin } from '../codec/cosmos/coin';

const toAddress = 'ixo1ky7wad4d7gjtcy5yklc83geev76cudcevmnhhn';

export const BankSendTrx = async () => {
	const myRegistry = new Registry(defaultStargateTypes);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;

	const client = await createClient(myRegistry);

	const message = {
		typeUrl: '/cosmos.bank.v1beta1.MsgSend',
		value: MsgSend.fromPartial({
			fromAddress: myAddress,
			toAddress,
			amount: [Coin.fromPartial({ amount: '100000', denom: 'uixo' })],
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};
