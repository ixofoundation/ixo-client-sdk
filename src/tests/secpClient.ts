/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { encodeSecp256k1Signature, Secp256k1HdWallet } from '@cosmjs/amino';
import { Secp256k1, sha256 } from '@cosmjs/crypto';
import { makeSignBytes } from '@cosmjs/proto-signing';

export const getSecpClient = (mnemonic: string) => {
	const secpClient = {
		async getAccounts() {
			const wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, { prefix: 'ixo' });
			return await wallet.getAccounts();
		},

		async signDirect(signerAddress: any, signDoc: any) {
			const wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, { prefix: 'ixo' });
			const account = (await this.getAccounts()).find(({ address }) => address === signerAddress);

			if (!account) throw new Error(`Address ${signerAddress} not found in wallet`);
			console.log({ account });

			// wallet.
			const signBytes = makeSignBytes(signDoc);
			const hashedMessage = sha256(signBytes);
			const signature = await Secp256k1.createSignature(hashedMessage, privkey);
			const signatureBytes = new Uint8Array([...signature.r(32), ...signature.s(32)]);
			const stdSignature = encodeSecp256k1Signature(account.pubkey, signatureBytes);

			return {
				signed: signDoc,
				signature: stdSignature,
			};
		},
	};

	return secpClient;
};
