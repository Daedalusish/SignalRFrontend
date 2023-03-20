import { styled } from '@mui/material'

const LayoutMain = styled('main')({
  minHeight: '100vh',
  display: 'flex',
  flexGrow: '1',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#2C3333',
})

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return <LayoutMain>{children}</LayoutMain>
}
