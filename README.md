# NNS Protocol Resolver `.⌐◨-◨`

Welcome to the NNS Protocol Resolver! This package suite allows seamless integration of NNS resolvers into your website, enabling you to resolve `.⌐◨-◨` domains effortlessly. Our tools are a natural extension of the [ENS registry](https://ens.domains/), adapted for the unique requirements of the NNS ecosystem.

## Packages 📦

Currently, we offer distinct packages tailored for different use cases and tech stacks:

- **[@nnsprotocol/resolver-wagmi](https://google.com)**: A comprehensive package designed for projects utilizing [wagmi](https://wagmi.sh).
<!-- - **[@nnsprotocol/resolver-ethers](https://google.com)**: A specialized package for projects leveraging [ethers.js v6](https://docs.ethers.org/v6/). -->

You can find examples for each package in the respective `examples` folder, providing you with a quick start guide to integrating NNS resolution into your applications.

If you need integrations with different libraries, submit an issue and we can help you out!

## Features 🌟

- **Flexible Resolution**: Seamlessly resolve `.⌐◨-◨` domains with the option to fall back to `.eth` domains.
- **Efficient Contract Calls**: Utilize `NNSENSReverseResolver` to resolve addresses in a single call, optimizing performance and cost.
- **React Integration**: Example code available for integrations with wagmi and ethers.js

## Getting Started 🚀

To begin resolving `.⌐◨-◨` domains with the NNS Resolver, choose your favorite library and visit the dedicated package README:

- [**@nnsprotocol/resolver-wagmi**](./packages/resolver-wagmi/README.md): Detailed instructions and examples for integrating with wagmi-based projects.
<!-- - [**@nnsprotocol/resolver-ethers**](./packages/resolver-ethers/README.md): Comprehensive guide and examples for using the resolver with ethers.js. -->

Each package README provides specific steps to install dependencies, integrate the resolver into your project, and run examples to see the resolver in action.

## How does it work?

The resolution mechanism of `.⌐◨-◨` domains is a pivotal feature provided by the NNS registry, a system rooted in the structure of the well-established ENS registry. This compatibility ensures a familiar integration, while also introducing specialized functionalities tailored to the NNS domain structure.

### Direct Resolution of `.⌐◨-◨` Domains

The direct resolution of `.⌐◨-◨` is the process of resolving the `.⌐◨-◨` name for a given address. Due to the similarities between ENS and NNS, this is achieved by simply switching the address of the ENS registry to the NNS registry within the resolver's configuration. Unfortunately most libraries don't allow changing the ENS registry or make it difficult to do so. Moreover, most applications who integrate with the NNS registry, want to keep a fallback to `.eth` names resulting in an increased number of requests.

### Optimized Resolution via Resolver Contract

Acknowledging the necessity for efficiency, particularly in terms of speed and cost, the resolution process is further refined through the `NNSENSReverseResolver` contract. This contract encapsulates the logic for both NNS and ENS registries in a single call. It first attempts to resolve an address in the NNS registry; if unsuccessful, it proceeds to check the ENS registry. This singular, streamlined call significantly cuts down the operational overhead, marking it very easy to perform a reverse lookup of an address on both registry.

### NNSENSReverseResolver

The contract is deployed at the following addresses:
- [0x849F92178950f6254db5D16D1ba265E70521aC1B](https://etherscan.io/address/0x849F92178950f6254db5D16D1ba265E70521aC1B) on Mainnet
- [0x551AdE51c28b67b66868D61125768d571D2bB8BA](https://goerli.etherscan.io/address/0x551AdE51c28b67b66868D61125768d571D2bB8BA) on Goerli
