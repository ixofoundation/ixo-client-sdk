import base58 from 'bs58';
import { createClient, getUser } from './common';
import { constants, fee, WalletUsers } from './constants';
import { impact } from '../index';
import { JsonToArray } from '../utils/conversions';

/**
 * Requires CreatePaymentTemplate to be run first to create paymentTemplateId used
 */
export const CreateProject = async () => {
	const projectData = {
		nodeDid: 'nodeDid',
		requiredClaims: '500',
		serviceEndpoint: 'serviceEndpoint',
		createdOn: '2020-01-01T01:01:01.000Z',
		createdBy: 'Creator',
		status: '',
		fees: {
			'@context': '',
			items: [{ '@type': 'OracleFee', id: constants.paymentTemplateId }],
		},
	};

	const client = await createClient(getUser(WalletUsers.project, constants.projectWalletType as any), true);

	const tester = getUser();
	const did = tester.did;
	const project = getUser(WalletUsers.project, constants.projectWalletType as any);

	const projectDid = project.did;
	const projectAccount = (await project.getAccounts())[0];

	const message = {
		typeUrl: '/project.MsgCreateProject',
		value: impact.project.MsgCreateProject.fromPartial({
			senderDid: did,
			projectDid: projectDid,
			pubKey: base58.encode(projectAccount.pubkey),
			txHash: '',
			projectAddress: projectAccount.address,
			data: JsonToArray(JSON.stringify(projectData)),
		}),
	};

	const response = await client.signAndBroadcast(projectAccount.address, [message], {
		amount: [
			{
				denom: 'uixo',
				amount: '1000000',
			},
		],
		gas: '3000000',
	});
	return response;
};

/**
 * @param status one of 'CREATED' | 'PENDING' | 'FUNDED' | 'STARTED'
 */
export const UpdateProjectStatus = async (status: 'CREATED' | 'PENDING' | 'FUNDED' | 'STARTED') => {
	const client = await createClient(getUser(WalletUsers.project, constants.projectWalletType as any));

	const tester = getUser();
	const did = tester.did;

	const project = getUser(WalletUsers.project, constants.projectWalletType as any);
	const projectDid = project.did;
	const projectAccount = (await project.getAccounts())[0];

	const message = {
		typeUrl: '/project.MsgUpdateProjectStatus',
		value: impact.project.MsgUpdateProjectStatus.fromPartial({
			txHash: '',
			senderDid: did,
			projectDid: projectDid,
			data: impact.project.UpdateProjectStatusDoc.fromPartial({ status }),
			projectAddress: projectAccount.address,
		}),
	};

	const response = await client.signAndBroadcast(projectAccount.address, [message], fee);
	return response;
};

/**
 * @param role one of 'SA' | ''.
 */
export const CreateAgent = async (role: string = 'SA') => {
	const client = await createClient(getUser(WalletUsers.project, constants.projectWalletType as any));

	const tester = getUser();
	const did = tester.did;

	const project = getUser(WalletUsers.project, constants.projectWalletType as any);
	const projectDid = project.did;
	const projectAccount = (await project.getAccounts())[0];

	const message = {
		typeUrl: '/project.MsgCreateAgent',
		value: impact.project.MsgCreateAgent.fromPartial({
			txHash: '',
			senderDid: did,
			projectDid: projectDid,
			data: impact.project.CreateAgentDoc.fromPartial({ agentDid: did, role }),
			projectAddress: projectAccount.address,
		}),
	};

	const response = await client.signAndBroadcast(projectAccount.address, [message], fee);
	return response;
};

/**
 * Not implemented on chain!!!
 */
