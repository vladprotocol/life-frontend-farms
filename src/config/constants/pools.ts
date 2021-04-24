import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'STOS',
    stakingTokenName: QuoteToken.VLAD,
    earningToken: '0x9eAB0a93b0cd5d904493694F041BdCedb97b88C6',
    stakingTokenAddress: '0x279d41f3f78fe5C1f0BA41aE963d6E545113C973',
    contractAddress: {
      97: '0x0',
      56: '0x2530adA21C656C313Ca9E4d5C6A3992AD632345a',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://stos.finance/',
    harvest: true,
    tokenPerBlock: '0.002480159',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 8,
  },
]

export default pools
