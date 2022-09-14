import { assertIsDeliverTxSuccess } from "@cosmjs/stargate";
import { CreateBond } from "./Bond";
import { AddDid } from "./Dids";
import { SetPaymentContractAuthorization } from "./Payments";
import { CreateProject } from "./Projects";

// testing for bonds
describe("Bonds test", () => {
  test("should return a created bond txhash", async () => {
    expect(assertIsDeliverTxSuccess(await CreateBond())).toBeTruthy();
  });
});

// testing for dids
describe("Dids test", () => {
  test("should return a created Did txhash", async () => {
    expect(assertIsDeliverTxSuccess(await AddDid())).toBeTruthy();
  });
});

// testing for projects
describe("Projects test", () => {
  test("should return a created project txhash", async () => {
    expect(assertIsDeliverTxSuccess(await CreateProject())).toBeTruthy();
  });
});

// testing for payments
describe("Payments test", () => {
  test("should return a success", async () => {
    expect(
      assertIsDeliverTxSuccess(await SetPaymentContractAuthorization())
    ).toBeTruthy();
  });
});