export const UpdateAgent = async () => {
	const client = await createClient(getUser(WalletUsers.project, constants.projectWalletType as any));

	const tester = getUser();
	const did = tester.did;

	const project = getUser(WalletUsers.project, constants.projectWalletType as any);
	const projectDid = project.did;
	const projectAccount = (await project.getAccounts())[0];

	const message = {
		typeUrl: '/project.MsgUpdateAgent',
		value: impact.project.MsgUpdateAgent.fromPartial({
			txHash: '',
			senderDid: did,
			projectDid: projectDid,
			data: impact.project.UpdateAgentDoc.fromPartial({ did: did, status: 'AWESOME' }),
			projectAddress: projectAccount.address,
		}),
	};

	const response = await client.signAndBroadcast(projectAccount.address, [message], fee);
	return response;
};

export const CreateClaim = async () => {
	const client = await createClient(getUser(WalletUsers.project, constants.projectWalletType as any));

	const tester = getUser();
	const did = tester.did;

	const project = getUser(WalletUsers.project, constants.projectWalletType as any);
	const projectDid = project.did;
	const projectAccount = (await project.getAccounts())[0];

	const message = {
		typeUrl: '/project.MsgCreateClaim',
		value: impact.project.MsgCreateClaim.fromPartial({
			txHash: '',
			senderDid: did,
			projectDid: projectDid,
			data: impact.project.CreateClaimDoc.fromPartial({ claimId: constants.projectClaimId, claimTemplateId: constants.projectTemplateId }),
			projectAddress: projectAccount.address,
		}),
	};

	const response = await client.signAndBroadcast(projectAccount.address, [message], fee);
	return response;
};

export const CreateEvaluation = async () => {
	const client = await createClient(getUser(WalletUsers.project, constants.projectWalletType as any));

	const tester = getUser();
	const did = tester.did;

	const project = getUser(WalletUsers.project, constants.projectWalletType as any);
	const projectDid = project.did;
	const projectAccount = (await project.getAccounts())[0];

	const message = {
		typeUrl: '/project.MsgCreateEvaluation',
		value: impact.project.MsgCreateEvaluation.fromPartial({
			txHash: '',
			senderDid: did,
			projectDid: projectDid,
			data: impact.project.CreateEvaluationDoc.fromPartial({ claimId: constants.projectClaimId, status: '1' }),
			projectAddress: projectAccount.address,
		}),
	};

	const response = await client.signAndBroadcast(projectAccount.address, [message], fee);
	return response;
};

export const WithdrawFunds = async () => {
	const client = await createClient();

	const tester = getUser();
	const account = (await tester.getAccounts())[0];
	const myAddress = account.address;
	const did = tester.did;

	const project = getUser(WalletUsers.project, constants.projectWalletType as any);
	const projectDid = project.did;

	const message = {
		typeUrl: '/project.MsgWithdrawFunds',
		value: impact.project.MsgWithdrawFunds.fromPartial({
			senderDid: did,
			data: impact.project.WithdrawFundsDoc.fromPartial({
				projectDid: projectDid,
				recipientDid: did,
				amount: '100000',
				isRefund: true,
			}),
			senderAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const UpdateProjectDoc = async () => {
	const client = await createClient(getUser(WalletUsers.project, constants.projectWalletType as any));

	const tester = getUser();
	const did = tester.did;

	const project = getUser(WalletUsers.project, constants.projectWalletType as any);
	const projectDid = project.did;
	const projectAccount = (await project.getAccounts())[0];

	const data = {
		nodeDid: 'nodeDid',
		requiredClaims: '500',
		serviceEndpoint: 'serviceEndpoint',
		createdOn: '2020-01-01T01:01:01.000Z',
		createdBy: 'Creator',
		status: '',
		fees: {
			'@context': '',
			items: [{ '@type': 'OracleFee', id: 'payment:template:oracle-fee' }],
		},
		newField: 'someNewField',
	};

	const message = {
		typeUrl: '/project.MsgUpdateProjectDoc',
		value: impact.project.MsgUpdateProjectDoc.fromPartial({
			txHash: '',
			senderDid: did,
			projectDid: projectDid,
			data: JsonToArray(JSON.stringify(data)),
			projectAddress: projectAccount.address,
		}),
	};

	const response = await client.signAndBroadcast(projectAccount.address, [message], fee);
	return response;
};
