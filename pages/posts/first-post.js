import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'


export default function FirstPost() {

    return (
        <Layout>
              <Head>
        <title>My first post</title>
      </Head>
            <h1>First Post 2</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <h3>
                <Link href="/">
                    <a className="foo" target="_blank" rel="noopener noreferrer">
                        Hello World</a>
                </Link>
            </h3>
        </Layout>
    )
}