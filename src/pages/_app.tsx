import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

const Blog = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
)

export default Blog
