import { useTheme } from 'next-themes'
import { IconType } from 'react-icons'
import { SiHaskell, SiJavascript, SiTypescript } from 'react-icons/si'

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'

import {
  atomOneLight,
  atomOneDark,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const iconMapping: { [key: string]: IconType } = {
  hs: SiHaskell,
  js: SiJavascript,
  ts: SiTypescript,
}

const nameMapping: { [key: string]: string } = {
  hs: 'Haskell',
  js: 'Javascript',
  ts: 'Typescript',
}

export const Code = (data: { className: string; children: string }) => {
  let lang = data.className.split('-')[1]
  let Icon = iconMapping[lang]

  const { theme } = useTheme()

  return (
    <div className="my-6 text-xm">
      <div
        className="p-2 flex justify-between"
        style={{ background: theme == 'light' ? '#eee' : '#1e2228' }}
      >
        <div className="text-xs text-gray-400">
          {nameMapping[lang] ? nameMapping[lang] : lang}
        </div>
        {Icon && <Icon size={15} className="text-gray-400" />}
      </div>
      <SyntaxHighlighter
        language={lang}
        style={theme == 'light' ? atomOneLight : atomOneDark}
      >
        {data.children.trim()}
      </SyntaxHighlighter>
    </div>
  )
}
