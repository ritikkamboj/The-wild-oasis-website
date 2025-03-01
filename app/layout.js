import Logo from "@/app/_component/Logo"
import Navigation from "@/app/_component/Navigation"
import "@/app/_styles/globals.css";






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

      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />

        </header>
        <Navigation />
        <main>
          {children}</main>
        <footer>CopyRight @ The wild Oasis </footer>
      </body>

    </html>
  )
}
