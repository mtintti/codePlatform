import { QuestionsProvider } from "@/context/Context";
import "@/styles/globals.css";
import { Roboto } from 'next/font/google';
import { useSession } from "next-auth/react"
import { SessionProvider } from "next-auth/react"



// Load Roboto font with specific weights
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'], // Include regular, medium, and bold
  variable: '--font-roboto', // Custom CSS variable
});

export default function App({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <SessionProvider session={session}>
      <QuestionsProvider>
        <main className={`${roboto.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </QuestionsProvider>
    </SessionProvider>
  )
}
