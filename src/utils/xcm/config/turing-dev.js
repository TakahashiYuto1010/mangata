
import BN from 'bn.js';

const WEIGHT_REF_TIME = new BN(1_000_000_000);
const WEIGHT_PROOF_SIZE = new BN(0);
const PARA_ID = 2114;
const NATIVE_TOKEN = 'TUR';

const assets = [
  {
    symbol: NATIVE_TOKEN,
    decimals: 10,
    feePerSecond: new BN('416000000000'),
  },
  {
      symbol: 'DEV',
      decimals: 18,
      feePerSecond: new BN('10000000000000000000'),
  },
  {
      symbol: 'MGR',
      decimals: 18,
      feePerSecond: new BN('416000000000'),
  },
  {
      symbol: 'SBY',
      decimals: 18,
      feePerSecond: new BN('416000000000'),
  },
];

const Config = {
  name: 'Turing Dev',
  key: 'turing-dev',
  endpoint: 'ws://127.0.0.1:9946',
  relayChain: 'rococo-dev',
  paraId: PARA_ID,
  ss58: 51,
  assets,
  instructionWeight: { refTime: WEIGHT_REF_TIME, proofSize: WEIGHT_PROOF_SIZE },
  symbol: NATIVE_TOKEN,
};

export default Config;
