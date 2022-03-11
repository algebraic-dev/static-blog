import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import Container from 'components/Container'
import Navbar from 'components/Navbar'
import Post from 'components/Post'

import posts from 'lib/posts'
import Footer from 'components/Footer'

interface HomeProps {
  posts: [{ title: string; link: string; desc: string; date: Date }]
}

const Home = (data: HomeProps) => (
  <div>
    <Head>
      <title>Chiyoku Blog - Home</title>
      <meta name="description" content="My personal blog" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <Container>
      <section className="text-center mt-20 my-10">
        <h1 className="font-bold text-7xl mb-5 tracking-wider dark:text-white">
          CHIYOKU ☄️
        </h1>
        <p className="dark:text-zinc-300">I write about everything i learn.</p>
      </section>
      <hr className='dark:border-zinc-900' />
      <section>
        {data.posts.map((post) => (
          <Post
            href={`posts/${post.link}`}
            title={post.title}
            date={new Date(post.date)}
            desc={post.desc}
            key={post.link}
          />
        ))}
      </section>
      <Footer />
    </Container>
  </div>
)

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      posts: posts.sort((a, b) => b.data.date - a.data.date).map((post) => ({
        title: post.data.title,
        link: post.data.loc,
        desc: post.data.desc || '',
        date: post.data.date.toString(),
      })),
    },
  }
}

export default Home
