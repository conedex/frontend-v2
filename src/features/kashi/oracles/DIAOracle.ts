import { ChainId } from '@conedex/core-sdkv2'

import { Oracle } from './Oracle'

// https://www.diadata.org/
export class DIAOracle extends Oracle {
  constructor(chainId: ChainId, address: string, data: string) {
    super(chainId, address, 'DIA', data)
  }
}
