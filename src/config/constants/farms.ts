import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'LIFE-BUSD LP',
    lpAddresses: {
      97: '0x5a9A76586600bbC283559F6728b62cf0a0db7430',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
    },
    tokenSymbol: 'LIFE',
    tokenAddresses: {
      97: '0xdefA606701544521fFCa2Dc6D0E84f6A85995Dd4',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'LIFE-BNB LP',
    lpAddresses: {
      97: '0x9a8D78c72656696551Dd823A9dcb08b932278175',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
    },
    tokenSymbol: 'LIFE',
    tokenAddresses: {
      97: '0xdefA606701544521fFCa2Dc6D0E84f6A85995Dd4',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'VLAD-WBNB LP',
    lpAddresses: {
      97: '0xe782FB7d09277397cFd5238bDB79295F478F4340',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xdefA606701544521fFCa2Dc6D0E84f6A85995Dd4',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'VLAD-BUSD LP',
    lpAddresses: {
      97: '0x8bC2b82B710638bE88e80C6e5ACf4DA76DF859A1',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xdefA606701544521fFCa2Dc6D0E84f6A85995Dd4',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0xa75c80e7Ca70505AAB6062cF15A2cFC71b6138C0',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xdefA606701544521fFCa2Dc6D0E84f6A85995Dd4',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'LIFE',
    lpAddresses: {
      97: '0x7C5165968051061A626f4370065A0d8Afdd4C959',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // LIFE-BUSD LP
    },
    tokenSymbol: 'LIFE',
    tokenAddresses: {
      97: '0xdefA606701544521fFCa2Dc6D0E84f6A85995Dd4',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
