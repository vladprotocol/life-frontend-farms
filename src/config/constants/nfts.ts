import { Nft } from './types'

export const RABBIT_MINTING_FARM_ADDRESS = '0x6a63AF63675D3c9D498DF43Aa163F9243E7b4646'
export const PANCAKE_RABBITS_ADDRESS = '0x713A2C04d5186c9693B5D92658Fe6D39BA271Ef4'

const Nfts: Nft[] = [
  {
    name: 'Swapsies',
    description: 'These bunnies love nothing more than swapping pancakes. Especially on BSC.',
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/swapsies.png',
    previewImage: 'swapsies-preview.png',
    blurImage: 'swapsies-blur.png',
    sortOrder: 0,
    bunnyId: 0,
  },
]

export default Nfts
