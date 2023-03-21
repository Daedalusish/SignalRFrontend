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
        rows={2}
        label='message'
        sx={{ minWidth: '300px' }}
        value={message}
        onChange={(e) => setUserMessage(e.target.value)}
        fullWidth
      />
      <Button variant='contained' onClick={submitMessage} disabled={message === ''}>
        Send
      </Button>
    </Stack>
  )
}
