import { Registry } from '@cosmjs/proto-signing';
import { MsgCreateEntity, MsgTransferEntity, MsgUpdateEntity, MsgUpdateEntityConfig } from '../codec/entity/tx';
import { Verification } from '../codec/iid/tx';
import { JsonToArray } from '../protoquery';
import { createClient, getUser, getVerificationMethod } from './common';
import { fee, WalletUsers } from './constants';

export const CreateEntity = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/entity.MsgCreateEntity', MsgCreateEntity);
	const client = await createClient(myRegistry);

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const myPubKey = account.pubkey;
	const did = tester.did;

	const message = {
		typeUrl: '/entity.MsgCreateEntity',
		value: MsgCreateEntity.fromPartial({
			entityType: 'asset',
			entityStatus: 0,
			controller: [did],
			verification: [
				Verification.fromPartial({
					relationships: ['authentication'],
					method: getVerificationMethod(did, myPubKey, did),
				}),
			],
			accordedRight: [],
			service: [],
			linkedResource: [],
			linkedEntity: [],
			deactivated: false,
			stage: 'stage',
			ownerDid: did,
			ownerAddress: myAddress,
			data: JsonToArray(JSON.stringify({})),
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const TransferEntity = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/entity.MsgTransferEntity', MsgTransferEntity);
	const client = await createClient(myRegistry);

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const alice = getUser(WalletUsers.alice);

	const message = {
		typeUrl: '/entity.MsgTransferEntity',
		value: MsgTransferEntity.fromPartial({
			entityDid: '',
			controllerDid: did,
			controllerAddress: myAddress,
			recipiantDid: alice.did,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const UpdateEntity = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/entity.MsgUpdateEntity', MsgUpdateEntity);
	const client = await createClient(myRegistry);

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const message = {
		typeUrl: '/entity.MsgUpdateEntity',
		value: MsgUpdateEntity.fromPartial({
			status: 1,
			controllerDid: did,
			controllerAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const UpdateConfigEntity = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/entity.MsgUpdateEntityConfig', MsgUpdateEntityConfig);
	const client = await createClient(myRegistry);

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;

	const message = {
		typeUrl: '/entity.MsgUpdateEntityConfig',
		value: MsgUpdateEntityConfig.fromPartial({
			nftContractAddress: '',
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};
