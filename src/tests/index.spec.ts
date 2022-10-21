import { assertIsDeliverTxSuccess, DeliverTxResponse } from '@cosmjs/stargate';
import { Buy, CreateBond, EditBond, MakeOutcomePayment, Sell, SetNextAlpha, Swap, UpdateBondState, WithdrawReserve, WithdrawShare } from './Bond';
import { BankSendTrx } from './Cosmos';
import { AddCredential, AddDid } from './Dids';
import { CreateEntity } from './Entity';
import { CreateIidDoc } from './Iid';
import { CreatePaymentContract, CreatePaymentTemplate, CreateSubscription, EffectPayment, GrantDiscount, RevokeDiscount, SetPaymentContractAuthorization } from './Payments';
import { CreateAgent, CreateClaim, CreateEvaluation, CreateProject, UpdateAgent, UpdateProjectDoc, UpdateProjectStatus, WithdrawFunds } from './Projects';

const checkSuccess = (res: DeliverTxResponse) => {
	let isSuccess = true;
	try {
		assertIsDeliverTxSuccess(res);
	} catch (error) {
		console.log({ error });
		isSuccess = false;
	}
	expect(isSuccess).toBeTruthy();
};

// testing for cosmos modules
describe('Testing the cosmos bank module', () => {
	test('should return a send trx hash', async () => {
		checkSuccess(await BankSendTrx());
	});
});

// testing for iid
// describe('Testing the iid module', () => {
// 	test('should return a create iid doc hash', async () => {
// 		checkSuccess(await CreateIidDoc());
// 	});
// });

// testing for entity
// describe('Testing the entity module', () => {
// 	test('should return a create entity hash', async () => {
// 		checkSuccess(await CreateEntity());
// 	});
// });

// testing for projects
// describe('Testing the Projects module', () => {
// test('should return a created project txhash', async () => {
// 	expect(assertIsDeliverTxSuccess(await CreateProject())).toBeTruthy();
// });
// test("should return a updated project txhash", async () => {
//   expect(assertIsDeliverTxSuccess(await UpdateProjectStatus())).toBeTruthy();
// });
// test("should return a created agent txhash", async () => {
//   expect(assertIsDeliverTxSuccess(await CreateAgent())).toBeTruthy();
// });
// test("should return a updated project txhash", async () => {
//   expect(assertIsDeliverTxSuccess(await UpdateAgent())).toBeTruthy();
// });
// test("should return a created claim txhash", async () => {
//   expect(assertIsDeliverTxSuccess(await CreateClaim())).toBeTruthy();
// });
// test("should return a created evaluation txhash", async () => {
//   expect(assertIsDeliverTxSuccess(await CreateEvaluation())).toBeTruthy();
// });
// test("should return a withdrawFunds txhash", async () => {
//   expect(assertIsDeliverTxSuccess(await WithdrawFunds())).toBeTruthy();
// });
// test("should return a updated projectDoc txhash", async () => {
//   expect(assertIsDeliverTxSuccess(await UpdateProjectDoc())).toBeTruthy();
// });
// });

// testing for bonds
// describe("Testing the Bonds module", () => {
//   test("should return a created bond txhash", async () => {
//     expect(assertIsDeliverTxSuccess(await CreateBond())).toBeTruthy();
//   });
//   test("should return a edited bond txhash", async () => {
//     expect(assertIsDeliverTxSuccess(await EditBond())).toBeTruthy();
//   });
//   test("should return a alpha txhash", async () => {
//     expect(assertIsDeliverTxSuccess(await SetNextAlpha())).toBeTruthy();
//   });
//   test("should return a updated bond txhash", async () => {
//     expect(assertIsDeliverTxSuccess(await UpdateBondState())).toBeTruthy();
//   });
//   test("should return a buy txhash", async () => {
//     expect(assertIsDeliverTxSuccess(await Buy())).toBeTruthy();
//   });
//   test("should return a sell txhash", async () => {
//     expect(assertIsDeliverTxSuccess(await Sell())).toBeTruthy();
//   });
//   test("should return a swap txhash", async () => {
//     expect(assertIsDeliverTxSuccess(await Swap())).toBeTruthy();
//   });
//   test("should return a Outcome Payment txhash", async () => {
//     expect(assertIsDeliverTxSuccess(await MakeOutcomePayment())).toBeTruthy();
//   });
//   test("should return a Withdraw share txhash", async () => {
//     expect(assertIsDeliverTxSuccess(await WithdrawShare())).toBeTruthy();
//   });
//   test("should return a Withdraw reserve txhash", async () => {
//     expect(assertIsDeliverTxSuccess(await WithdrawReserve())).toBeTruthy();
//   });
// });

// testing for payments
// describe('Testing the Payments module', () => {
// test('should return a Payment Contract Auth txhash', async () => {
// 	expect(assertIsDeliverTxSuccess(await SetPaymentContractAuthorization())).toBeTruthy();
// });
// test('should return a payment template hash', async () => {
// 	checkSuccess(await CreatePaymentTemplate());
// });
// test('should return a payment contract hash', async () => {
// 	expect(assertIsDeliverTxSuccess(await CreatePaymentContract())).toBeTruthy();
// });
// test('should return a subscription hash', async () => {
// 	expect(assertIsDeliverTxSuccess(await CreateSubscription())).toBeTruthy();
// });
// test('should return a grant discount txhash', async () => {
// 	expect(assertIsDeliverTxSuccess(await GrantDiscount())).toBeTruthy();
// });
// test('should return a revoke discount txhash', async () => {
// 	expect(assertIsDeliverTxSuccess(await RevokeDiscount())).toBeTruthy();
// });
// test('should return a effect payment txhash', async () => {
// 	expect(assertIsDeliverTxSuccess(await EffectPayment())).toBeTruthy();
// });
// });
