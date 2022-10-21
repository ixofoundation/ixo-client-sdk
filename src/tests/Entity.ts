import { Registry } from '@cosmjs/proto-signing';
import { MsgCreateEntity } from '../codec/entity/tx';
import { createClient, fee, offlineWallet } from './constants';

export const CreateEntity = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/entity.MsgCreateEntity', MsgCreateEntity); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;

	const client = await createClient(myRegistry);

	const message = {
		typeUrl: '/entity.MsgCreateEntity',
		value: MsgCreateEntity.fromPartial({
			entityType: 'asset',
			entityStatus: 0,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};
