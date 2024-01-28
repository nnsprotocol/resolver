//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NNSENSReverseResolver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x849F92178950f6254db5D16D1ba265E70521aC1B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x551AdE51c28b67b66868D61125768d571D2bB8BA)
 */
export const nnsensReverseResolverAbi = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [
      { name: "_nns", internalType: "address", type: "address" },
      { name: "_ens", internalType: "address", type: "address" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "ens",
    outputs: [{ name: "", internalType: "contract ENS", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "nns",
    outputs: [{ name: "", internalType: "contract ENS", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "addr", internalType: "address", type: "address" }],
    name: "resolve",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
] as const;

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x849F92178950f6254db5D16D1ba265E70521aC1B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x551AdE51c28b67b66868D61125768d571D2bB8BA)
 */
export const nnsensReverseResolverAddress = {
  1: "0x849F92178950f6254db5D16D1ba265E70521aC1B",
  5: "0x551AdE51c28b67b66868D61125768d571D2bB8BA",
} as const;

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x849F92178950f6254db5D16D1ba265E70521aC1B)
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x551AdE51c28b67b66868D61125768d571D2bB8BA)
 */
export const nnsensReverseResolverConfig = {
  address: nnsensReverseResolverAddress,
  abi: nnsensReverseResolverAbi,
} as const;
