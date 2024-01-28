import { http, createConfig } from "wagmi";
import { goerli, mainnet } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [mainnet, goerli],
  connectors: [injected()],
  transports: {
    [mainnet.id]: http(),
    [goerli.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
