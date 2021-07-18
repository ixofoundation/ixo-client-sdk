const
    base58 = require('bs58'),
    sovrin = require('sovrin-did'),
    {sha256} = require('@cosmjs/crypto'),
    {toBase64, Bech32} = require('@cosmjs/encoding'),
    {serializeSignDoc} = require('@cosmjs/amino')


/* @returns OfflineAminoSigner: https://github.com/cosmos/cosmjs/blob/98e91ae5fe699733497befef95204923c93a7373/packages/amino/src/signer.ts#L22-L38 */// eslint-disable-line max-len
const makeAgentWallet = (
    mnemonic,
    didDoc = sovrin.fromSeed(sha256(mnemonic).slice(0, 32)),
) => ({
    mnemonic,
    didDoc,
    did: 'did:ixo:' + didDoc.did,

    async getAccounts() {
        return [
            {
                algo: 'ed25519',
                pubkey: Uint8Array.from(base58.decode(didDoc.verifyKey)),
                address: Bech32.encode(
                    'ixo',
                    sha256(base58.decode(didDoc.verifyKey)).slice(0, 20),
                ),
            },
        ]
    },

    async signAmino(signerAddress, signDoc) {
        const account =
            (await this.getAccounts())
                .find(({address}) => address === signerAddress)

        if (!account)
            throw new Error(`Address ${signerAddress} not found in wallet`)

        const
            fullSignature =
                sovrin.signMessage(
                    serializeSignDoc(signDoc),
                    didDoc.secret.signKey,
                    didDoc.verifyKey,
                ),

            signatureBase64 =
                toBase64(fullSignature.slice(0, 64))

        return {
            signed: signDoc,

            signature: {
                signature: signatureBase64,

                pub_key: {
                    type: 'tendermint/PubKeyEd25519',
                    value:
                        base58.decode(didDoc.encryptionPublicKey)
                            .toString('base64'),
                },
            },
        }
    },
})


module.exports = makeAgentWallet
