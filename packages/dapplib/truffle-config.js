require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net puppy install spread fortune typical'; 
let testAccounts = [
"0xba8011ae4da17c8515220650a2f3f7150ae7b6ea979b7bcdc6ab6a8e9743412e",
"0x5967f1e84172297f976ce2c0e2117db12ec47c8bae3053659bc4f06914a553e5",
"0x7d58503781388dfd35e99220fce6774ae8e23ed8c21c525965ecdd633ff04946",
"0x12f305d3f7f5b578055023440d025b49ffc6819d134dd673a0fdb2367b504573",
"0x45b4ebd5cb80555929ff8877098a434c12721bff8e640a3249d67d67aca236b4",
"0xfad4cfb63b840f74dce26bd9479c9d225aa3fedccc7cb6dbc0d9789337b5406c",
"0x1e070a6f75716e44e4c604e0b29386b6f97b0f62c38636517ff76831120de113",
"0xb5a0b274dc9abd8f6287a760c8a8cd2e0203dab02909f0c0da7183c37ab59890",
"0xb9ff78f1ce4dc021c666e3b18a0ae8e48cfdc4b027082e79e003a0bc4ff24b3b",
"0x3692cb978742b9c6622b9a14c6b759afc41572fe23ef94f2d94a9d130e8485dd"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

