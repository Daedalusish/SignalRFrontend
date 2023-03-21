import type { NextPage } from 'next'
import { HomePage } from 'src/pageComponents/home'
import { SignalrDataProvider } from 'src/signalR/signalRContextBasic'

const Home: NextPage = () => {
  return (
    <SignalrDataProvider>
      <HomePage />
    </SignalrDataProvider>
  )
}

export default Home
