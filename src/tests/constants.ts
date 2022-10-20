/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { encodeSecp256k1Signature, serializeSignDoc } from '@cosmjs/amino';
import { Ed25519, Secp256k1, sha256 } from '@cosmjs/crypto';
import { toUtf8, Bech32, toBase64 } from '@cosmjs/encoding';
import { makeSignBytes, OfflineDirectSigner } from '@cosmjs/proto-signing';
import base58, { decode } from 'bs58';
import sovrin from 'sovrin-did';
import { SigningStargateClient } from '../utils/customClient';
import { accountFromAny } from '../utils/EdAccountHandler';

// const RPC_URL = process.env.RPC_URL || 'https://de56-102-182-65-22.sa.ngrok.io' || 'https://devnet.ixo.earth/rpc/';
const RPC_URL = 'https://devnet.ixo.earth/rpc/';
// const RPC_URL = 'https://testnet.ixo.earth/rpc/';

const getEdClient = () => {
	// const mnemonic = 'creek obvious bamboo ozone dwarf above hill muscle image fossil drastic toy';
	const mnemonic = 'basket mechanic myself capable shoe then home magic cream edge seminar artefact';

	// Creating diddoc from MM - edkeys
	const didDoc = sovrin.fromSeed(sha256(toUtf8(mnemonic)).slice(0, 32));

	const edClient = {
		mnemonic,
		didDoc,
		didPrefix: 'did:ixo:',
		did: 'did:ixo:' + didDoc.did,
		didSov: 'did:sov:' + didDoc.did,

		async getAccounts() {
			return [
				{
					algo: 'ed25519-sha-256',
					pubkey: Uint8Array.from(decode(didDoc.verifyKey)),
					address: Bech32.encode('ixo', sha256(decode(didDoc.verifyKey)).slice(0, 20)),
				},
			];
		},
		// async signAmino(signerAddress: any, signDoc: any) {
		// 	const account = (await this.getAccounts()).find(({ address }) => address === signerAddress);

		// 	if (!account) throw new Error(`Address ${signerAddress} not found in wallet`);

		// 	const fullSignature = sovrin.signMessage(serializeSignDoc(signDoc), didDoc.secret.signKey, didDoc.verifyKey);
		// 	const signatureBase64 = toBase64(fullSignature.slice(0, 64));
		// 	const pub_keyBase64 = decode(didDoc.verifyKey);
		// 	return {
		// 		signed: signDoc,

		// 		signature: {
		// 			signature: signatureBase64,

		// 			pub_key: {
		// 				type: 'tendermint/PubKeyEd25519',
		// 				value: toBase64(pub_keyBase64).toString(),
		// 			},
		// 		},
		// 	};
		// },
		async signDirect(signerAddress: any, signDoc: any) {
			const account = (await this.getAccounts()).find(({ address }) => address === signerAddress);

			if (!account) throw new Error(`Address ${signerAddress} not found in wallet`);

			const { privkey, pubkey } = account;

			const keypair = await Ed25519.makeKeypair(sha256(toUtf8(mnemonic)).slice(0, 32));
			const pub_keyBase64 = decode(didDoc.verifyKey);
			const signBytes = makeSignBytes(signDoc);
			const hashedMessage = sha256(signBytes);
			const signatureArray = await Ed25519.createSignature(hashedMessage, keypair);
			const signatureBase64 = toBase64(signatureArray.slice(0, 64));
			const verified = await Ed25519.verifySignature(signatureArray, hashedMessage, keypair.pubkey);
			console.log({ verified });

			return {
				signed: signDoc,
				signature: {
					signature: signatureBase64,
					pub_key: {
						type: 'tendermint/PubKeyEd25519',
						value: toBase64(pub_keyBase64).toString(),
					},
				},
			};
		},
	};

	return edClient;
};

export const edClient = getEdClient();

export const createClient = async (myRegistry): Promise<SigningStargateClient> => {
	return await SigningStargateClient.connectWithSigner(
		RPC_URL, // Replace with your own RPC endpoint
		// @ts-ignore
		edClient,
		{
			registry: myRegistry,
			accountParser: accountFromAny,
		},
	);
};

export const fee = {
	amount: [
		{
			denom: 'uixo', // Use the appropriate fee denom for your chain
			amount: '1000000',
		},
	],
	gas: '3000000',
};
