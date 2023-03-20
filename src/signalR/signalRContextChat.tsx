import type { HubConnection } from '@microsoft/signalr'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import type { Message, SignalrDataContextChatProps } from '../types'
import { hubConnection } from './hubConnection'

const initialValue: SignalrDataContextChatProps = {
  messages: [],
  sendMessage: () => {
    return undefined
  },
}

export const SignalrDataContextChat = createContext<SignalrDataContextChatProps>(initialValue)

export const useSignalrDataContextChat = () => useContext(SignalrDataContextChat)

export const SignalrDataProviderChat = ({ children }: { children: ReactNode }) => {
  const [connection, setConnection] = useState<HubConnection>()
  const [messages, setMessages] = useState<Message[]>([])

  const createNewConnection = async () => {
    try {
      const newConnection = await hubConnection('chatHub')
      newConnection.on('MessageUpdate', (userName, message) => {
        console.log(userName, message)
        setMessages((oldValues) => [...oldValues, { message: message, username: userName }])
      })

      setConnection(newConnection)
    } catch {
      console.error('Big oof')
    }
  }

  function sendMessage(username: string, message: string) {
    if (connection) {
      connection.invoke('MessageUpdate', username, message)
    }
  }
  useEffect(() => {
    createNewConnection()
  }, [])

  return (
    <SignalrDataContextChat.Provider value={{ messages: messages, sendMessage: sendMessage }}>
      {children}
    </SignalrDataContextChat.Provider>
  )
}
