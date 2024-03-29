import { createClient, getUser } from './common';
import { fee, WalletUsers } from './constants';
import { impact } from '../index';

export const CreateEntityAsset = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const message = {
		typeUrl: '/entity.MsgCreateEntity',
		value: impact.entity.MsgCreateEntity.fromPartial({
			entityType: 'asset',
			entityStatus: 0,
			// @ts-ignore
			context: [impact.iid.Context.fromPartial({ key: 'ixo', value: 'https://w3id.org/ixo/v1' })],
			ownerDid: did,
			ownerAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const CreateEntityAssetSupamoto = async (inheritEntityDid: string) => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const message = {
		typeUrl: '/entity.MsgCreateEntity',
		value: impact.entity.MsgCreateEntity.fromPartial({
			entityType: 'protocol',
			entityStatus: 0,
			// @ts-ignore
			context: [impact.iid.Context.fromPartial({ key: 'ixo', value: inheritEntityDid })],
			service: [
				impact.iid.Service.fromPartial({ id: 'did:ixo:entity:abc123#cellnode-pandora', type: 'cellnode', serviceEndpoint: 'https://cellnode-pandora.ixo.earth' }),
				impact.iid.Service.fromPartial({ id: 'did:ixo:entity:abc123#ixo', type: 'chainService', serviceEndpoint: 'https://proxies.sifchain.finance/api/impacthub-3/rpc' }),
				impact.iid.Service.fromPartial({ id: 'did:ixo:entity:abc123#supamoto', type: 'linkedDomains', serviceEndpoint: 'https://legal.supamoto.se/' }),
				impact.iid.Service.fromPartial({ id: 'did:ixo:entity:abc123#dashboard', type: 'linkedDomains', serviceEndpoint: 'https://supamoto.jambo.earth/?id={stoveId}' }),
			],
			linkedResource: [
				impact.iid.LinkedResource.fromPartial({
					id: 'did:ixo:entity:abc123#m5tf6df728jl2hsi8fwa',
					type: 'tokenMetadata',
					description: 'SumaMoto Token Collection Template',
					mediaType: 'application/json',
					serviceEndpoint: '#cellnode-pandora/public/m5tf6df728jl2hsi8fwa',
					proof: 'm5tf6df728jl2hsi8fwa',
					encrypted: 'false',
					right: '#mintNft',
				}),
				impact.iid.LinkedResource.fromPartial({
					id: 'did:ixo:entity:abc123#{tokenid.json}',
					type: 'tokenMetadata',
					description: 'SumaMoto Token Template',
					mediaType: 'application/json',
					serviceEndpoint: '#cellnode-pandora/public/{tokenid.json}',
					proof: '{tokenid}',
					encrypted: 'false',
					right: '#mintCarbonToken',
				}),
				impact.iid.LinkedResource.fromPartial({
					id: 'did:ixo:entity:abc123#m5tf6df728jl2hsi8fwb',
					type: 'page',
					description: '',
					mediaType: 'application/json',
					serviceEndpoint: '#cellnode-pandora/public/m5tf6df728jl2hsi8fwb',
					proof: 'm5tf6df728jl2hsi8fwb',
					encrypted: 'false',
					right: '',
				}),
				impact.iid.LinkedResource.fromPartial({
					id: 'did:ixo:entity:abc123#m5tf6df728jl2hsi8fwc',
					type: 'settings',
					description: '',
					mediaType: 'application/json',
					serviceEndpoint: '#cellnode-pandora/public/df728jl2hsi8fwm5tf6',
					proof: 'df728jl2hsi8fwm5tf6',
					encrypted: 'false',
					right: '',
				}),
				impact.iid.LinkedResource.fromPartial({
					id: 'did:ixo:entity:abc123#m5tf6df728jl2hsi8fwd',
					type: 'claims',
					description: '',
					mediaType: 'application/json',
					serviceEndpoint: '#cellnode-pandora/public/jl2hsi8fwm5tf6df728',
					proof: 'jl2hsi8fwm5tf6df728',
					encrypted: 'false',
					right: '',
				}),
				impact.iid.LinkedResource.fromPartial({
					id: 'did:ixo:entity:abc123#m5tf6df728jl2hsi8fwe',
					type: 'filters',
					description: '',
					mediaType: 'application/json',
					serviceEndpoint: '#cellnode-pandora/public/hsi8fwmjl25tf6df728',
					proof: 'hsi8fwmjl25tf6df728',
					encrypted: 'false',
					right: '',
				}),
				impact.iid.LinkedResource.fromPartial({
					id: 'did:ixo:entity:abc123#certification*',
					type: 'verifiableCredential',
					description: 'Project Certification',
					mediaType: 'application/ld+json',
					serviceEndpoint: '#cellnode-pandora/public/****',
					proof: '****',
					encrypted: 'false',
					right: '',
				}),
				impact.iid.LinkedResource.fromPartial({
					id: 'did:ixo:entity:abc123#dashboard*',
					type: 'service',
					description: 'Dashboard',
					mediaType: 'application/http',
					serviceEndpoint: '#dashboard/?id={stoveId}',
					proof: '',
					encrypted: 'false',
					right: 'view',
				}),
			],
			accordedRight: [
				impact.iid.AccordedRight.fromPartial({
					id: 'did:ixo:entity:abc123#mintNFT',
					type: 'mint',
					mechanism: 'cw721',
					message: 'msgMintNFT',
					service: '#ixo',
				}),
				impact.iid.AccordedRight.fromPartial({
					id: 'did:ixo:entity:abc123#mintCarbonToken',
					type: 'mint',
					mechanism: 'cw1155',
					message: 'msgMint/carbon',
					service: '#ixo',
				}),
				impact.iid.AccordedRight.fromPartial({
					id: 'did:ixo:entity:abc123#carbonCreditClaim',
					type: 'claim/carbonCredit',
					mechanism: 'claimApproval',
					message: 'msgSubmitClaim',
					service: '#ixo',
				}),
				impact.iid.AccordedRight.fromPartial({
					id: 'https://legal.supamoto.se/supamoto/termsAndConditions.pdf',
					type: 'legal',
					mechanism: 'enforceable',
					message: '',
					service: '#supamoto',
				}),
			],
			linkedEntity: [],
			ownerDid: did,
			ownerAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const CreateEntityAssetSupamotoInstance = async (inheritEntityDid: string) => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const message = {
		typeUrl: '/entity.MsgCreateEntity',
		value: impact.entity.MsgCreateEntity.fromPartial({
			entityType: 'asset',
			entityStatus: 0,
			// @ts-ignore
			context: [impact.iid.Context.fromPartial({ key: 'ixo', value: inheritEntityDid })],
			service: [],
			linkedResource: [
				impact.iid.LinkedResource.fromPartial({
					id: 'did:ixo:entity:abc123#m5tf6df728jl2hsi8fwa',
					type: 'page',
					description: '',
					mediaType: 'application/json',
					serviceEndpoint: '#cellnode-pandora/public/m5tf6df728jl2hsi8fwa',
					proof: 'm5tf6df728jl2hsi8fwa',
					encrypted: 'false',
					right: '',
				}),
				impact.iid.LinkedResource.fromPartial({
					id: 'did:ixo:entity:abc123#m5tf6df728jl2hsi8fwb',
					type: 'settings',
					description: '',
					mediaType: 'application/json',
					serviceEndpoint: '#cellnode-pandora/public/df728jl2hsi8fwm5tf6',
					proof: 'df728jl2hsi8fwm5tf6',
					encrypted: 'false',
					right: '',
				}),
				impact.iid.LinkedResource.fromPartial({
					id: 'did:ixo:entity:abc123#m5tf6df728jl2hsi8fwc',
					type: 'class:claims',
					description: '',
					mediaType: 'application/json',
					serviceEndpoint: '#cellnode-pandora/public/jl2hsi8fwm5tf6df728',
					proof: 'jl2hsi8fwm5tf6df728',
					encrypted: 'false',
					right: '',
				}),
				impact.iid.LinkedResource.fromPartial({
					id: 'did:ixo:entity:abc123#m5tf6df728jl2hsi8fwd',
					type: 'class:filters',
					description: '',
					mediaType: 'application/json',
					serviceEndpoint: '#cellnode-pandora/public/hsi8fwmjl25tf6df728',
					proof: 'hsi8fwmjl25tf6df728',
					encrypted: 'false',
					right: '',
				}),
				impact.iid.LinkedResource.fromPartial({
					id: 'did:ixo:entity:abc123#dashboard*',
					type: 'service',
					description: 'Dashboard',
					mediaType: 'application/http',
					serviceEndpoint: '#dashboard/?id=310034110',
					proof: '',
					encrypted: 'false',
					right: 'view',
				}),
			],
			accordedRight: [],
			linkedEntity: [],
			ownerDid: did,
			ownerAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const TransferEntity = async (entityDid: string) => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const alice = getUser(WalletUsers.alice);

	const message = {
		typeUrl: '/entity.MsgTransferEntity',
		value: impact.entity.MsgTransferEntity.fromPartial({
			entityDid: entityDid,
			controllerDid: did,
			controllerAddress: myAddress,
			recipientDid: alice.did,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const UpdateEntity = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const message = {
		typeUrl: '/entity.MsgUpdateEntity',
		value: impact.entity.MsgUpdateEntity.fromPartial({
			status: 1,
			controllerDid: did,
			controllerAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const UpdateConfigEntity = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;

	const message = {
		typeUrl: '/entity.MsgUpdateEntityConfig',
		value: impact.entity.MsgUpdateEntityConfig.fromPartial({
			nftContractAddress: '',
			signer: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};
