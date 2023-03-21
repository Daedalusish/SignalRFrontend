import { Box, Typography } from '@mui/material'
import { useState, useContext } from 'react'
import { SignalrDataContextChat } from 'src/signalR/signalRContextChat'
import { MessageChat, MessageInput, UserNameSubmission } from '../components/chatComponents'

export const ChatPage = () => {
  const [userName, setUsername] = useState<string>('')
  const [userMessage, setUserMessage] = useState<string>('')
  const { messages, sendMessage } = useContext(SignalrDataContextChat)

  const submitMessage = () => {
    sendMessage(userName, userMessage)
    setUserMessage('')
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        maxHeight: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {userName === '' ? (
        <UserNameSubmission setUsername={setUsername} />
      ) : (
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant='h5'>Hello this is horse</Typography>
          <MessageChat messages={messages} currentUsername={userName} />
          <MessageInput
            message={userMessage}
            setUserMessage={(message: string) => setUserMessage(message)}
            submitMessage={submitMessage}
          />
        </Box>
      )}
    </Box>
  )
}
