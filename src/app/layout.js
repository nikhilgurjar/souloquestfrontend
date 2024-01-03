import { Inter } from 'next/font/google'
import './globals.css'
import ThemeRegistry from '@/themeregistery/ThemeRegistry'
import { AuthProvider } from '@/utils/SessionProvider'
import Header from './nav-section/header/Header'
import FooterPage from './sections/footer/FooterPage'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Souloquest',
  description: 'One stop travel partner finder',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <AuthProvider>
            <Header/>
          {children}
          <FooterPage/>
          </AuthProvider>
        </ThemeRegistry>
      </body>
    </html>
  )
}
