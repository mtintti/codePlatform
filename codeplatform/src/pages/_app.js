import { QuestionsProvider } from "@/context/Context";
import "@/styles/globals.css";
import { Roboto } from 'next/font/google';
import { AuthProvider } from "@/context/AuthContext";



const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
});
export default function App({ Component, pageProps: { ...pageProps } }) {

  return (
    <AuthProvider>
      <QuestionsProvider>
        <main className={`${roboto.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </QuestionsProvider>
    </AuthProvider>
  )
}
