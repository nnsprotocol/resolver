import { defineConfig, loadEnv } from "@wagmi/cli";
import { etherscan } from "@wagmi/cli/plugins";
import { goerli, mainnet } from "viem/chains";

export default defineConfig(() => {
  const env = loadEnv({
    mode: process.env.NODE_ENV,
    envDir: "../../",
  });
  return {
    out: "src/generated.ts",
    plugins: [
      etherscan({
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        apiKey: env.ETHERSCAN_API_KEY!,
        chainId: mainnet.id,
        contracts: [
          {
            name: "NNSENSReverseResolver",
            address: {
              [mainnet.id]: "0x849F92178950f6254db5D16D1ba265E70521aC1B",
              [goerli.id]: "0x551AdE51c28b67b66868D61125768d571D2bB8BA",
            },
          },
        ],
      }),
    ],
  };
});
