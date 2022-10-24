import { toBase64 } from '@cosmjs/encoding';
import { Registry } from '@cosmjs/proto-signing';
import base58 from 'bs58';
import { CreateAgentDoc, CreateClaimDoc, CreateEvaluationDoc, UpdateAgentDoc, UpdateProjectStatusDoc, WithdrawFundsDoc } from '../codec/project/project';
import { MsgCreateAgent, MsgCreateClaim, MsgCreateEvaluation, MsgCreateProject, MsgUpdateAgent, MsgUpdateProjectDoc, MsgUpdateProjectStatus, MsgWithdrawFunds } from '../codec/project/tx';
import { JsonToArray } from '../protoquery/utils';
import { createClient, offlineWallet, fee } from './constants';
import { paymentTemplateId } from './Payments';
import { getSecpClient } from './secpClient';

// projectAddress: ixo1wfg2w8q7yegkdh3655szhf0pxtf9r3z9nnc30x for mnemonic below
const project = getSecpClient('bike dose woman gospel discover mother door kite venue offer mention chuckle');
const projectData = {
	nodeDid: 'nodeDid',
	requiredClaims: '500',
	serviceEndpoint: 'serviceEndpoint',
	createdOn: '2020-01-01T01:01:01.000Z',
	createdBy: 'Creator',
	status: '',
	fees: {
		'@context': '',
		items: [{ '@type': 'OracleFee', id: paymentTemplateId }],
	},
};
const claimId = 'claim_id';
const templateId = 'template_id';

/**
 * Requires CreatePaymentTemplate to be run first to create paymentTemplateId
 */
export const CreateProject = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/project.MsgCreateProject', MsgCreateProject);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const projectDid = project.did;
	const projectAccount = (await project.getAccounts())[0];

	const message = {
		typeUrl: '/project.MsgCreateProject',
		value: MsgCreateProject.fromPartial({
			senderDid: did,
			projectDid: projectDid,
			// pubKey: toBase64(projectAccount.pubkey),
			pubKey: base58.encode(projectAccount.pubkey),
			txHash: '',
			projectAddress: projectAccount.address,
			data: JsonToArray(JSON.stringify(projectData)),
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const UpdateProjectStatus = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/project.MsgUpdateProjectStatus', MsgUpdateProjectStatus);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const projectDid = project.did;
	const projectAccount = (await project.getAccounts())[0];

	const message = {
		typeUrl: '/project.MsgUpdateProjectStatus',
		value: MsgUpdateProjectStatus.fromPartial({
			txHash: '',
			senderDid: did,
			projectDid: projectDid,
			data: UpdateProjectStatusDoc.fromPartial({ status: 'CREATED' }),
			projectAddress: projectAccount.address,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const CreateAgent = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/project.MsgCreateAgent', MsgCreateAgent);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const projectDid = project.did;
	const projectAccount = (await project.getAccounts())[0];

	const message = {
		typeUrl: '/project.MsgCreateAgent',
		value: MsgCreateAgent.fromPartial({
			txHash: '',
			senderDid: did,
			projectDid: projectDid,
			data: CreateAgentDoc.fromPartial({ agentDid: did, role: '' }),
			projectAddress: projectAccount.address,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const UpdateAgent = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/project.MsgUpdateAgent', MsgUpdateAgent);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const projectDid = project.did;
	const projectAccount = (await project.getAccounts())[0];

	const message = {
		typeUrl: '/project.MsgUpdateAgent',
		value: MsgUpdateAgent.fromPartial({
			txHash: '',
			senderDid: did,
			projectDid: projectDid,
			data: UpdateAgentDoc.fromPartial({ did: did, status: '', role: '' }),
			projectAddress: projectAccount.address,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const CreateClaim = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/project.MsgCreateClaim', MsgCreateClaim);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const projectDid = project.did;
	const projectAccount = (await project.getAccounts())[0];

	const message = {
		typeUrl: '/project.MsgCreateClaim',
		value: MsgCreateClaim.fromPartial({
			txHash: '',
			senderDid: did,
			projectDid: projectDid,
			data: CreateClaimDoc.fromPartial({ claimId: claimId, claimTemplateId: templateId }),
			projectAddress: projectAccount.address,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const CreateEvaluation = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/project.MsgCreateEvaluation', MsgCreateEvaluation);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const projectDid = project.did;
	const projectAccount = (await project.getAccounts())[0];

	const message = {
		typeUrl: '/project.MsgCreateEvaluation',
		value: MsgCreateEvaluation.fromPartial({
			txHash: '',
			senderDid: did,
			projectDid: projectDid,
			data: CreateEvaluationDoc.fromPartial({ claimId: claimId, status: '1' }),
			projectAddress: projectAccount.address,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const WithdrawFunds = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/project.MsgWithdrawFunds', MsgWithdrawFunds);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

	const projectDid = project.did;

	const message = {
		typeUrl: '/project.MsgWithdrawFunds',
		value: MsgWithdrawFunds.fromPartial({
			senderDid: did,
			data: WithdrawFundsDoc.fromPartial({
				projectDid: projectDid,
				recipientDid: did,
				amount: '1000000',
				isRefund: true,
			}),
			senderAddress: myAddress,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};

export const UpdateProjectDoc = async () => {
	const myRegistry = new Registry();
	myRegistry.register('/project.MsgUpdateProjectDoc', MsgUpdateProjectDoc);

	const ad = await offlineWallet.getAccounts();
	const myAddress = ad[0].address;
	const client = await createClient(myRegistry);
	const did = offlineWallet.did;

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
		value: MsgUpdateProjectDoc.fromPartial({
			txHash: '',
			senderDid: did,
			projectDid: projectDid,
			data: JsonToArray(JSON.stringify(data)),
			projectAddress: projectAccount.address,
		}),
	};

	const response = await client.signAndBroadcast(myAddress, [message], fee);
	return response;
};
