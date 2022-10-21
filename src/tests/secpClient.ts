import { sha256 } from '@cosmjs/crypto';
import { toUtf8 } from '@cosmjs/encoding';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import sovrin from 'sovrin-did';

export const getSecpClient = (mnemonic: string) => {
	const didDoc = sovrin.fromSeed(sha256(toUtf8(mnemonic)).slice(0, 32));

	const secpClient = {
		mnemonic,
		didDoc,
		didPrefix: 'did:ixo:',
		did: 'did:ixo:' + didDoc.did,
		didSov: 'did:sov:' + didDoc.did,

		async getAccounts() {
			const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: 'ixo' });
			return await wallet.getAccounts();
		},

		async signDirect(signerAddress: any, signDoc: any) {
			const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: 'ixo' });
			return await wallet.signDirect(signerAddress, signDoc);
		},
	};

	return secpClient;
};
