import { testMsg } from './constants';
import * as Bond from './Bond';
import * as Cosmos from './Cosmos';
import * as Entity from './Entity';
import * as Iid from './Iid';
import * as Payments from './Payments';
import * as Projects from './Projects';

// describe('Testing the cosmos bank module', () => {
// 	testMsg('/cosmos.bank.v1beta1.MsgSend', Cosmos.BankSendTrx);
// });

describe('Testing the iid module', () => {
	// testMsg('/iid.MsgCreateIidDocument', Iid.CreateIidDoc);
	// testMsg('/iid.MsgUpdateIidDocument', Iid.UpdateIidDoc);
	// testMsg('/iid.MsgUpdateIidMeta', Iid.UpdateIidMeta);
	// testMsg('/iid.MsgAddIidContext', Iid.AddIidContext);
	// testMsg('/iid.MsgDeleteIidContext', Iid.DeleteIidContext);
	// testMsg('/iid.MsgAddVerification', Iid.AddVerification);
	// testMsg('/iid.MsgSetVerificationRelationships', Iid.SetVerificationRelationships);
	// testMsg('/iid.MsgRevokeVerification', Iid.RevokeVerification);
	// testMsg('/iid.MsgAddAccordedRight', Iid.AddAccordedRight);
	// testMsg('/iid.MsgDeleteAccordedRight', Iid.DeleteAccordedRight);
	// testMsg('/iid.MsgAddController', Iid.AddController);
	// testMsg('/iid.MsgDeleteController', Iid.DeleteController);
	// testMsg('/iid.MsgAddLinkedEntity', Iid.AddLinkedEntity);
	// testMsg('/iid.MsgDeleteLinkedEntity', Iid.DeleteLinkedEntity);
	// testMsg('/iid.MsgAddLinkedResource', Iid.AddLinkedResource);
	// testMsg('/iid.MsgDeleteLinkedResource', Iid.DeleteLinkedResource);
	// testMsg('/iid.MsgAddService', Iid.AddService);
	// testMsg('/iid.MsgDeleteService', Iid.DeleteService);
});

describe('Testing the entity module', () => {
	// testMsg('/entity.MsgCreateEntity', Entity.CreateEntity);
	// 	testMsg('/entity.MsgTransferEntity', Entity.TransferEntity);
	// 	testMsg('/entity.MsgUpdateEntity', Entity.UpdateEntity);
	// 	testMsg('/entity.MsgUpdateEntityConfig', Entity.UpdateConfigEntity);
});

describe('Testing the Projects module', () => {
	//  Broadcasting transaction failed with code 4 (codespace: ixo.lib.legacydid). Log: did not deducable from pubKey; expected: RYNx46QArfcySVLxs3Ump received: BPnJs1wMTHbQgFQhJUYsBM: did pubKey mismatch
	// testMsg('/project.MsgCreateProject', Projects.CreateProject);
	// 	testMsg('/project.MsgUpdateProjectStatus', Projects.UpdateProjectStatus);
	// 	testMsg('/project.MsgCreateAgent', Projects.CreateAgent);
	// 	testMsg('/project.MsgUpdateAgent', Projects.UpdateAgent);
	// 	testMsg('/project.MsgCreateClaim', Projects.CreateClaim);
	// 	testMsg('/project.MsgCreateEvaluation', Projects.CreateEvaluation);
	// 	testMsg('/project.MsgWithdrawFunds', Projects.WithdrawFunds);
	// 	testMsg('/project.MsgUpdateProjectDoc', Projects.UpdateProjectDoc);
});

describe('Testing the Bonds module', () => {
	// Broadcasting transaction failed with code 2 (codespace: sdk). Log: math/big: cannot unmarshal "1.000000000000000000" into a *big.Int: tx parse error
	// testMsg('/bonds.MsgCreateBond', Bond.CreateBond);
	// 	testMsg('/bonds.MsgEditBond', Bond.EditBond);
	// 	testMsg('/bonds.MsgSetNextAlpha', Bond.SetNextAlpha);
	// 	testMsg('/bonds.MsgUpdateBondState', Bond.UpdateBondState);
	// 	testMsg('/bonds.MsgBuy', Bond.Buy);
	// 	testMsg('/bonds.MsgSell', Bond.Sell);
	// 	testMsg('/bonds.MsgSwap', Bond.Swap);
	// 	testMsg('/bonds.MsgMakeOutcomePayment', Bond.MakeOutcomePayment);
	// 	testMsg('/bonds.MsgWithdrawShare', Bond.WithdrawShare);
	// 	testMsg('/bonds.MsgWithdrawReserve', Bond.WithdrawReserve);
});

describe('Testing the Payments module', () => {
	// testMsg('/payments.MsgCreatePaymentTemplate', Payments.CreatePaymentTemplate);
	// Fails from here: Broadcasting transaction failed with code 3 (codespace: payments). Log: payment distribution percentages should add up to 100
	// testMsg('/payments.MsgCreatePaymentContract', Payments.CreatePaymentContract);
	// 	testMsg('/payments.MsgSetPaymentContractAuthorisation', Payments.SetPaymentContractAuthorization);
	// 	testMsg('/payments.MsgCreateSubscription', Payments.CreateSubscription);
	// 	testMsg('/payments.MsgGrantDiscount', Payments.GrantDiscount);
	// 	testMsg('/payments.MsgRevokeDiscount', Payments.RevokeDiscount);
	// 	testMsg('/payments.MsgEffectPayment', Payments.EffectPayment);
});
