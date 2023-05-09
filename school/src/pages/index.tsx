import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}>
        <a className="font-bold text-7xl">
          Meine Verspätungen und die passenden entschuldigungen dazu.
        </a>

    </main>
  )
}
