import fs from 'fs'
import matter from 'gray-matter'

const basePath = './src/posts/'

const readPost = (file: string) =>
  fs.readFileSync(`${basePath}${file}`).toString('utf-8')

const toPost = (file: string) => {
  let result = matter(readPost(file))
  let [year, month, day] = file.split('-')

  result.data.date = new Date(Number(year), Number(month) - 1, Number(day))
  result.data.loc = file.replace('.mdx', '')

  return {
    name: file.replace('.mdx', ''),
    data: result.data,
    content: result.content,
    hidden: result.data.hidden || false 
  }
}

let posts = fs.readdirSync('./src/posts').map(toPost).filter(post => !post.hidden)

export default posts
