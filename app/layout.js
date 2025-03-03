import Logo from "@/app/_component/Logo"
import Navigation from "@/app/_component/Navigation"
import "@/app/_styles/globals.css";

import { Josefin_Sans } from 'next/font/google';
import Header from "./_component/Header";

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap'
})

console.log(josefin);






export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis"
  },
  description: 'Luxurious cabin hotel, located in the heart of Italian Dolomites, Surrounded by the beautiful mountains and dark forests',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      {/* <body className=`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`> */}
      <body className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}>


        <Header />
        <div className="flex-1 px-8 py-12">
          <main className=" mx-auto max-w-7xl">
            {children}</main>
        </div>

      </body>

    </html >
  )
}
