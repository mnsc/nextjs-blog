import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'posts')


export default function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames  ;
}