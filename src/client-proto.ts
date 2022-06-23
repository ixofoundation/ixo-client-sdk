import { fromBase64 } from "@cosmjs/encoding";
import { DirectSecp256k1HdWallet, Registry, decodeTxRaw, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes as defaultStargateTypes, SigningStargateClient, } from "@cosmjs/stargate";
import { MsgCreateAgent, MsgCreateProject, MsgUpdateProjectStatus, MsgUpdateAgent, MsgCreateClaim, MsgCreateEvaluation, MsgWithdrawFunds, MsgUpdateProjectDoc } from "./codec/project/tx";

const myRegistry = new Registry(defaultStargateTypes);
myRegistry.register("./proto/project/tx.proto", MsgCreateAgent);
myRegistry.register("./proto/project/tx.proto", MsgCreateProject);
myRegistry.register("./proto/project/tx.proto", MsgUpdateProjectStatus);
myRegistry.register("./proto/project/tx.proto", MsgCreateEvaluation);
myRegistry.register("./proto/project/tx.proto", MsgUpdateAgent);
myRegistry.register("./proto/project/tx.proto", MsgCreateClaim);
myRegistry.register("./proto/project/tx.proto", MsgWithdrawFunds);
myRegistry.register("./proto/project/tx.proto", MsgUpdateProjectDoc);


export async function initializesigner(Mnemonic: string): Promise<OfflineSigner> {

    const signer = await DirectSecp256k1HdWallet.fromMnemonic(Mnemonic, { prefix: "ixo" });

    return signer;
}

export async function initializeclient(signer: OfflineSigner): Promise<SigningStargateClient> {

    const client = await SigningStargateClient.connectWithSigner("my.endpoint.com rpc endppint", signer, { registry: myRegistry });

    return client;
}


export async function parseTx(tx: string, registry: Registry): Promise<any> {
    const decoded = decodeTxRaw(fromBase64(tx));
    const parsedData = [];
    for (const message of decoded.body.messages) {
        const decodedMsg = registry.decode(message);
        parsedData.push(decodedMsg);
    }
    return parsedData;
};






