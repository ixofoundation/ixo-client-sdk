import { Coin, CoinSDKType } from "../cosmos/coin";
import { Any, AnySDKType } from "../google/protobuf/any";
import { Duration, DurationSDKType } from "../google/protobuf/duration";
import { Timestamp } from "../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long, toTimestamp, fromTimestamp } from "../helpers";
/** PaymentTemplate contains details about a payment, with no info about the payer or payee. */

export interface PaymentTemplate {
  id: string;
  paymentAmount: Coin[];
  paymentMinimum: Coin[];
  paymentMaximum: Coin[];
  discounts: Discount[];
}
/** PaymentTemplate contains details about a payment, with no info about the payer or payee. */

export interface PaymentTemplateSDKType {
  id: string;
  payment_amount: CoinSDKType[];
  payment_minimum: CoinSDKType[];
  payment_maximum: CoinSDKType[];
  discounts: DiscountSDKType[];
}
/** Discount contains details about a discount which can be granted to payers. */

export interface Discount {
  id: string;
  percent: string;
}
/** Discount contains details about a discount which can be granted to payers. */

export interface DiscountSDKType {
  id: string;
  percent: string;
}
/** DistributionShare specifies the share of a specific payment an address will receive. */

export interface DistributionShare {
  address: string;
  percentage: string;
}
/** DistributionShare specifies the share of a specific payment an address will receive. */

export interface DistributionShareSDKType {
  address: string;
  percentage: string;
}
/**
 * PaymentContract specifies an agreement between a payer and payee/s which can be invoked
 * once or multiple times to effect payment/s.
 */

export interface PaymentContract {
  id: string;
  paymentTemplateId: string;
  creator: string;
  payer: string;
  recipients: DistributionShare[];
  cumulativePay: Coin[];
  currentRemainder: Coin[];
  canDeauthorise: boolean;
  authorised: boolean;
  discountId: string;
}
/**
 * PaymentContract specifies an agreement between a payer and payee/s which can be invoked
 * once or multiple times to effect payment/s.
 */

export interface PaymentContractSDKType {
  id: string;
  payment_template_id: string;
  creator: string;
  payer: string;
  recipients: DistributionShareSDKType[];
  cumulative_pay: CoinSDKType[];
  current_remainder: CoinSDKType[];
  can_deauthorise: boolean;
  authorised: boolean;
  discount_id: string;
}
/** Subscription specifies details of a payment to be effected periodically. */

export interface Subscription {
  id: string;
  paymentContractId: string;
  periodsSoFar: string;
  maxPeriods: string;
  periodsAccumulated: string;
  period?: Any;
}
/** Subscription specifies details of a payment to be effected periodically. */

export interface SubscriptionSDKType {
  id: string;
  payment_contract_id: string;
  periods_so_far: string;
  max_periods: string;
  periods_accumulated: string;
  period?: AnySDKType;
}
/**
 * BlockPeriod implements the Period interface and specifies a period in terms of number
 * of blocks.
 */

export interface BlockPeriod {
  periodLength: Long;
  periodStartBlock: Long;
}
/**
 * BlockPeriod implements the Period interface and specifies a period in terms of number
 * of blocks.
 */

export interface BlockPeriodSDKType {
  period_length: Long;
  period_start_block: Long;
}
/** TimePeriod implements the Period interface and specifies a period in terms of time. */

export interface TimePeriod {
  periodDurationNs?: Duration;
  periodStartTime?: Date;
}
/** TimePeriod implements the Period interface and specifies a period in terms of time. */

export interface TimePeriodSDKType {
  period_duration_ns?: DurationSDKType;
  period_start_time?: Date;
}
/**
 * TestPeriod implements the Period interface and is identical to BlockPeriod, except it
 * ignores the context in periodEnded() and periodStarted().
 */

export interface TestPeriod {
  periodLength: Long;
  periodStartBlock: Long;
}
/**
 * TestPeriod implements the Period interface and is identical to BlockPeriod, except it
 * ignores the context in periodEnded() and periodStarted().
 */

export interface TestPeriodSDKType {
  period_length: Long;
  period_start_block: Long;
}

function createBasePaymentTemplate(): PaymentTemplate {
  return {
    id: "",
    paymentAmount: [],
    paymentMinimum: [],
    paymentMaximum: [],
    discounts: []
  };
}

