import { Box, Stack, Typography } from '@mui/material'
import { useContext } from 'react'
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { useMockEndpoint } from 'src/hooks/useMockEndpoint'
import { SignalrDataContext } from 'src/signalR/signalRContextBasic'

export const HomePage = () => {
  const {} = useMockEndpoint()
  const { measurements } = useContext(SignalrDataContext)
  return (
    <Stack sx={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant='h5'>Hello this is horse</Typography>

      <Box width='1000px' height='400px' overflow='hidden'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart data={measurements} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey='entry' />
            <YAxis domain={[-1.5, 1.5]} />
            <Line
              type='monotone'
              dataKey='value'
              stroke='#8884d8'
              animationDuration={400}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Stack>
  )
}
