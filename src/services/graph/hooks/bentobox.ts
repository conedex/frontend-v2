import { ChainId, CurrencyAmount, Token } from '@conedex/core-sdkv2'
import { Feature } from 'app/enums'
import { featureEnabled } from 'app/functions/feature'
import {
  getBentoBox,
  getBentoStrategies,
  getBentoTokens,
  getBentoUserTokens,
  getClones,
} from 'app/services/graph/fetchers'
import stringify from 'fast-json-stable-stringify'
import useSWR from 'swr'

import { GraphProps } from '../interfaces'

// @ts-ignore TYPE NEEDS FIXING
export function useClones({ chainId, shouldFetch = true, swrConfig = undefined }) {
  const { data } = useSWR(shouldFetch ? () => ['clones', chainId] : null, (_, chainId) => getClones(chainId), swrConfig)
  return data
}

export function useBentoBox({ chainId = ChainId.ETHEREUM, variables, shouldFetch = true, swrConfig }: GraphProps) {
  const { data } = useSWR(
    shouldFetch ? ['bentoBox', chainId, stringify(variables)] : null,
    () => getBentoBox(chainId, variables),
    swrConfig
  )

  return data
}

// subset of tokens, not strategies
export function useBentoStrategies({
  chainId = ChainId.ETHEREUM,
  variables,
  shouldFetch = featureEnabled(Feature.BENTOBOX, chainId),
  swrConfig = undefined,
}: GraphProps) {
  const { data } = useSWR<Awaited<ReturnType<typeof getBentoStrategies>>>(
    shouldFetch ? ['bentoStrategies', chainId, stringify(variables)] : null,
    () => getBentoStrategies(chainId, variables),
    swrConfig
  )

  return data
}

export function useBentoTokens({
  chainId,
  variables,
  // @ts-ignore TYPE NEEDS FIXING
  shouldFetch = featureEnabled(Feature.BENTOBOX, chainId),
  swrConfig = undefined,
}: GraphProps) {
  const { data } = useSWR(
    shouldFetch ? ['bentoTokens', chainId, stringify(variables)] : null,
    () => getBentoTokens(chainId, variables),
    swrConfig
  )
  return data
}

export function useBentoUserTokens({
  chainId,
  variables,
  // @ts-ignore TYPE NEEDS FIXING
  shouldFetch = featureEnabled(Feature.BENTOBOX, chainId),
  swrConfig = undefined,
}: GraphProps) {
  return useSWR<CurrencyAmount<Token>[]>(
    shouldFetch ? ['bentoUserTokens', chainId, stringify(variables)] : null,
    () => getBentoUserTokens(chainId, variables),
    swrConfig
  )
}
