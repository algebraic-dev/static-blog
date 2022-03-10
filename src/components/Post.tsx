import Link from 'next/link'

interface PostProps {
  title: string
  href: string
  date: Date
  desc: string
}

const Post = (props: PostProps) => (
  <article className="my-10">
    <Link passHref={true} href={props.href}>
      <header className="flex justify-between cursor-pointer">
        <h1 className="font-bold text-xl dark:text-white">{props.title}</h1>
        <h1 className="text-zinc-400 dark:text-white">
          {props.date.toDateString()}
        </h1>
      </header>
    </Link>
    <p className="mt-3 text-zinc-700  dark:text-zinc-400">{props.desc}</p>
  </article>
)

export default Post
