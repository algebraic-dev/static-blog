import Link from 'next/link'
import { IconType } from 'react-icons'

import { SiKofi, SiGithub } from 'react-icons/si'
import { FaHome } from 'react-icons/fa'

interface IconProps {
  href: string
  icon: IconType
}

const Icon = ({ href, icon: Icon }: IconProps) => (
  <Link href={href} passHref={true}>
    <Icon size={24}></Icon>
  </Link>
)

const Navbar = () => (
  <div className="flex m-10 md:mx-20 items-center justify-end gap-5">
    <Icon href="/" icon={FaHome} />
    <Icon href="https://github.com/felipegchi" icon={SiGithub} />
    <Icon href="https://ko-fi.com/chiyoku" icon={SiKofi} />
  </div>
)

export default Navbar
