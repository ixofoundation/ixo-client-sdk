import { Registry } from '@cosmjs/proto-signing';
import base58 from 'bs58';
import { MsgCreateEntity, MsgTransferEntity, MsgUpdateEntity, MsgUpdateEntityConfig } from '../codec/entity/tx';
import { VerificationMethod } from '../codec/iid/iid';
import { Verification } from '../codec/iid/tx';
import { JsonToArray } from '../protoquery';
import { createClient, fee, offlineWallet, alice } from './constants';

export const CreateEntity = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/entity.MsgCreateEntity', MsgCreateEntity);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const myPubKey = ad[0].pubkey;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/entity.MsgCreateEntity',
		value: MsgCreateEntity.fromPartial({
			entityType: 'asset',
			entityStatus: 0,
			controller: [did],
			verification: [
				Verification.fromPartial({
					relationships: ['authentication'],
					method: VerificationMethod.fromPartial({ id: did, type: 'EcdsaSecp256k1VerificationKey2019', publicKeyMultibase: base58.encode(myPubKey), controller: did }),
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

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

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

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

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

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);

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
