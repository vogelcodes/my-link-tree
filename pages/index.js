import Head from "next/head";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const links = [
  {
    name: "Agende um consultoria comigo",
    url: "https://wa.me/5521986388688?text=Oi%2C+tudo+bem%3F+Eu+gostaria+de+agendar+uma+consultoria.",
  },
  {
    name: "LactoFlow - Aumente a sua produção de leite materno",
    url: "https://pv.lactoflow.com.br/?utm_source=bio",
  },
  {
    name: "Workshop - A Amamentação começa na Gestação",
    url: "https://go.hotmart.com/Y89675102O?dp=1&utm_source=bio",
  },
  {
    name: "E-book Guia de Retorno ao Trabalho SEM Desmame",
    url: "https://go.hotmart.com/B89175649F?dp=1&utm_source=bio",
  },
  {
    name: "Workshop - Desmame Gentil: Toda Amamentação tem seu Fim",
    url: "https://hotmart.com/pt-br/marketplace/produtos/workshop-toda-amamentacao-tem-seu-fim/C89898767H?utm_source=bio",
  },
  {
    name: "Cupom de Desconto para utilizar na Lackto: procaci ",
    url: "https://www.lackto.com.br/?ref=procaci",
  },
  {
    name: "Página da Amazon de Carolina Procaci ",
    url: "https://www.amazon.com.br/shop/carolina.procaci?utm_source=bio",
  },
  {
    name: "Meu canal no Youtube",
    url: "https://www.youtube.com/channel/UCqQ4PyvfWuEIbtiU_aNh0rQ?sub_confirmation=1&utm_source=bio",
  },
  {
    name: "Encontre o Banco de Leite Humano mais próximo de você",
    url: "https://rblh.fiocruz.br/localizacao-dos-blhs?utm_source=bio",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <Head>
        <title>@carolina.procaci | Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full max-w-3xl flex-1 px-2 pt-8 text-center bg-green">
        <div className="pb-4 text-blue flex flex-col items-center">
          <img
            width="96"
            height="96"
            className="w-27 rounded-full"
            src="/logo.webp"
            alt="logo"
          ></img>
          <p className="mt-3 font-medium text-2xl">@carolina.procaci</p>
          <p className="mt-3 font-normal w-5/6 text-base">
            Aumente a sua produção de leite e proteja a sua amamentação.
          </p>
        </div>

        <div className="flex  text-white flex-col w-full space-y-4 mx-auto my-4 justify-between">
          {links.map((link, i) => (
            <a href={link.url + "&" + useSearchParams()} target="_blank">
              <div
                key={link.name}
                className="bg-blue rounded-md px-2 py-10 border-2 border-green text-cream duration-200 h-16 place-items-center justify-between flex"
              >
                <Image
                  src={`/links/${i + 1}.webp`}
                  width={48}
                  height={48}
                  alt={`link-${i}`}
                ></Image>
                <p className="font-semibold w-2/3">{link.name}</p>
                <div></div>
              </div>
            </a>
          ))}
        </div>
      </main>

      <footer className="flex flex-col justify-end w-full bg-green h-12 border-t">
        <p className="text-center">
          {" "}
          Carolina Procaci - {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
