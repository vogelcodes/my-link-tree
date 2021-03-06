import Head from 'next/head'
import Image from 'next/image'

const links = [
  {name: "Pinterest", url:"/"},
  {name: "Blog", url:"/"},
  {name: "YouTube", url:"/"},
  {name: "Curso de Programação", url:"/"},
  {name: "Twitter", url:"/"},
  {name: "Twitter2", url:"/"},
]

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <Head>
        <title>@vogelcodes | LinkTree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full max-w-3xl flex-1 px-2 text-center">
        <div className='pb-4 flex flex-col items-center'>
          <img width='96' height='96' className="w-32 rounded-full"src="/logo.png" alt="logo"></img>
          <p className="mt-3 font-bold text-base">
            @vogelcodes
          </p>
      </div>

        <div className="flex  text-white flex-col w-full space-y-4 mx-auto my-4 justify-between">
          {links.map(link=> 
          <a href={link.url}>
            <div 
              key={link.name} 
              className="bg-green-400 rounded-md border-2 border-green-400 hover:bg-white hover:text-green-400 duration-200 h-16 place-items-center justify-center flex">
                <p className="font-semibold">
                  {link.name}
                </p>
           </div></a>)}
         
        </div>
      </main>

      <footer className="flex flex-col justify-end w-full h-12 border-t">
        <p className="text-center"> VogelCodes.com - {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
