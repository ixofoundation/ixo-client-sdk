import { Registry } from '@cosmjs/proto-signing';
import { Claim, DidCredential } from '../codec/did/did';
import { MsgAddCredential, MsgAddDid } from '../codec/did/tx';
import { createClient, offlineWallet, fee } from './constants';

export const AddDid = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/did.MsgAddDid', MsgAddDid); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);

	const message = {
		typeUrl: '/did.MsgAddDid',
		value: MsgAddDid.fromPartial({
			did: offlineWallet.didSov,
			pubKey: offlineWallet.didDoc.verifyKey,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const AddCredential = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/did.MsgAddCredential', MsgAddCredential); // Replace with your own type URL and Msg class

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);

	const message = {
		typeUrl: '/did.MsgAddCredential',
		value: MsgAddCredential.fromPartial({
			didCredential: DidCredential.fromPartial({
				credType: [''],
				issuer: '',
				issued: '',
				claim: Claim.fromPartial({
					id: '',
					KYCValidated: false,
				}),
			}),
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};
