import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import Search from 'app/components/Search'
import Typography from 'app/components/Typography'
import { Chef, PairType } from 'app/features/onsen/enum'
import FarmList from 'app/features/onsen/FarmList'
import OnsenFilter from 'app/features/onsen/FarmMenu'
import useFarmRewards from 'app/hooks/useFarmRewards'
import useFuse from 'app/hooks/useFuse'
import { TridentBody, TridentHeader } from 'app/layouts/Trident'
import { useActiveWeb3React } from 'app/services/web3'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import React from 'react'

export default function Farm(): JSX.Element {
  const { i18n } = useLingui()

  const { account } = useActiveWeb3React()

  const router = useRouter()

  const type = !router.query.filter ? 'all' : (router.query.filter as string)

  // const queryOrActiveAccount = useMemo(
  //   () => (router.query.account ? (router.query.account as string) : account),
  //   [account, router.query.account]
  // )

  // console.log({ queryOrActiveAccount })

  const chainId = Number(router.query.chainId)

  const FILTER = {
    // @ts-ignore TYPE NEEDS FIXING
    all: (farm) => farm.allocPoint !== '0' || (farm.rewards.length > 1 ? farm.rewarder.rewardPerSecond > 0 : false),
    // @ts-ignore TYPE NEEDS FIXING
    portfolio: (farm) => farm?.amount && !farm.amount.isZero(),
    // @ts-ignore TYPE NEEDS FIXING
    sushi: (farm) => farm.pair.type === PairType.SWAP && farm.allocPoint !== '0',
    // @ts-ignore TYPE NEEDS FIXING
    kashi: (farm) => farm.pair.type === PairType.KASHI && farm.allocPoint !== '0',
    // @ts-ignore TYPE NEEDS FIXING
    '2x': (farm) =>
      (farm.chef === Chef.MASTERCHEF_V2 || farm.chef === Chef.MINICHEF) &&
      farm.rewards.length > 1 &&
      farm.allocPoint !== '0',
    // @ts-ignore TYPE NEEDS FIXING
    old: (farm) => farm.allocPoint === '0',
    // @ts-ignore TYPE NEEDS FIXING
    trident: (farm) => farm.pair.type === PairType.TRIDENT && farm.allocPoint !== '0',
  }

  const rewards = useFarmRewards({ chainId })

  const data = rewards.filter((farm) => {
    // @ts-ignore TYPE NEEDS FIXING
    return type in FILTER ? FILTER[type](farm) : true
  })

  const options = {
    keys: ['pair.id', 'pair.token0.symbol', 'pair.token1.symbol'],
    threshold: 0,
  }

  const { result, term, search } = useFuse({
    data,
    options,
  })

  return (
    <>
      <NextSeo title="Farm" description="Farm SUSHI" />
      <TridentHeader className="sm:!flex-row justify-between items-center" pattern="bg-bubble">
        <div>
          <Typography variant="h2" className="text-high-emphesis" weight={700}>
            {i18n._(t`Onsen Menu`)}
          </Typography>
          <Typography variant="sm" weight={400}>
            {i18n._(t`Earn fees and rewards by depositing and staking your tokens to the platform.`)}
          </Typography>
        </div>
      </TridentHeader>
      <TridentBody>
        <div className="flex flex-col w-full gap-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <Search search={search} term={term} />
            <OnsenFilter account={account} chainId={chainId} />
          </div>
          <FarmList farms={result} term={term} />
        </div>
      </TridentBody>
    </>
  )
}
