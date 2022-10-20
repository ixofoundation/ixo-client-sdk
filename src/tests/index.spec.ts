import { assertIsDeliverTxSuccess } from '@cosmjs/stargate';
import { Buy, CreateBond, EditBond, MakeOutcomePayment, Sell, SetNextAlpha, Swap, UpdateBondState, WithdrawReserve, WithdrawShare } from './Bond';
import { AddCredential, AddDid } from './Dids';
import { CreatePaymentContract, CreatePaymentTemplate, CreateSubscription, EffectPayment, GrantDiscount, RevokeDiscount, SetPaymentContractAuthorization } from './Payments';
import { CreateAgent, CreateClaim, CreateEvaluation, CreateProject, UpdateAgent, UpdateProjectDoc, UpdateProjectStatus, WithdrawFunds } from './Projects';

// testing for dids
describe('Testing the Dids module', () => {
	// test('should return a created Did txhash', async () => {
	// 	expect(assertIsDeliverTxSuccess(await AddDid())).toBeTruthy();
	// });
	// test("should return a created Credential txhash", async () => {
	//   expect(assertIsDeliverTxSuccess(await AddCredential())).toBeTruthy();
	// });
});

// testing for projects
describe('Testing the Projects module', () => {
	test('should return a created project txhash', async () => {
		expect(assertIsDeliverTxSuccess(await CreateProject())).toBeTruthy();
	});
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
});

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
// describe("Testing the Payments module", () => {
//   test("should return a Payment Contract Auth txhash", async () => {
//     expect(
//       assertIsDeliverTxSuccess(await SetPaymentContractAuthorization())
//     ).toBeTruthy();
//   });
//   test("should return a payment template hash", async () => {
//     expect(
//       assertIsDeliverTxSuccess(await CreatePaymentTemplate())
//     ).toBeTruthy();
//   });
//   test("should return a payment contract hash", async () => {
//     expect(
//       assertIsDeliverTxSuccess(await CreatePaymentContract())
//     ).toBeTruthy();
//   });
//   test("should return a subscription hash", async () => {
//     expect(assertIsDeliverTxSuccess(await CreateSubscription())).toBeTruthy();
//   });
//   test("should return a grant discount txhash", async () => {
//     expect(assertIsDeliverTxSuccess(await GrantDiscount())).toBeTruthy();
//   });
//   test("should return a revoke discount txhash", async () => {
//     expect(assertIsDeliverTxSuccess(await RevokeDiscount())).toBeTruthy();
//   });
//   test("should return a effect payment txhash", async () => {
//     expect(assertIsDeliverTxSuccess(await EffectPayment())).toBeTruthy();
//   });
// });
