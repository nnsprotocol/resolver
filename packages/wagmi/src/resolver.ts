import type { UseQueryResult } from "@tanstack/react-query";
import type { Address, BlockTag } from "viem";
import { useChainId, useReadContract } from "wagmi";
import { nnsensReverseResolverAbi, nnsensReverseResolverAddress } from "./generated";

interface UseNnsNameArgs {
  address?: Address;
  blockNumber?: bigint;
  blockTag?: BlockTag;
  chainId?: number;
}

export type UseNnsNameReturnType = UseQueryResult<string | null>;

function getAddress(chainId: number, addresses: Record<number, Address>): Address | undefined {
  return addresses[chainId];
}

/** Hooks for getting the NNS name falling back to ENS. */
export const useNnsName = (args: UseNnsNameArgs) => {
  const chainId = useChainId();
  return useReadContract({
    abi: nnsensReverseResolverAbi,
    address: getAddress(args?.chainId || chainId, nnsensReverseResolverAddress),
    functionName: "resolve",
    args: args.address ? [args.address] : undefined,
    blockNumber: args.blockNumber,
    blockTag: args.blockTag,
    query: {
      enabled: Boolean(args.address),
    },
  });
};
