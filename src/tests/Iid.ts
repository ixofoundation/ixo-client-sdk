import { getUser, getVerificationMethod, createClient } from './common';
import { constants, fee, WalletUsers } from './constants';
import { impact } from '../index';

export const CreateIidDoc = async (signer: WalletUsers = WalletUsers.tester, userToAddToVerifications?: WalletUsers) => {
	const client = await createClient(getUser(signer));

	const user = getUser(signer);
	const account = (await user.getAccounts())[0];
	const myAddress = account.address;
	const myPubKey = account.pubkey;
	const did = user.did;

	let verifications = [
		impact.iid.Verification.fromPartial({ relationships: ['authentication'], method: getVerificationMethod(did, myPubKey, did) }),
		impact.iid.Verification.fromPartial({ relationships: ['authentication'], method: getVerificationMethod(`${did}#${myAddress}`, myPubKey, did) }),
	];

	if (userToAddToVerifications) {
		const eUser = getUser(userToAddToVerifications);
		const eUserAccount = (await eUser.getAccounts())[0];
		const eUserAddress = eUserAccount.address;
		const eUserPubKey = eUserAccount.pubkey;
		const eUserdid = eUser.did;

		verifications.push(impact.iid.Verification.fromPartial({ relationships: ['authentication'], method: getVerificationMethod(eUserdid, eUserPubKey, eUserdid) }));
		verifications.push(impact.iid.Verification.fromPartial({ relationships: ['authentication'], method: getVerificationMethod(`${eUserdid}#${eUserAddress}`, eUserPubKey, eUserdid) }));
	}

	const message = {
		typeUrl: '/iid.MsgCreateIidDocument',
		value: impact.iid.MsgCreateIidDocument.fromPartial({
			id: did,
			verifications,
			signer: myAddress,
			controllers: [did],
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const UpdateIidDoc = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const alice = getUser(WalletUsers.alice);

	const message = {
		typeUrl: '/iid.MsgUpdateIidDocument',
		value: impact.iid.MsgUpdateIidDocument.fromPartial({
			doc: impact.iid.IidDocument.fromPartial({ id: did, controller: [alice.did] }),
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const UpdateIidMeta = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const message = {
		typeUrl: '/iid.MsgUpdateIidMeta',
		value: impact.iid.MsgUpdateIidMeta.fromPartial({
			id: did,
			meta: impact.iid.IidMetadata.fromPartial({ versionId: '2' }),
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const AddIidContext = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const message = {
		typeUrl: '/iid.MsgAddIidContext',
		value: impact.iid.MsgAddIidContext.fromPartial({
			id: did,
			context: impact.iid.Context.fromPartial({ key: constants.contextKey, val: 'val' }),
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const DeleteIidContext = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const message = {
		typeUrl: '/iid.MsgDeleteIidContext',
		value: impact.iid.MsgDeleteIidContext.fromPartial({
			id: did,
			contextKey: constants.contextKey,
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

/**
 * @param relationships list with values: 'authentication' | 'assertionMethod' | 'keyAgreement' | 'capabilityInvocation' | 'capabilityDelegation'
 */
export const AddVerification = async (relationships: string[] = ['authentication']) => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const alice = getUser(WalletUsers.alice);
	const aliceAccount = (await alice.getAccounts())[0];

	const message = {
		typeUrl: '/iid.MsgAddVerification',
		value: impact.iid.MsgAddVerification.fromPartial({
			id: did,
			verification: impact.iid.Verification.fromPartial({
				relationships: relationships,
				method: getVerificationMethod(alice.did, aliceAccount.pubkey, alice.did),
			}),
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

/**
 * @param relationships list with values: 'authentication' | 'assertionMethod' | 'keyAgreement' | 'capabilityInvocation' | 'capabilityDelegation'
 */
export const SetVerificationRelationships = async (relationships: string[] = ['authentication']) => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const alice = getUser(WalletUsers.alice);

	const message = {
		typeUrl: '/iid.MsgSetVerificationRelationships',
		value: impact.iid.MsgSetVerificationRelationships.fromPartial({
			id: did,
			methodId: alice.did,
			relationships: relationships,
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const RevokeVerification = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const alice = getUser(WalletUsers.alice);

	const message = {
		typeUrl: '/iid.MsgRevokeVerification',
		value: impact.iid.MsgRevokeVerification.fromPartial({
			id: did,
			methodId: alice.did,
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const AddAccordedRight = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;

	const accordedRight = getUser(WalletUsers.accordedRight);

	const message = {
		typeUrl: '/iid.MsgAddAccordedRight',
		value: impact.iid.MsgAddAccordedRight.fromPartial({
			id: accordedRight.did,
			accordedRight: impact.iid.AccordedRight.fromPartial({
				type: 'type',
				id: constants.accordedRightId,
				mechanism: 'mechanism',
				message: 'message',
				service: 'service',
			}),
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const DeleteAccordedRight = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;

	const accordedRight = getUser(WalletUsers.accordedRight);

	const message = {
		typeUrl: '/iid.MsgDeleteAccordedRight',
		value: impact.iid.MsgDeleteAccordedRight.fromPartial({
			id: accordedRight.did,
			rightId: constants.accordedRightId,
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const AddController = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const bob = getUser(WalletUsers.bob);

	const message = {
		typeUrl: '/iid.MsgAddController',
		value: impact.iid.MsgAddController.fromPartial({
			id: did,
			controllerDid: bob.did,
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const DeleteController = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const bob = getUser(WalletUsers.bob);

	const message = {
		typeUrl: '/iid.MsgDeleteController',
		value: impact.iid.MsgDeleteController.fromPartial({
			id: did,
			controllerDid: bob.did,
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const AddLinkedEntity = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const message = {
		typeUrl: '/iid.MsgAddLinkedEntity',
		value: impact.iid.MsgAddLinkedEntity.fromPartial({
			id: did,
			linkedEntity: impact.iid.LinkedEntity.fromPartial({ id: constants.linkedEntityId }),
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const DeleteLinkedEntity = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const message = {
		typeUrl: '/iid.MsgDeleteLinkedEntity',
		value: impact.iid.MsgDeleteLinkedEntity.fromPartial({
			id: did,
			entityId: constants.linkedEntityId,
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const AddLinkedResource = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const message = {
		typeUrl: '/iid.MsgAddLinkedResource',
		value: impact.iid.MsgAddLinkedResource.fromPartial({
			id: did,
			linkedResource: impact.iid.LinkedResource.fromPartial({ id: constants.linkedResourceId, description: 'Description' }),
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const DeleteLinkedResource = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const message = {
		typeUrl: '/iid.MsgDeleteLinkedResource',
		value: impact.iid.MsgDeleteLinkedResource.fromPartial({
			id: did,
			resourceId: constants.linkedResourceId,
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const AddService = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const message = {
		typeUrl: '/iid.MsgAddService',
		value: impact.iid.MsgAddService.fromPartial({
			id: did,
			serviceData: impact.iid.Service.fromPartial({ id: constants.serviceId, serviceEndpoint: 'https://ixo.world', type: 'awesome' }),
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const DeleteService = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const message = {
		typeUrl: '/iid.MsgDeleteService',
		value: impact.iid.MsgDeleteService.fromPartial({
			id: did,
			serviceId: constants.serviceId,
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};
