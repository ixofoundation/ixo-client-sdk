import { encodeSecp256k1Signature, Secp256k1HdWallet } from '@cosmjs/amino';
import { Secp256k1, sha256 } from '@cosmjs/crypto';
import { DirectSecp256k1HdWallet, makeSignBytes } from '@cosmjs/proto-signing';

export const getSecpClient = (mnemonic: string) => {
	const secpClient = {
		async getAccounts() {
			const wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, { prefix: 'ixo' });
			return await wallet.getAccounts();
		},

		async signDirect(signerAddress: any, signDoc: any) {
			const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: 'ixo' });
			return await wallet.signDirect(signerAddress, signDoc);
		},
	};

	return secpClient;
};
