import placeholder from '../assets/project-placeholder.png'
import touchBarText from '../assets/touchbartext.png'

const images: Record<string, string> = {
  touchBarText,
}

export const projectImage = (name: string) => images[name] ?? placeholder
