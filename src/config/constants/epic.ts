import { Nft } from './types'

export const NftFarm = '0x6a63AF63675D3c9D498DF43Aa163F9243E7b4646'
export const NFT = '0xA81Ab2D03b9E3a62BDBb837d417A5E221F754E14'
export const AMOUNT_TO_CLAIM = '10'

const Nfts: Nft[] = [
  {
    name: 'Silver Pepes',
    metadata: '',
    description:
      "The count has had an epic existence sure, but it has not been without many attempts at his life. This artist's rendition pays homage to the time he was frozen in Carbonite ...oh wait, wrong story. Our bad, pretty slick tho right?",
    previewImage: 'preview-silver-pepe.jpg',
    originalImage:
      'https://ipfs.io/ipfs/QmaPP3CqB8iNcB9b9NCZVytNiaxZcJWt7Kk1vnHWwRL7hQ?filename=NFT-epic-silver-pepes.mp4',
    fileType: 'mp4',
    blurImage: '',
    sortOrder: 0,
    nftId: 0,
    tokenAmount: 350,
    tokenSupply: 66,
    nftFarmContract: '0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB',
    nftContract: '0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392',
  },
]

export default Nfts
