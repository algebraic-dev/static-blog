import Link from 'next/link'
import { IconType } from 'react-icons'

import { SiKofi, SiGithub } from 'react-icons/si'
import { FaHome, FaMoon } from 'react-icons/fa'
import { useTheme } from 'next-themes'

interface IconProps {
  href: string
  icon: IconType
}

const Icon = ({ href, icon: Icon }: IconProps) => (
  <Link href={href} passHref={true}>
    <Icon
      className="transition-colors hover:text-red-500 cursor-pointer dark:text-white"
      size={25}
    />
  </Link>
)

const Navbar = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header className="flex m-10 md:mx-20 items-center justify-end gap-6">
      <Icon href="/" icon={FaHome} />
      <FaMoon
        onClick={() => setTheme(theme != 'light' ? 'light' : 'dark')}
        className="cursor-pointer dark:text-white transition-colors hover:text-red-500"
        size={25}
      />
      <Icon href="https://github.com/felipegchi" icon={SiGithub} />
      <Icon href="https://ko-fi.com/chiyoku" icon={SiKofi} />
    </header>
  )
}

export default Navbar
