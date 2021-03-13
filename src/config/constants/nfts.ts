import { Nft } from './types'

export const RABBIT_MINTING_FARM_ADDRESS = '0x7bFf942A3Bb59Ef991b0A1AEAD632A3b0076B319'
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