export const PaymentTemplate = {
  encode(message: PaymentTemplate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    for (const v of message.paymentAmount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.paymentMinimum) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.paymentMaximum) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.discounts) {
      Discount.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentTemplate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentTemplate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.paymentAmount.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.paymentMinimum.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.paymentMaximum.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.discounts.push(Discount.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PaymentTemplate>): PaymentTemplate {
    const message = createBasePaymentTemplate();
    message.id = object.id ?? "";
    message.paymentAmount = object.paymentAmount?.map(e => Coin.fromPartial(e)) || [];
    message.paymentMinimum = object.paymentMinimum?.map(e => Coin.fromPartial(e)) || [];
    message.paymentMaximum = object.paymentMaximum?.map(e => Coin.fromPartial(e)) || [];
    message.discounts = object.discounts?.map(e => Discount.fromPartial(e)) || [];
    return message;
  }

};

function createBaseDiscount(): Discount {
  return {
    id: "",
    percent: ""
  };
}

export const Discount = {
  encode(message: Discount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.percent !== "") {
      writer.uint32(18).string(message.percent);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Discount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiscount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.percent = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Discount>): Discount {
    const message = createBaseDiscount();
    message.id = object.id ?? "";
    message.percent = object.percent ?? "";
    return message;
  }

};

function createBaseDistributionShare(): DistributionShare {
  return {
    address: "",
    percentage: ""
  };
}

export const DistributionShare = {
  encode(message: DistributionShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.percentage !== "") {
      writer.uint32(18).string(message.percentage);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DistributionShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistributionShare();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.percentage = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DistributionShare>): DistributionShare {
    const message = createBaseDistributionShare();
    message.address = object.address ?? "";
    message.percentage = object.percentage ?? "";
    return message;
  }

};

function createBasePaymentContract(): PaymentContract {
  return {
    id: "",
    paymentTemplateId: "",
    creator: "",
    payer: "",
    recipients: [],
    cumulativePay: [],
    currentRemainder: [],
    canDeauthorise: false,
    authorised: false,
    discountId: ""
  };
}

export const PaymentContract = {
  encode(message: PaymentContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.paymentTemplateId !== "") {
      writer.uint32(18).string(message.paymentTemplateId);
    }

    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }

    if (message.payer !== "") {
      writer.uint32(34).string(message.payer);
    }

    for (const v of message.recipients) {
      DistributionShare.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.cumulativePay) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.currentRemainder) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (message.canDeauthorise === true) {
      writer.uint32(64).bool(message.canDeauthorise);
    }

    if (message.authorised === true) {
      writer.uint32(72).bool(message.authorised);
    }

    if (message.discountId !== "") {
      writer.uint32(82).string(message.discountId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.paymentTemplateId = reader.string();
          break;

        case 3:
          message.creator = reader.string();
          break;

        case 4:
          message.payer = reader.string();
          break;

        case 5:
          message.recipients.push(DistributionShare.decode(reader, reader.uint32()));
          break;

        case 6:
          message.cumulativePay.push(Coin.decode(reader, reader.uint32()));
          break;

        case 7:
          message.currentRemainder.push(Coin.decode(reader, reader.uint32()));
          break;

        case 8:
          message.canDeauthorise = reader.bool();
          break;

        case 9:
          message.authorised = reader.bool();
          break;

        case 10:
          message.discountId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PaymentContract>): PaymentContract {
    const message = createBasePaymentContract();
    message.id = object.id ?? "";
    message.paymentTemplateId = object.paymentTemplateId ?? "";
    message.creator = object.creator ?? "";
    message.payer = object.payer ?? "";
    message.recipients = object.recipients?.map(e => DistributionShare.fromPartial(e)) || [];
    message.cumulativePay = object.cumulativePay?.map(e => Coin.fromPartial(e)) || [];
    message.currentRemainder = object.currentRemainder?.map(e => Coin.fromPartial(e)) || [];
    message.canDeauthorise = object.canDeauthorise ?? false;
    message.authorised = object.authorised ?? false;
    message.discountId = object.discountId ?? "";
    return message;
  }

};

