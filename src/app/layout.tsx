import './globals.css'
import type { Metadata } from 'next'
import { api } from './api'
import Link from 'next/link'
import { Suspense } from 'react'
import { ListLoading } from './components/ListLoading/ListLoading'

export const metadata: Metadata = {
  title: 'DesafioUIWizard HackerNews',
  description: 'Desafio del stream de Goncy',
}

async function ListItem ({id}:{id:number}) {
  const postDetails = await api.getPost(id)
  return (  
    <div className="max-w-sm p-6 bg-white border border-gray-200 shadow">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 truncate ">{postDetails.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">By {postDetails.by}</p>
      <Link href={`/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </Link>
</div>


  );
}


export default async function RootLayout({children,}: {children: React.ReactNode}) {

  const post = await api.getId 

  return (
    <html lang="en">
      <body className='grid grid-rows-[100px,1fr] h-screen'>
        <header className='bg-yellow-600 text-black grid items-center'>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
          UIWizard HackerNews
          </h1>
        </header>
      <main className='grid grid-cols-[320px,1fr]'>
        <aside>
          <ul>
            {post.map((id)=> (
              <Suspense fallback={<ListLoading/>}>
              {<ListItem id={id} />}
              </Suspense>
            ))}
              
          </ul>
        </aside>
        <section>{children}</section>
      </main>
      </body>
    </html>
  )
}
