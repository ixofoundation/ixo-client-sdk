import { generateId } from './common';

export const RPC_URL = process.env.RPC_URL || 'https://devnet.ixo.earth/rpc/';

export type KeyTypes = 'ed' | 'secp';
export const keyType: KeyTypes = 'secp';

export enum WalletUsers {
	tester = 'tester',
	alice = 'alice',
	bob = 'bob',
	project = 'project',
	bond = 'bond',
}

export let constants: ReturnType<typeof generateConstants>;

export const generateConstants = () => {
	const newConstants = {
		// payments
		paymentTemplateId: `payment:template:${generateId(10)}`,
		paymentContractId: `payment:contract:${generateId(10)}`,
		paymentSubscripionId: `payment:subscription:${generateId(10)}`,
		paymentContractRecipient: { address: 'ixo107pmtx9wyndup8f9lgj6d7dnfq5kuf3sapg0vx', percentage: '100' },

		// projects
		projectClaimId: generateId(),
		projectTemplateId: generateId(),
		projectWalletType: 'ed',

		// bonds
		bondToken: generateId(3),
		bondReserveToken: 'uixo',
	};
	constants = newConstants;
	console.log({ constants });
	return newConstants;
};

export const fee = {
	amount: [
		{
			denom: 'uixo',
			amount: '100000',
		},
	],
	gas: '3000000',
};
