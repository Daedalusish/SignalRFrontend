import type { GraphData, Message } from './basicTypes'

export interface SignalrDataContextProps {
  measurements: GraphData[]
}

export interface SignalrDataContextChatProps {
  messages: Message[]
  sendMessage: (username: string, message: string) => void
}
