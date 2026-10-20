import placeholder from '../assets/project-placeholder.png'
import walletStalker from '../assets/walletstalker.jpg'
import touchBarText from '../assets/touchbartext.png'

const images: Record<string, string> = {
  touchBarText,
  walletStalker,
}

export const projectImage = (name: string) => images[name] ?? placeholder
