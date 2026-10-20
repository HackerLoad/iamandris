import placeholder from '../assets/project-placeholder.webp'
import walletStalker from '../assets/walletstalker.webp'
import touchBarText from '../assets/touchbartext.webp'

const images: Record<string, string> = {
  touchBarText,
  walletStalker,
}

export const projectImage = (name: string) => images[name] ?? placeholder
