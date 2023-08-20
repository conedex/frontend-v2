import { ChainId } from '@conedex/core-sdkv2'
import { GRAPH_HOST } from 'app/services/graph/constants'
import { request } from 'graphql-request'

// @ts-ignore TYPE NEEDS FIXING
export const status = async (chainId = ChainId.ETHEREUM, subgraphName) =>
  request(
    // @ts-ignore TYPE NEEDS FIXING
    `${GRAPH_HOST[chainId]}/index-node/graphql`,
    `
        indexingStatusForCurrentVersion(subgraphName: "${subgraphName}") {
            synced
            health
            fatalError {
              message
              block {
                number
                hash
              }
              handler
            }
            chains {
              chainHeadBlock {
                number
              }
              latestBlock {
                number
              }
            }
          }
        `
  )
