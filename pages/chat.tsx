import type { NextPage } from 'next'
import { ChatPage } from 'src/pageComponents/chat'
import { SignalrDataProviderChat } from 'src/signalR/signalRContextChat'

const Chat: NextPage = () => {
  return (
    <SignalrDataProviderChat>
      <ChatPage />
    </SignalrDataProviderChat>
  )
}

export default Chat
