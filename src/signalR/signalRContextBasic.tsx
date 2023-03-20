import type { HubConnection } from '@microsoft/signalr'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import type { GraphData, SignalrDataContextProps } from '../types'
import { hubConnection } from './hubConnection'

const initialValue: SignalrDataContextProps = {
  measurements: [],
}

export const SignalrDataContext = createContext<SignalrDataContextProps>(initialValue)

export const useSignalrDataContext = () => useContext(SignalrDataContext)

export const SignalrDataProvider = ({ children }: { children: ReactNode }) => {
  const [connection, setConnection] = useState<HubConnection>()
  const [measurements, setMeasurements] = useState<GraphData[]>([])
  const createNewConnection = async () => {
    try {
      const newConnection = await hubConnection('chatHub')
      newConnection.on('Endepunkt1', (response) => {
        setMeasurements((oldValues) => [
          ...oldValues,
          { entry: oldValues.length + 1, value: response },
        ])
      })

      setConnection(connection)
    } catch {
      console.error('Big oof')
    }
  }

  useEffect(() => {
    createNewConnection()
  }, [])

  return (
    <SignalrDataContext.Provider value={{ measurements: measurements }}>
      {children}
    </SignalrDataContext.Provider>
  )
}
