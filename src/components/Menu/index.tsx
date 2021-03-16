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
import bscscanLogo from './bscscan.png';
import pancakeLogo from './pancake.png';
import telegramLogo from './telegram.svg';
import twitterLogo from './twitter.svg';
import mediumLogo from './medium.svg';
import vladLogo from './vlad-circle.png';
import bgFooter from './bg-footer.jpg';

const Sticky = styled.div`
  position: fixed;
  width: 100%;
  background: rgba(6, 31, 34);
  z-index: 111;
  height: 45px;
  top: 0px;
`

const Head = styled.a`
  color: #5ca269;
  padding: 14px;
  display: inline-block;
`

const Footer = styled.div`
  height: 400px;
  background: #171717;
  width: 100%;
  text-align: center;
  padding: 20px;
  background: url(${bgFooter}) no-repeat;
  background-size: cover;
  background-position: 100% 0;
`

const Social = styled.div`
  display: inline-block;
`

const SocialHeader = styled(Social)`
  float: right;
  padding: 10px;
`

const SocialFooter = styled(Social)`
  width: 100%;
  text-align: center;
  padding: 30px;
`

const Container = styled.div`
  margin-top: 45px;
`

const SocialImageHeader = styled.img`
  margin-right: 10px;
  width: 23px;
`

const SocialImageFooter = styled.img`
  width: 40px;
  margin: 10px;
`

const Logo = styled.img`
  width: 70px;
  margin: 20px;
`

const LiveLinkGroup = styled.div`
  margin: 20px;
`

const LiveLink = styled.a`
  color: white;
  margin: 10px;
`

const SocialLink = styled.a`
  decoration="none";
`

const AudioArtist = styled.a`
  color: white;
  margin-left: 60px;
  margin-right: 20px;
`

const FooterCopyRight = styled.div`
  color: white;
`

const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()

  return (
    <div>
      <Sticky>
        <Head href="https://vlad.finance" target="_blank">VLAD.FINANCE</Head>
        <AudioArtist target="_blank" href="https://soundcloud.com/dj_ezra_is_back/dj-ezra-live-vladhalla-the/s-RaJwB2A8UaP?p=a&c=1&utm_source=other&utm_medium=text&utm_campaign=social_sharing">Listen to DJ Ezra live from Vladhalla!</AudioArtist>
        <audio controls>
          <source src= "./vlad.mp3" type="audio/mp3"/>
            <track kind="captions" />
        </audio>
        <SocialHeader>   
          <SocialHeaderLink
            link="#"
            src={vladLogo}
            alt="life"
          />
          <SocialHeaderLink
            link="https://t.me/VladFinanceOfficial"
            src={telegramLogo}
            alt="telegram"
          />
          <SocialHeaderLink
            link="https://vlad-finance.medium.com"
            src={mediumLogo}
            alt="medium"
          />
          <SocialHeaderLink
            link="https://twitter.com/VladFinance"
            src={twitterLogo}
            alt="twitter"
          />
          <SocialHeaderLink
            link="https://bscscan.com/token/0x279d41f3f78fe5c1f0ba41ae963d6e545113c973"
            src={bscscanLogo}
            alt="bscscan"
          />
          <SocialHeaderLink
            link="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x279d41f3f78fe5c1f0ba41ae963d6e545113c973"
            src={pancakeLogo}
            alt="pancakeswap"
          />
        </SocialHeader>
      </Sticky>
      <Container>
        <UikitMenu
          account={account}
          login={connect}
          logout={reset}
          isDark={isDark}
          currentLang={selectedLanguage && selectedLanguage.code}
          langs={allLanguages}
          setLang={setSelectedLanguage}
          cakePriceUsd={cakePriceUsd.toNumber()}
          links={config}
          priceLink="https://www.coingecko.com/en/coins/vlad-finance"
          {...props}
        />
      </Container>
      <Footer>
        <SocialFooter>  
          <SocialFooterLink
            link="#"
            src={vladLogo}
            alt="life"
          />
          <SocialFooterLink
            link="https://t.me/VladFinanceOfficial"
            src={telegramLogo}
            alt="telegram"
          />
          <SocialFooterLink
            link="https://vlad-finance.medium.com"
            src={mediumLogo}
            alt="medium"
          />
          <SocialFooterLink
            link="https://twitter.com/VladFinance"
            src={twitterLogo}
            alt="twitter"
          />
          <SocialFooterLink
            link="https://bscscan.com/token/0x279d41f3f78fe5c1f0ba41ae963d6e545113c973"
            src={bscscanLogo}
            alt="bscscan"
          />
          <SocialFooterLink
            link="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x279d41f3f78fe5c1f0ba41ae963d6e545113c973"
            src={pancakeLogo}
            alt="pancakeswap"
          />
        </SocialFooter>
        <Logo src={vladLogo} alt="vlad.finance" />
        <LiveLinkGroup>
          <RankingLink link="https://www.coingecko.com/en/coins/vlad-finance" name="CoinGecko" />
          <RankingLink
            link="https://goswappcharts.web.app/?isbsc=true&tokenId=0x279d41f3f78fe5c1f0ba41ae963d6e545113c973"
            name="GoSwapp"
          />
          <RankingLink link="https://nomics.com/assets/vlad-vlad-finance" name="Nomics" />
          <RankingLink link="https://www.livecoinwatch.com/price/VladFinance-VLAD" name="LiveCoinWatch" />
        </LiveLinkGroup>
        <FooterCopyRight>© Vlad Finance. All Rights Reserved</FooterCopyRight>
      </Footer>
    </div>
  )
}

export default Menu

const RankingLink = (value) => {
  const link = value.link
  const name = value.name
  return (
    <LiveLink target="_blank" href={link}>
      {name}
    </LiveLink>
  )
}

const SocialFooterLink = (value) => {
  const link = value.link
  const src = value.src
  const alt = value.alt
  return (
    <SocialLink target="_blank" href={link}>
      <SocialImageFooter src={src} alt={alt} />
    </SocialLink>
  )
}

const SocialHeaderLink = (value) => {
  const link = value.link
  const src = value.src
  const alt = value.alt
  return (
    <SocialLink target="_blank" href={link}>
      <SocialImageHeader src={src} alt={alt} />
    </SocialLink>
  )
}
