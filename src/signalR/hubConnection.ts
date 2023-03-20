import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'

const backendPath = 'https://knowitsignalrdemo2.azurewebsites.net'

export const hubConnection = async (endpoint: string) => {
  const connection = new HubConnectionBuilder()
    .withUrl(`${backendPath}/${endpoint}`, {
      withCredentials: false,
    })
    .withAutomaticReconnect([1000, 5000, 10000, 30000])
    .configureLogging(LogLevel.Warning)
    .build()
  await connection.start()

  return connection
}