function createBaseSubscription(): Subscription {
  return {
    id: "",
    paymentContractId: "",
    periodsSoFar: "",
    maxPeriods: "",
    periodsAccumulated: "",
    period: undefined
  };
}

export const Subscription = {
  encode(message: Subscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.paymentContractId !== "") {
      writer.uint32(18).string(message.paymentContractId);
    }

    if (message.periodsSoFar !== "") {
      writer.uint32(26).string(message.periodsSoFar);
    }

    if (message.maxPeriods !== "") {
      writer.uint32(34).string(message.maxPeriods);
    }

    if (message.periodsAccumulated !== "") {
      writer.uint32(42).string(message.periodsAccumulated);
    }

    if (message.period !== undefined) {
      Any.encode(message.period, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscription();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.paymentContractId = reader.string();
          break;

        case 3:
          message.periodsSoFar = reader.string();
          break;

        case 4:
          message.maxPeriods = reader.string();
          break;

        case 5:
          message.periodsAccumulated = reader.string();
          break;

        case 6:
          message.period = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Subscription>): Subscription {
    const message = createBaseSubscription();
    message.id = object.id ?? "";
    message.paymentContractId = object.paymentContractId ?? "";
    message.periodsSoFar = object.periodsSoFar ?? "";
    message.maxPeriods = object.maxPeriods ?? "";
    message.periodsAccumulated = object.periodsAccumulated ?? "";
    message.period = object.period !== undefined && object.period !== null ? Any.fromPartial(object.period) : undefined;
    return message;
  }

};

function createBaseBlockPeriod(): BlockPeriod {
  return {
    periodLength: Long.ZERO,
    periodStartBlock: Long.ZERO
  };
}

export const BlockPeriod = {
  encode(message: BlockPeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.periodLength.isZero()) {
      writer.uint32(8).int64(message.periodLength);
    }

    if (!message.periodStartBlock.isZero()) {
      writer.uint32(16).int64(message.periodStartBlock);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockPeriod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockPeriod();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.periodLength = (reader.int64() as Long);
          break;

        case 2:
          message.periodStartBlock = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BlockPeriod>): BlockPeriod {
    const message = createBaseBlockPeriod();
    message.periodLength = object.periodLength !== undefined && object.periodLength !== null ? Long.fromValue(object.periodLength) : Long.ZERO;
    message.periodStartBlock = object.periodStartBlock !== undefined && object.periodStartBlock !== null ? Long.fromValue(object.periodStartBlock) : Long.ZERO;
    return message;
  }

};

function createBaseTimePeriod(): TimePeriod {
  return {
    periodDurationNs: undefined,
    periodStartTime: undefined
  };
}

export const TimePeriod = {
  encode(message: TimePeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.periodDurationNs !== undefined) {
      Duration.encode(message.periodDurationNs, writer.uint32(10).fork()).ldelim();
    }

    if (message.periodStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.periodStartTime), writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimePeriod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimePeriod();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.periodDurationNs = Duration.decode(reader, reader.uint32());
          break;

        case 2:
          message.periodStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TimePeriod>): TimePeriod {
    const message = createBaseTimePeriod();
    message.periodDurationNs = object.periodDurationNs !== undefined && object.periodDurationNs !== null ? Duration.fromPartial(object.periodDurationNs) : undefined;
    message.periodStartTime = object.periodStartTime ?? undefined;
    return message;
  }

};

function createBaseTestPeriod(): TestPeriod {
  return {
    periodLength: Long.ZERO,
    periodStartBlock: Long.ZERO
  };
}

export const TestPeriod = {
  encode(message: TestPeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.periodLength.isZero()) {
      writer.uint32(8).int64(message.periodLength);
    }

    if (!message.periodStartBlock.isZero()) {
      writer.uint32(16).int64(message.periodStartBlock);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestPeriod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPeriod();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.periodLength = (reader.int64() as Long);
          break;

        case 2:
          message.periodStartBlock = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TestPeriod>): TestPeriod {
    const message = createBaseTestPeriod();
    message.periodLength = object.periodLength !== undefined && object.periodLength !== null ? Long.fromValue(object.periodLength) : Long.ZERO;
    message.periodStartBlock = object.periodStartBlock !== undefined && object.periodStartBlock !== null ? Long.fromValue(object.periodStartBlock) : Long.ZERO;
    return message;
  }

};