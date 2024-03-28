import Header from '@/components/header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      {/* header  */}
      <Header/>
      <main>
        {/* Banner  */}
      </main>
    </div>
  )
}
