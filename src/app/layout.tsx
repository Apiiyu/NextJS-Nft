import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

// Components
import { Navbar, Footer } from '@/core/components'
import { ThemeProvider } from '@/core/components/theme-provider'

// Global CSS
import './globals.css'

// Meta Data
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

// Poppins
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element =>
  (
    <html lang="en">
      <body className={poppins.className}>
        <main>
          <ThemeProvider attribute="class">
            <Navbar />
            <div className="dark:bg-nft-dark bg-white min-h-screen">
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
  )

export default RootLayout
