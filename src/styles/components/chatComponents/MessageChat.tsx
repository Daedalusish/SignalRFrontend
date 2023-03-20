import type { Message } from '@/types/basicTypes'
import { Box, Paper, Typography } from '@mui/material'

export const MessageChat = ({
  messages,
  currentUsername,
}: {
  messages: Message[]
  currentUsername: string
}) => {
  return (
    <Paper
      sx={{
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1000px',
        backgroundColor: 'transparent',
        height: '100%',
      }}
    >
      {messages.length === 0 ? (
        <Typography>No messages...</Typography>
      ) : (
        messages.map((message, idx) => {
          const isMatch = currentUsername === message.username
          return (
            <Box
              key={idx}
              sx={{
                width: '300px',
                alignSelf: isMatch ? 'end' : 'default',
                display: 'flex',
                flexDirection: 'column',
                paddingTop: 1,
              }}
            >
              <Typography>{message.username}</Typography>
              <Box
                sx={{
                  backgroundColor: isMatch ? '#395B64' : '#A5C9CA',
                  borderRadius: '12px',
                  padding: 1,
                }}
              >
                <Typography>{message.message}</Typography>
              </Box>
            </Box>
          )
        })
      )}
    </Paper>
  )
}
