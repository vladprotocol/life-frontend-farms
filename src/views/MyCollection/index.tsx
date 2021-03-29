import React from 'react'
import styled from 'styled-components'
import { Heading, LogoIcon, Text, Button } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import HowItWorks from './components/HowItWorks'
import NftList from './components/NftList'
import NftProvider from './contexts/NftProvider'
import NftInfo from './components/NftInfo'

const StyledHero = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.textSubtle};
  margin-bottom: 24px;
  padding-bottom: 32px;
`

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const Nft = () => {
  const TranslateString = useI18n()
  const { account } = useWallet()

  if (account) {
    return (
      <NftProvider>
        <Page>
          <StyledHero>
            <Heading as="h1" size="xxl" color="#5ca269" mb="24px">
              My Collection
            </Heading>
          </StyledHero>
          <NftInfo />
          <NftList />
        </Page>
      </NftProvider>
    )
  }

  return (
    <Page>
      <StyledNotFound>
        <LogoIcon width="64px" mb="8px" />
        <Text mb="16px">{TranslateString(999, 'Empty Collection')}</Text>
      </StyledNotFound>
    </Page>
  )
}

export default Nft
