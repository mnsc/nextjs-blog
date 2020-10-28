import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Välkommen till min hemsa. :constructionsign:</p>

        <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-md m-8">
          <div class="flex-shrink-0">
            <img class="h-12 w-12" src="/images/logo.svg" alt="ChitChat Logo" />
          </div>
          <div class="ml-6 pt-1">
            <h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
            <p class="text-base text-gray-600 leading-normal">You have a new message!</p>
          </div>
        </div>


        <div class="max-w-sm mx-auto bg-white shadow-md rounded-md overflow-hidden m-8">
          <div class="sm:flex sm:items-center px-6 py-4">
            <img class="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-xl sm:rounded-full" src="/images/profile.jpg" alt="Mattias Blom" />
            <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <p class="text-xl leading-tight">Mattias Blom</p>
              <p class="text-sm leading-tight text-gray-600">Consultant</p>
              <div class="mt-4">
                <button class="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Message</button>
              </div>
            </div>
          </div>
        </div>

      </section>
    </Layout>
  )
}
