const
    base58 = require('bs58'),
    sovrin = require('sovrin-did'),
    {Secp256k1HdWallet, serializeSignDoc} = require('@cosmjs/amino'),
    {EnglishMnemonic,
        pathToString, stringToPath, sha256} = require('@cosmjs/crypto'),
    {toBase64, Bech32} = require('@cosmjs/encoding')


const makeWallet = async (src, didPrefix = 'did:ixo:') => {
    let secp, agent

    if (typeof src === 'object') {
        ({secp, agent} = fromSerializableWallet(src))

    } else {
        secp = await (
            src
                ?  Secp256k1HdWallet.fromMnemonic(src, {prefix: 'ixo'})
                :  Secp256k1HdWallet.generate(12, {prefix: 'ixo'})
                // See note [1]
        )

        agent = await makeAgentWallet(secp.mnemonic, undefined, didPrefix)
    }

    const toJSON = () => toSerializableWallet({secp, agent})

    return {secp, agent, toJSON}
}

const toSerializableWallet = w => ({
    secp: {
        mnemonic: w.secp.mnemonic,
        seed: base58.encode(w.secp.seed),
        accounts: w.secp.accounts.map(a => ({
            ...a,
            hdPath: pathToString(a.hdPath),
        })),
    },
    agent: {
        mnemonic: w.agent.mnemonic,
        didPrefix: w.agent.didPrefix,
        didDoc: w.agent.didDoc,
    },
})

const fromSerializableWallet = s => ({
    secp: new Secp256k1HdWallet(
        s.secp.mnemonic && new EnglishMnemonic(s.secp.mnemonic),

        {
            seed: Uint8Array.from(base58.decode(s.secp.seed)),
            prefix: s.secp.accounts[0].prefix,
            hdPaths: s.secp.accounts.map(a => stringToPath(a.hdPath)),
        },
    ),

    agent: makeAgentWallet(s.agent.mnemonic, s.agent.didDoc, s.agent.didPrefix),
})

/* @returns OfflineAminoSigner: https://github.com/cosmos/cosmjs/blob/98e91ae5fe699733497befef95204923c93a7373/packages/amino/src/signer.ts#L22-L38 */// eslint-disable-line max-len
const makeAgentWallet = (
    mnemonic,
    didDoc = sovrin.fromSeed(sha256(mnemonic).slice(0, 32)),
    didPrefix = 'did:ixo:',
) => ({
    mnemonic,
    didDoc,
    didPrefix,
    did: didPrefix + didDoc.did,

    async getAccounts() {
        return [
            {
                algo: 'ed25519-sha-256',
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
                    value: base58.decode(didDoc.verifyKey).toString('base64'),
                },
            },
        }
    },
})


module.exports = makeWallet


// Notes
//
// [1]: The prefix parameters here are not to be confused with the "didPrefix'
//      parameter of this "makeWallet" function. The prefixes used in the
//      Secp256k1HdWallet constructor functions are prefixes for cosmos wallet
//      addresses while the did prefix is the prefix of the did address.
