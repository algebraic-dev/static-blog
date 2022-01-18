import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Container from 'components/Container'
import Navbar from 'components/Navbar'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import posts from 'lib/posts'
import { H1, H2, H3, Img, A, P, Li } from 'components/Markdown'
import { Code } from 'components/Code'
import Footer from 'components/Footer'

interface PostProps {
  title: string
  desc: string
  date: string
  source: MDXRemoteSerializeResult
}

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  code: Code,
  img: Img,
  a: A,
  li: Li,
}

const Post = (props: PostProps) => {
  return (
    <div>
      <Head>
        <title>Chiyoku Blog - {props.title}</title>
        <meta name="description" content={props.desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        <section className="text-center mt-20 my-10">
          <h1 className="font-bold dark:text-white text-4xl mb-5 tracking-wider">
            {props.title}
          </h1>
          <p className="dark:text-zinc-300 text-zinc-700 mt-10">{props.desc}</p>
        </section>
        <hr />
        <article className="mt-10">
          <MDXRemote {...props.source} components={components} />
        </article>
        <Footer />
      </Container>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  let id = context?.params?.id || ''
  let post = posts.find((a) => a.name == id)

  if (post === undefined) return { props: {} }

  return {
    props: {
      title: post.data.title,
      desc: post.data.desc || '',
      date: post.data.date.toString(),
      source: await serialize(post.content),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: posts.map((post) => ({ params: { id: post.name } })),
    fallback: false,
  }
}

export default Post
