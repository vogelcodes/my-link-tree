import Head from 'next/head'
import { useState } from 'react';

const links = [
  {name: "Pinterest", url:"/"},
  {name: "Blog", url:"/"},
  {name: "YouTube", url:"/"},
  {name: "Curso de Programação", url:"/"}]

export default function Home() {
  const contentType = 'application/json'
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType
        },
        body: JSON.stringify({email})
      })
      if (!res.ok) {
        throw new Error(res.status)
      }
      setMessage('Cadastrado '+email)
      console.log(email)
    } catch (error) {
      setMessage('Erro')
    }
  }

  
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
          <p className="pb-4">
            Cadastre-se para receber nossas atualizações:
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input onChange={e => setEmail(e.target.value)} type="email" required={true} className="pl-2 border-2 rounded-md border-green-400" placeholder="Seu e-mail">
            </input>
            <button className="bg-green-400 rounded-md border-2 border-green-400 hover:bg-white text-white hover:text-green-400 duration-200 h-12 place-items-center justify-center w-36" type="submit"> Cadastre-se</button>
          </form>
          <p>{message}</p>
      </div>

        <div className="flex  text-white flex-col w-full space-y-4 mx-auto my-4 justify-between">
          {links.map(link=> 
          <a href={link.url} key={link.name}>
            <div 
               
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

