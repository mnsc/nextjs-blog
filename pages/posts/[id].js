import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Date from '../../components/date'

export default function Post({postData}) {
    return <Layout>
        <Head>
            <title>Mattias Blogg - {postData.title}</title>
        </Head>
        <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
<Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
        </article>
    </Layout>
}



export async function getStaticPaths() {
    var ids = getAllPostIds();
    console.log(ids);
    var paths = ids.map(file => {
        return {
            params: {
                id: file.id
            }
        }
    });
    console.log(paths);
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}