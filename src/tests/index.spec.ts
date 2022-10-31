import { generateWallets, sendFromFaucet, testMsg } from './common';
import { generateConstants, WalletUsers } from './constants';
import * as Bond from './Bond';
import * as Cosmos from './Cosmos';
import * as Entity from './Entity';
import * as Iid from './Iid';
import * as Payments from './Payments';
import * as Projects from './Projects';

beforeAll(() => {
	generateConstants();
	return generateWallets();
});

describe('Testing the cosmos bank module', () => {
	// testMsg('/cosmos.bank.v1beta1.MsgSend', () => Cosmos.BankSendTrx());
});

describe('Testing the iid module', () => {
	sendFromFaucet(WalletUsers.tester);
	testMsg('/iid.MsgCreateIidDocument', () => Iid.CreateIidDoc());
	// testMsg('/iid.MsgUpdateIidDocument', () => Iid.UpdateIidDoc());
	// testMsg('/iid.MsgUpdateIidMeta', () => Iid.UpdateIidMeta());
	// testMsg('/iid.MsgAddIidContext', () => Iid.AddIidContext());
	// testMsg('/iid.MsgDeleteIidContext', () => Iid.DeleteIidContext());
	// testMsg('/iid.MsgAddVerification', () => Iid.AddVerification());
	// testMsg('/iid.MsgSetVerificationRelationships', () => Iid.SetVerificationRelationships());
	// testMsg('/iid.MsgRevokeVerification', () => Iid.RevokeVerification());
	// sendFromFaucet(WalletUsers.accordedRight);
	// testMsg('/iid.MsgCreateIidDocument', () => Iid.CreateIidDoc(WalletUsers.accordedRight, WalletUsers.tester));
	// testMsg('/iid.MsgAddAccordedRight', () => Iid.AddAccordedRight());
	// testMsg('/iid.MsgDeleteAccordedRight', () => Iid.DeleteAccordedRight());
	// testMsg('/iid.MsgAddController', () => Iid.AddController());
	// testMsg('/iid.MsgDeleteController', () => Iid.DeleteController());
	// testMsg('/iid.MsgAddLinkedEntity', () => Iid.AddLinkedEntity());
	// testMsg('/iid.MsgDeleteLinkedEntity', () => Iid.DeleteLinkedEntity());
	// testMsg('/iid.MsgAddLinkedResource', () => Iid.AddLinkedResource());
	// testMsg('/iid.MsgDeleteLinkedResource', () => Iid.DeleteLinkedResource());
	// testMsg('/iid.MsgAddService', () => Iid.AddService());
	// testMsg('/iid.MsgDeleteService', () => Iid.DeleteService());
});

describe('Testing the entity module', () => {
	testMsg('/entity.MsgCreateEntity', () => Entity.CreateEntity());
	// 	testMsg('/entity.MsgTransferEntity', () => Entity.TransferEntity());
	// 	testMsg('/entity.MsgUpdateEntity', () => Entity.UpdateEntity());
	// 	testMsg('/entity.MsgUpdateEntityConfig', () => Entity.UpdateConfigEntity());
});

describe('Testing the Payments module', () => {
	// testMsg('/payments.MsgCreatePaymentTemplate', () => Payments.CreatePaymentTemplate());
	// testMsg('/payments.MsgCreatePaymentContract', () => Payments.CreatePaymentContract());
	// testMsg('/payments.MsgSetPaymentContractAuthorisation', () => Payments.SetPaymentContractAuthorization());
	// testMsg('/payments.MsgCreateSubscription', () => Payments.CreateSubscription());
	// testMsg('/payments.MsgGrantDiscount', () => Payments.GrantDiscount());
	// testMsg('/payments.MsgRevokeDiscount', () => Payments.RevokeDiscount());
	// testMsg('/payments.MsgEffectPayment', () => Payments.EffectPayment());
});

describe('Testing the Projects module', () => {
	// testMsg('/project.MsgCreateProject', () => Projects.CreateProject());
	// testMsg('/project.MsgUpdateProjectStatus', () => Projects.UpdateProjectStatus('CREATED'));
	// testMsg('/project.MsgUpdateProjectStatus', () => Projects.UpdateProjectStatus('PENDING'));
	// testMsg('/project.MsgUpdateProjectDoc', () => Projects.UpdateProjectDoc());
	// Need to fecth other addresses for project to fund
	// sendFromFaucet(WalletUsers.project);
	// testMsg('/project.MsgCreateAgent', () => Projects.CreateAgent());
	// testMsg('/project.MsgUpdateAgent', () => Projects.UpdateAgent());
	// testMsg('/project.MsgUpdateProjectStatus', () => Projects.UpdateProjectStatus('FUNDED'));
	// testMsg('/project.MsgUpdateProjectStatus', () => Projects.UpdateProjectStatus('STARTED'));
	// testMsg('/project.MsgCreateClaim', () => Projects.CreateClaim());
	// testMsg('/project.MsgCreateEvaluation', () => Projects.CreateEvaluation());
	// testMsg('/project.MsgWithdrawFunds', () => Projects.WithdrawFunds());
});

describe('Testing the Bonds module', () => {
	// testMsg('/bonds.MsgCreateBond', () => Bond.CreateBond());
	// testMsg('/bonds.MsgEditBond', () => Bond.EditBond());
	// Buy one token first to hatch bond
	// testMsg('/bonds.MsgBuy', () => Bond.Buy(1));
	// testMsg('/bonds.MsgBuy', () => Bond.Buy(20000));
	// testMsg('/bonds.MsgSetNextAlpha', () => Bond.SetNextAlpha('520000000000000000'));
	// testMsg('/bonds.MsgMakeOutcomePayment', () => Bond.MakeOutcomePayment(1000));
	// testMsg('/bonds.MsgUpdateBondState', () => Bond.UpdateBondState('SETTLE'));
	// testMsg('/bonds.MsgWithdrawShare', () => Bond.WithdrawShare());
	// testMsg('/bonds.MsgWithdrawReserve', () => Bond.WithdrawReserve(10)); // Not tested
	// testMsg('/bonds.MsgSell', () => Bond.Sell(10)); // Not tested
	// testMsg('/bonds.MsgSwap', () => Bond.Swap()); // Not tested
});
