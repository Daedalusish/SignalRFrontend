import { DateTime } from 'luxon'
import { useEffect } from 'react'

const BASEURL = process.env.NEXT_PUBLIC_API_BASIC_URL

export const useMockEndpoint = async () => {
  const tickTock = async () => {
    await fetch(`${BASEURL}?callerId=${Math.sin(DateTime.now().toUnixInteger() % 360)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  useEffect(() => {
    setInterval(tickTock, 1000)
  }, [])

  return {}
}
