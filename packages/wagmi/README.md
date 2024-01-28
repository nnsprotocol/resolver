# @nnsprotocol/resolver-wagmi `.⌐◨-◨`

Welcome to `@nnsprotocol/resolver-wagmi`, your go-to package for resolving NNS names `.⌐◨-◨` directly in your application using wagmi. Our package provides a simple and intuitive API, closely aligned with wagmi's design principles, making domain resolution a breeze in your React applications.

## Features 🌟

- **Simple & Familiar API**: Seamlessly integrate with your existing wagmi setup.
- **One React Hook**: Use `useNnsName` to resolve NNS names without any hassle.
- **Automated Fallback**: Don't worry about unresolved names; we automatically fall back to `.eth` names.
- **Wagmi 2**: Compatible with the latest wagmi 2.

## Installation Guide 📦

Get started with `@nnsprotocol/resolver-wagmi` by installing the package using your preferred package manager:

```bash
npm install @nnsprotocol/resolver-wagmi

yarn add @nnsprotocol/resolver-wagmi

pnpm add @nnsprotocol/resolver-wagmi

bun add @nnsprotocol/resolver-wagmi
```

## Usage Example 🛠️

Integrating `@nnsprotocol/resolver-wagmi` in your application is straightforward. Here's a basic example to get you started:

```ts
import { useNnsName } from '@nnsprotocol/resolver-wagmi'

function App() {
  const result = useNnsName({
    address: "0x543D53d6f6d15adB6B6c54ce2C4c28a5f2cCb036"
  })

  // Access the resolved data
  console.log(result.data)
}

export default App;
```

In this example, `useNnsName` is a React hook that accepts an object with an `address` property. The hook takes care of resolving the NNS name associated with the given address and provides the result in `result.data`.

## Try It Yourself ✨

Ready to dive in? You can find this example in [examples/wagmi](../../examples/wagmi) and see how `@nnsprotocol/resolver-wagmi` can fit into your project.

## Contribute 🤝

Contributions are always welcome! Feel free to submit issues or pull requests if you have suggestions or improvements.

---

Start resolving NNS names with ease and bring a new level of functionality to your wagmi-powered applications with `@nnsprotocol/resolver-wagmi`. Happy coding! 🚀