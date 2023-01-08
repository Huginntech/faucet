
import { stringToPath } from '@cosmjs/crypto'

export default {
    port: 90, // http port 
    db: {
        path: "./db/faucet.db" // save request states 
    },
    project: {
        name: "Quicksilver Mainnet",
        logo: "https://i.hizliresim.com/k2aoark.png",
        deployer: `<a href="https://huginn.tech">Huginn</a>`
    },
    blockchain: {
        // make sure that CORS is enabled in rpc section in config.toml
        // cors_allowed_origins = ["*"]
        rpc_endpoint: "https://rpc-quicksilver.huginn.tech",

    },
    sender: {
        mnemonic: "airport tonight retreat outer describe flock enhance unable caution tide glance drop odor refuse omit once scrub rare involve deposit scheme warrior eagle venue",
        option: {
            hdPaths: [stringToPath("m/44'/118'/0'/0/0")],
            prefix: "quick"
        }
    },
    tx: {
        amount: {
            denom: "uqck",
            amount: "50"
        },
        fee: {
            amount: [
                {
                    amount: "0",
                    denom: "uqck"
                }
            ],
            gas: "200000"
        },
    },
    limit: {
        // how many times each wallet address is allowed in a window(24h)
        address: 1, 
        // how many times each ip is allowed in a window(24h),
        // if you use proxy, double check if the req.ip is return client's ip.
        ip: 1000 
    }
}
