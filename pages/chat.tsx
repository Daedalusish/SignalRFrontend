import { ChatPage } from '@/styles/pageComponents/chat'
import type { NextPage } from 'next'
import { SignalrDataProviderChat } from 'src/signalR/signalRContextChat'

const Chat: NextPage = () => {
  return (
    <SignalrDataProviderChat>
      <ChatPage />
    </SignalrDataProviderChat>
  )
}

export default Chat
