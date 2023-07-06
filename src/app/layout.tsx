import './globals.css'
import { Navbar } from '@/components'
import { Providers } from './providers'

export const metadata = {
  title: '03 FrontMentor',
  description: 'Front Mentor',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body >
        <Providers>

          <header>
            <Navbar />
          </header>

          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
