import { fee, WalletUsers } from './constants';
import { createClient, getUser } from './common';
import { cosmos } from '../index';

export const BankSendTrx = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;

	const alice = getUser(WalletUsers.alice);
	const aliceAccount = (await alice.getAccounts())[0];

	const message = {
		typeUrl: '/cosmos.bank.v1beta1.MsgSend',
		value: cosmos.bank.v1beta1.MsgSend.fromPartial({
			fromAddress: myAddress,
			toAddress: aliceAccount.address,
			amount: [cosmos.base.v1beta1.Coin.fromPartial({ amount: '100000', denom: 'uixo' })],
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};
