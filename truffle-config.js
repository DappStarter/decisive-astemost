require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain common inner clock forward trap'; 
let testAccounts = [
"0x6d6533db9669c30c25c1878c61c496bc0883971518cbeae35e85b9248b76a6cd",
"0xa3f464be010e39385cb6c11344ac1fa4816a850f55e16b59dd4cdffdbe5a6237",
"0x8ea9a4d24a51c0bdaae05e8c48fd9712a503bb46254059633e35e1f885544c8a",
"0xd10953740dea851fd91c3ca59edc98cd3cd59a83437e3acb2e53ad6d9e1d7ecf",
"0x492eceb92f2ecc78f7b06a516553d55810ded1417813a26a269e0d1c194e1144",
"0x5d3319890d7c54a3b2849aa70472bd95b01795365a0e612e2c018bc26f50f3d1",
"0x4ae09261243f2253a8f405e562af79d68f157e68193c441e29efaf605fc6e7b2",
"0x54a5fbf14899f8f8f0c3d759eb64f5feed86727cc10f2d87d6d32cf5990a7d7d",
"0xdd76d848cdb39b3e4481c8bd61a15f88abee52b18fb5bab529411ab42600a60d",
"0x3205a2e751cf6ed67cab0c71ec85b851a51c050ea5b852dde115081387c98df1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
