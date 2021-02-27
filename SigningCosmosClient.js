const {SigningCosmosClient} = require('@cosmjs/launchpad')


class SigningCosmosClientImproved extends SigningCosmosClient {
    async signAndBroadcast(...props) {
        const resp = await super.signAndBroadcast(...props)

        if (resp.code)
            throw resp

        return resp
    }
}


module.exports = SigningCosmosClientImproved
