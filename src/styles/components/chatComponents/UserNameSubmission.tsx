import { Box, Button, Paper, Stack, TextField } from '@mui/material'
import { useState } from 'react'

export const UserNameSubmission = ({
  setUsername,
}: {
  setUsername: (username: string) => void
}) => {
  const [innerState, setInnerState] = useState<string>('')
  return (
    <Box display='flex' justifyContent='center' alignItems='center' height='100%'>
      <Paper sx={{ padding: '4rem', backgroundColor: 'darkgrey' }}>
        <Stack spacing={4}>
          <TextField
            label='username'
            value={innerState}
            onChange={(e) => setInnerState(e.target.value)}
          />
          <Button
            variant='contained'
            disabled={innerState === ''}
            onClick={() => setUsername(innerState)}
          >
            Enter the chaos
          </Button>
        </Stack>
      </Paper>
    </Box>
  )
}
