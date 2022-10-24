import { Registry } from '@cosmjs/proto-signing';
import base58 from 'bs58';
import { AccordedRight, Context, IidDocument, IidMetadata, LinkedEntity, LinkedResource, Service, VerificationMethod } from '../codec/iid/iid';
import {
	MsgAddAccordedRight,
	MsgAddController,
	MsgAddIidContext,
	MsgAddLinkedEntity,
	MsgAddLinkedResource,
	MsgAddService,
	MsgAddVerification,
	MsgCreateIidDocument,
	MsgDeleteAccordedRight,
	MsgDeleteController,
	MsgDeleteIidContext,
	MsgDeleteLinkedEntity,
	MsgDeleteLinkedResource,
	MsgDeleteService,
	MsgRevokeVerification,
	MsgSetVerificationRelationships,
	MsgUpdateIidDocument,
	MsgUpdateIidMeta,
	Verification,
} from '../codec/iid/tx';
import { alice, bob, createClient, fee, offlineWallet } from './constants';

const contextKey = 'context_key';
const verificationMethodId = 'verification_method_id';
const linkedEntityId = 'linked_entity_id';
const linkedResourceId = 'linked_resource_id';
const serviceId = 'service_id';

export const CreateIidDoc = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgCreateIidDocument', MsgCreateIidDocument);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const myPubKey = ad[0].pubkey;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/iid.MsgCreateIidDocument',
		value: MsgCreateIidDocument.fromPartial({
			id: did,
			verifications: [
				Verification.fromPartial({
					relationships: ['authentication'],
					method: VerificationMethod.fromPartial({ id: did, type: 'EcdsaSecp256k1VerificationKey2019', publicKeyMultibase: base58.encode(myPubKey), controller: did }),
				}),
			],
			signer: myAddress,
			controllers: [did],
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const UpdateIidDoc = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgUpdateIidDocument', MsgUpdateIidDocument);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/iid.MsgUpdateIidDocument',
		value: MsgUpdateIidDocument.fromPartial({
			doc: IidDocument.fromPartial({ id: did, controller: [did, alice.did] }),
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const UpdateIidMeta = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgUpdateIidMeta', MsgUpdateIidMeta);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/iid.MsgUpdateIidMeta',
		value: MsgUpdateIidMeta.fromPartial({
			id: did,
			meta: IidMetadata.fromPartial({ versionId: '2' }),
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const AddIidContext = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgAddIidContext', MsgAddIidContext);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/iid.MsgAddIidContext',
		value: MsgAddIidContext.fromPartial({
			id: did,
			context: Context.fromPartial({ key: contextKey, val: 'val' }),
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const DeleteIidContext = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgDeleteIidContext', MsgDeleteIidContext);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/iid.MsgDeleteIidContext',
		value: MsgDeleteIidContext.fromPartial({
			id: did,
			contextKey: contextKey,
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const AddVerification = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgAddVerification', MsgAddVerification);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/iid.MsgAddVerification',
		value: MsgAddVerification.fromPartial({
			id: did,
			verification: Verification.fromPartial({
				relationships: [],
				method: VerificationMethod.fromPartial({ id: verificationMethodId, type: 'EcdsaSecp256k1VerificationKey2019', publicKeyMultibase: base58.encode((await alice.getAccounts())[0].pubkey), controller: alice.did }),
			}),
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const SetVerificationRelationships = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgSetVerificationRelationships', MsgSetVerificationRelationships);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/iid.MsgSetVerificationRelationships',
		value: MsgSetVerificationRelationships.fromPartial({
			id: did,
			methodId: verificationMethodId,
			relationships: ['authentication'],
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const RevokeVerification = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgRevokeVerification', MsgRevokeVerification);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/iid.MsgRevokeVerification',
		value: MsgRevokeVerification.fromPartial({
			id: did,
			methodId: verificationMethodId,
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const AddAccordedRight = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgAddAccordedRight', MsgAddAccordedRight);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/iid.MsgAddAccordedRight',
		value: MsgAddAccordedRight.fromPartial({
			id: did,
			accordedRight: AccordedRight.fromPartial({}),
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const DeleteAccordedRight = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgDeleteAccordedRight', MsgDeleteAccordedRight);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/iid.MsgDeleteAccordedRight',
		value: MsgDeleteAccordedRight.fromPartial({
			id: did,
			rightId: '',
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const AddController = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgAddController', MsgAddController);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/iid.MsgAddController',
		value: MsgAddController.fromPartial({
			id: did,
			controllerDid: bob.did,
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const DeleteController = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgDeleteController', MsgDeleteController);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/iid.MsgDeleteController',
		value: MsgDeleteController.fromPartial({
			id: did,
			controllerDid: bob.did,
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const AddLinkedEntity = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgAddLinkedEntity', MsgAddLinkedEntity);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/iid.MsgAddLinkedEntity',
		value: MsgAddLinkedEntity.fromPartial({
			id: did,
			linkedEntity: LinkedEntity.fromPartial({ id: linkedEntityId }),
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const DeleteLinkedEntity = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgDeleteLinkedEntity', MsgDeleteLinkedEntity);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/iid.MsgDeleteLinkedEntity',
		value: MsgDeleteLinkedEntity.fromPartial({
			id: did,
			entityId: linkedEntityId,
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const AddLinkedResource = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgAddLinkedResource', MsgAddLinkedResource);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/iid.MsgAddLinkedResource',
		value: MsgAddLinkedResource.fromPartial({
			id: did,
			linkedResource: LinkedResource.fromPartial({ id: linkedResourceId, description: 'Description' }),
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const DeleteLinkedResource = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgDeleteLinkedResource', MsgDeleteLinkedResource);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/iid.MsgDeleteLinkedResource',
		value: MsgDeleteLinkedResource.fromPartial({
			id: did,
			resourceId: linkedResourceId,
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const AddService = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgAddService', MsgAddService);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/iid.MsgAddService',
		value: MsgAddService.fromPartial({
			id: did,
			serviceData: Service.fromPartial({ id: serviceId }),
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const DeleteService = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgDeleteService', MsgDeleteService);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const message = {
		typeUrl: '/iid.MsgDeleteService',
		value: MsgDeleteService.fromPartial({
			id: did,
			serviceId: serviceId,
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};
