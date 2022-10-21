import { Buy, CreateBond, EditBond, MakeOutcomePayment, Sell, SetNextAlpha, Swap, UpdateBondState, WithdrawReserve, WithdrawShare } from './Bond';
import { testMsg } from './constants';
import { BankSendTrx } from './Cosmos';
import { CreateEntity, TransferEntity, UpdateConfigEntity, UpdateEntity } from './Entity';
import { CreateIidDoc } from './Iid';
import { CreatePaymentContract, CreatePaymentTemplate, CreateSubscription, EffectPayment, GrantDiscount, RevokeDiscount, SetPaymentContractAuthorization } from './Payments';
import { CreateAgent, CreateClaim, CreateEvaluation, CreateProject, UpdateAgent, UpdateProjectDoc, UpdateProjectStatus, WithdrawFunds } from './Projects';

// describe('Testing the cosmos bank module', () => {
// 	testMsg('/cosmos.bank.v1beta1.MsgSend', BankSendTrx);
// });

// describe('Testing the iid module', () => {
// 	testMsg('/iid.MsgCreateIidDocument', CreateIidDoc);
// });

// describe('Testing the entity module', () => {
// 	testMsg('/entity.MsgCreateEntity', CreateEntity);
// 	testMsg('/entity.MsgTransferEntity', TransferEntity);
// 	testMsg('/entity.MsgUpdateEntity', UpdateEntity);
// 	testMsg('/entity.MsgUpdateEntityConfig', UpdateConfigEntity);
// });

describe('Testing the Projects module', () => {
	testMsg('/project.MsgCreateProject', CreateProject);
	// testMsg('/project.MsgUpdateProjectStatus', UpdateProjectStatus);
	// testMsg('/project.MsgCreateAgent', CreateAgent);
	// testMsg('/project.MsgUpdateAgent', UpdateAgent);
	// testMsg('/project.MsgCreateClaim', CreateClaim);
	// testMsg('/project.MsgCreateEvaluation', CreateEvaluation);
	// testMsg('/project.MsgWithdrawFunds', WithdrawFunds);
	// testMsg('/project.MsgUpdateProjectDoc', UpdateProjectDoc);
});

// describe('Testing the Bonds module', () => {
// 	testMsg('/bonds.MsgCreateBond', CreateBond);
// 	testMsg('/bonds.MsgEditBond', EditBond);
// 	testMsg('/bonds.MsgSetNextAlpha', SetNextAlpha);
// 	testMsg('/bonds.MsgUpdateBondState', UpdateBondState);
// 	testMsg('/bonds.MsgBuy', Buy);
// 	testMsg('/bonds.MsgSell', Sell);
// 	testMsg('/bonds.MsgSwap', Swap);
// 	testMsg('/bonds.MsgMakeOutcomePayment', MakeOutcomePayment);
// 	testMsg('/bonds.MsgWithdrawShare', WithdrawShare);
// 	testMsg('/bonds.MsgWithdrawReserve', WithdrawReserve);
// });

// describe('Testing the Payments module', () => {
// 	testMsg('/payments.MsgCreatePaymentTemplate', CreatePaymentTemplate);
// 	testMsg('/payments.MsgCreatePaymentContract', CreatePaymentContract);
// 	testMsg('/payments.MsgSetPaymentContractAuthorisation', SetPaymentContractAuthorization);
// 	testMsg('/payments.MsgCreateSubscription', CreateSubscription);
// 	testMsg('/payments.MsgGrantDiscount', GrantDiscount);
// 	testMsg('/payments.MsgRevokeDiscount', RevokeDiscount);
// 	testMsg('/payments.MsgEffectPayment', EffectPayment);
// });
