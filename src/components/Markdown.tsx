import Link from 'next/link'
import { ReactNode } from 'react'

export const H1 = ({ children }: { children: ReactNode }) => (
  <h1 className="text-4xl mb-5 mt-10 dark:text-white font-bold">{children}</h1>
)
export const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="text-3xl my-5 mt-10 dark:text-white font-bold">{children}</h2>
)

export const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="text-2xl mb-5 mt-10 dark:text-white font-bold">{children}</h3>
)

export const P = ({ children }: { children: ReactNode }) => (
  <p className="dark:text-zinc-300 text-zinc-700 text-lg my-10">{children}</p>
)

export const Li = ({ children }: { children: ReactNode }) => (
  <li className="dark:text-zinc-300 text-zinc-700 text-lg my-2 list-inside list-disc">{children}</li>
)

export const Img = (data: { src: string; alt: string }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img className="p-4 m-auto" src={data.src} alt={data.alt}></img>
)

export const A = (info: { href: string; children: ReactNode }) => (
  <Link passHref={true} href={info.href}>
    <a className="text-pink-600 dark:text-teal-400">{info.children}</a>
  </Link>
)
