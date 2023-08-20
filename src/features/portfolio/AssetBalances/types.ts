import { Currency, CurrencyAmount } from '@conedex/core-sdkv2'

export interface Assets {
  asset: CurrencyAmount<Currency>
  strategy?: { token: string; apy: number; targetPercentage: number; utilization: number }
}
