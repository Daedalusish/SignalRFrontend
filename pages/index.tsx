import { HomePage } from '@/styles/pageComponents/home'
import type { NextPage } from 'next'
import { SignalrDataProvider } from 'src/signalR/signalRContextBasic'

const Home: NextPage = () => {
  return (
    <SignalrDataProvider>
      <HomePage />
    </SignalrDataProvider>
  )
}

export default Home
