import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'STOS',
    stakingTokenName: QuoteToken.VLAD,
    stakingTokenAddress: '0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xe3cd0182d3a5ff54a5a304121c90b89f7a5d47f3',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://stos.finance/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
