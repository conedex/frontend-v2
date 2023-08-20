import { ChainId, Currency } from '@conedex/core-sdkv2'

export function currencyId(currency: Currency): string {
  if ([ChainId.CELO].includes(currency.chainId)) {
    return currency.wrapped.address
  }

  if (currency.isNative) return 'ETH'

  if (currency.isToken) return currency.address

  throw new Error('invalid currency')
}
