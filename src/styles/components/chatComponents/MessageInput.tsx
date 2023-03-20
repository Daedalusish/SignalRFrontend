import { Button, Stack, TextField } from '@mui/material'

export const MessageInput = ({
  message,
  setUserMessage,
  submitMessage,
}: {
  message: string
  setUserMessage: (message: string) => void
  submitMessage: () => void
}) => {
  return (
    <Stack padding={2}>
      <TextField
        multiline
        label='message'
        value={message}
        onChange={(e) => setUserMessage(e.target.value)}
      />
      <Button onClick={submitMessage} disabled={message === ''}>
        Send
      </Button>
    </Stack>
  )
}
