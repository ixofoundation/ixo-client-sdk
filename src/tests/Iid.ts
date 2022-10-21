import { Registry } from '@cosmjs/proto-signing';
import base58 from 'bs58';
import { VerificationMethod } from '../codec/iid/iid';
import { MsgCreateIidDocument, Verification } from '../codec/iid/tx';
import { createClient, fee, offlineWallet } from './constants';

export const CreateIidDoc = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgCreateIidDocument', MsgCreateIidDocument); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const myPubKey = ad[0].pubkey;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did + '1';

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

export const CreateIidDoc = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgCreateIidDocument', MsgCreateIidDocument); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const myPubKey = ad[0].pubkey;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did + '1';

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

export const CreateIidDoc = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgCreateIidDocument', MsgCreateIidDocument); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const myPubKey = ad[0].pubkey;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did + '1';

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

export const CreateIidDoc = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgCreateIidDocument', MsgCreateIidDocument); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const myPubKey = ad[0].pubkey;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did + '1';

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

export const CreateIidDoc = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgCreateIidDocument', MsgCreateIidDocument); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const myPubKey = ad[0].pubkey;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did + '1';

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

export const CreateIidDoc = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgCreateIidDocument', MsgCreateIidDocument); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const myPubKey = ad[0].pubkey;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did + '1';

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

export const CreateIidDoc = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgCreateIidDocument', MsgCreateIidDocument); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const myPubKey = ad[0].pubkey;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did + '1';

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

export const CreateIidDoc = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgCreateIidDocument', MsgCreateIidDocument); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const myPubKey = ad[0].pubkey;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did + '1';

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

export const CreateIidDoc = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgCreateIidDocument', MsgCreateIidDocument); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const myPubKey = ad[0].pubkey;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did + '1';

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

export const CreateIidDoc = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgCreateIidDocument', MsgCreateIidDocument); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const myPubKey = ad[0].pubkey;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did + '1';

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

export const CreateIidDoc = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgCreateIidDocument', MsgCreateIidDocument); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const myPubKey = ad[0].pubkey;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did + '1';

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

export const CreateIidDoc = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgCreateIidDocument', MsgCreateIidDocument); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const myPubKey = ad[0].pubkey;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did + '1';

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

export const CreateIidDoc = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgCreateIidDocument', MsgCreateIidDocument); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const myPubKey = ad[0].pubkey;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did + '1';

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

export const CreateIidDoc = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgCreateIidDocument', MsgCreateIidDocument); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const myPubKey = ad[0].pubkey;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did + '1';

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

export const CreateIidDoc = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgCreateIidDocument', MsgCreateIidDocument); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const myPubKey = ad[0].pubkey;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did + '1';

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

export const CreateIidDoc = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgCreateIidDocument', MsgCreateIidDocument); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const myPubKey = ad[0].pubkey;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did + '1';

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

export const CreateIidDoc = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgCreateIidDocument', MsgCreateIidDocument); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const myPubKey = ad[0].pubkey;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did + '1';

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

export const CreateIidDoc = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/iid.MsgCreateIidDocument', MsgCreateIidDocument); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const myPubKey = ad[0].pubkey;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did + '1';

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
