import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'LIFE-BUSD LP',
    lpAddresses: {
      97: '0xc40d451130e55d7dF28b779104B1E2E50cDce87c',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
    },
    tokenSymbol: 'LIFE',
    tokenAddresses: {
      97: '0x0709f0f5450eb39Fbb1CA729c47151158e9484Dd',
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
      97: '0x8b107803195D169e6dB7C968e51889c9873c9314',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
    },
    tokenSymbol: 'LIFE',
    tokenAddresses: {
      97: '0x0709f0f5450eb39Fbb1CA729c47151158e9484Dd',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'WBNB-VLAD LP',
    lpAddresses: {
      97: '0x1742064d963d474a3d05d96509a2c2BB359D5581',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0x0709f0f5450eb39Fbb1CA729c47151158e9484Dd',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'VLAD-BUSD LP',
    lpAddresses: {
      97: '0x2e727e92E5354c92705d5f305A7cea59E62c929B',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0x0709f0f5450eb39Fbb1CA729c47151158e9484Dd',
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
      97: '0x0709f0f5450eb39Fbb1CA729c47151158e9484Dd',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'VLAD',
    lpAddresses: {
      97: '0xd2Dcf4c9d85D48e12aE7c43D5280a2f99CE8CFA6',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // LIFE-BUSD LP
    },
    tokenSymbol: 'LIFE',
    tokenAddresses: {
      97: '0xd2Dcf4c9d85D48e12aE7c43D5280a2f99CE8CFA6',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
