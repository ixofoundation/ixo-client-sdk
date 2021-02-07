const
    base58 = require('bs58'),
    sovrin = require('sovrin-did'),
    {EnglishMnemonic, sha256} = require('@cosmjs/crypto'),
    {toBase64, Bech32} = require('@cosmjs/encoding'),
    {Secp256k1HdWallet, makeCosmoshubPath, serializeSignDoc} =
        require('@cosmjs/launchpad')


class IxoAgentWallet extends Secp256k1HdWallet {
    constructor(
        mnemonic, hdPath, privkey, pubkey, signkey, verifykey, did, prefix,
    ) {
        super(mnemonic, hdPath, privkey, pubkey, prefix)
        Object.assign(this, {signkey, verifykey, did})
    }

    static async fromMnemonic(
        mnemonic, hdPath = makeCosmoshubPath(0), prefix = 'ixo',
    ) {
        const
            mnemonicChecked = new EnglishMnemonic(mnemonic),
            didDoc = sovrin.fromSeed(sha256(mnemonic).slice(0, 32))

        return new this(
            mnemonicChecked,
            hdPath,
            didDoc.secret.encryptionPrivateKey,
            didDoc.encryptionPublicKey,
            didDoc.secret.signKey,
            didDoc.verifyKey,
            didDoc.did,
            prefix,
        )
    }

    get address() {
        return Bech32.encode(
            this.accounts[0].prefix,
            sha256(base58.decode(this.verifykey)).slice(0, 20),
        )
    }

    async getAccounts() {
        return [
            {
                algo: 'ed25519',
                address: this.address,
                pubkey: this.pubkey,
                verifykey: this.verifykey,
            },
        ]
    }

    async sign(signerAddress, signDoc) {
        if (signerAddress !== this.address)
            throw new Error(`Address ${signerAddress} not found in wallet`)

        const
            fullSignature =
                sovrin.signMessage(
                    serializeSignDoc(signDoc), this.signkey, this.verifykey),

            signatureBase64 =
                toBase64(fullSignature.slice(0, 64))

        return {
            signed: signDoc,

            signature: {
                signature: signatureBase64,

                pub_key: {
                    type: 'tendermint/PubKeyEd25519',
                    value: base58.decode(this.pubkey).toString('base64'),
                },
            },
        }
    }
}


module.exports = IxoAgentWallet
