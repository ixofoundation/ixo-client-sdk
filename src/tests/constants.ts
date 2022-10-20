import { SigningStargateClient as CustomSigningStargateClient } from '../utils/customClient';
import { SigningStargateClient } from '@cosmjs/stargate';
import { accountFromAny } from '../utils/EdAccountHandler';
import { getEdClient } from './edClient';
import { getSecpClient } from './secpClient';

// const RPC_URL = process.env.RPC_URL || 'https://de56-102-182-65-22.sa.ngrok.io' || 'https://devnet.ixo.earth/rpc/';
const RPC_URL = 'https://devnet.ixo.earth/rpc/';
// const RPC_URL = 'https://testnet.ixo.earth/rpc/';

// const keyType = 'ed'
const keyType = 'secp';

// const mnemonic = 'creek obvious bamboo ozone dwarf above hill muscle image fossil drastic toy';
const mnemonic = 'basket mechanic myself capable shoe then home magic cream edge seminar artefact';

// @ts-ignore
export const offlineWallet = keyType === 'ed' ? getEdClient(mnemonic) : getSecpClient(mnemonic);

export const createClient = async (myRegistry): Promise<SigningStargateClient> => {
	// @ts-ignore
	return await (keyType === 'ed' ? CustomSigningStargateClient : SigningStargateClient).connectWithSigner(
		RPC_URL, // Replace with your own RPC endpoint
		// @ts-ignore
		offlineWallet,
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
