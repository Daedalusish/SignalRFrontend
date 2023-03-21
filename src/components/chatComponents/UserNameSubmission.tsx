import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
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
          <Typography variant='h5'>We need some username</Typography>
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
