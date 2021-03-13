import React, { useContext } from 'react'
import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd } from 'state/hooks'
import { Menu as UikitMenu } from '@pancakeswap-libs/uikit'
import config from './config'
import './style.css'

const Sticky = styled.div`
  position: fixed;
  width: 100%;
  background: #171717;
  z-index: 111;
  height: 45px;
  top: 0px;
`

const Head = styled.div`
  color: #5ca269;
  padding: 14px;
  display: inline-block;
`

const Footer = styled.div`
  height: 200px;
  background: #171717;
`

const Social = styled.div`
  padding: 10px;
  display: inline-block;
  float: right;
`

const SocialLink = styled.div`
  display: inline;
  color: white;
  padding: 10px;
`

const Container = styled.div`
  margin-top: 40px;
`

const SocialImage = styled.img`
  margin-right: 10px;
`

const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()

  return (
    <div>
      <Sticky>
        <Head>VLAD.FINANCE</Head>
        <Social>
          <SocialImage 
            src="https://vlad.finance/images/telegram.0fb6c3d0.svg" 
            alt="telegram" 
            width="23px" />
          <SocialImage 
            src="https://vlad.finance/images/medium.d48818e9.svg" 
            alt="medium" 
            width="23" />
          <SocialImage src="https://vlad.finance/images/twitter.8e23b953.svg" 
            alt="twitter" 
            width="23px" />
          <SocialImage 
            src="https://vlad.finance/images/bscscan.png" 
            alt="bscscan" 
            width="23px" />
          <SocialImage
            src="https://vlad.finance/images/how-to-buy-pancakeswap-cake.png"
            alt="pancakeswap"
            width="23px"
          />
        </Social>
      </Sticky>
      <Container>
        <UikitMenu
          account={account}
          login={connect}
          logout={reset}
          isDark={isDark}
          toggleTheme={toggleTheme}
          currentLang={selectedLanguage && selectedLanguage.code}
          langs={allLanguages}
          setLang={setSelectedLanguage}
          cakePriceUsd={cakePriceUsd.toNumber()}
          links={config}
          priceLink="https://www.coingecko.com/en/coins/goose-finance"
          {...props}
        />
      </Container>
      <Footer>asdf</Footer>
    </div>
  )
}

export default Menu
