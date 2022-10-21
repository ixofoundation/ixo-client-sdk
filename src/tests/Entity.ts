import { Registry } from '@cosmjs/proto-signing';
import { MsgCreateEntity, MsgTransferEntity, MsgUpdateEntity, MsgUpdateEntityConfig } from '../codec/entity/tx';
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

export const TransferEntity = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/entity.MsgTransferEntity', MsgTransferEntity); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);

	const message = {
		typeUrl: '/entity.MsgTransferEntity',
		value: MsgTransferEntity.fromPartial({
			// entityType: 'asset',
			// entityStatus: 0,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const UpdateEntity = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/entity.MsgUpdateEntity', MsgUpdateEntity); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);

	const message = {
		typeUrl: '/entity.MsgUpdateEntity',
		value: MsgUpdateEntity.fromPartial({
			// entityType: 'asset',
			// entityStatus: 0,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const UpdateConfigEntity = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/entity.MsgUpdateEntityConfig', MsgUpdateEntityConfig); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);

	const message = {
		typeUrl: '/entity.MsgUpdateEntityConfig',
		value: MsgUpdateEntityConfig.fromPartial({
			// entityType: 'asset',
			// entityStatus: 0,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};
