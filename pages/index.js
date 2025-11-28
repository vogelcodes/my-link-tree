import Head from "next/head";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const links = [
  // {
  //   name: "Workshop - Meu Estoque de Leite Materno",
  //   url: "https://go.hotmart.com/T95371072E",
  //   img: "/links/WS.webp",
  // },
  {
    name: "Agende uma consultoria comigo",
    url: "https://wa.me/5521978001294?text=Oi%2C+tudo+bem%3F+Eu+gostaria+de+agendar+uma+consultoria.",
    img: "/links/1.webp",
  },
  {
    name: "LactoBlack -25 👇<br/>LactoFlow",
    url: "https://prog.lactoflow.com.br/bf-25",
    img: "/links/2.webp",
    getParams: true,
  },
  // {
  //   name: "Se inscreva para a próxima LIVE ✍️",
  //   url: "https://procaci.info/tk-live",
  //   img: "/links/tk-live.webp",
  //   getParams: false,
  // },
  // {
  //   name: "Veja todas as lives no Amamenta Clube",
  //   url: "https://members.amamentaclube.com.br/",
  //   img: "/links/amc-white.webp",
  //   getParams: true,
  // },
  // {
  //   name: "E-book Guia de Retorno ao Trabalho SEM Desmame",
  //   url: "https://go.hotmart.com/B89175649F?dp=1",
  //   img: "/links/4.webp",
  //   getParams: true,
  // },
  // {
  //   name: "Workshop - A Amamentação começa na Gestação",
  //   url: "https://go.hotmart.com/Y89675102O?dp=1",
  //   img: "/links/3.webp",
  //   getParams: true,
  // },
  {
    name: "Workshop - Desmame Gentil: Toda Amamentação tem seu Fim",
    url: "https://hotmart.com/pt-br/marketplace/produtos/workshop-toda-amamentacao-tem-seu-fim/C89898767H",
    img: "/links/5.webp",
    getParams: true,
  },
  {
    name: "Travesseiro de Corpo IWS Snow® Body<br/>Cupom: carolinaprocaci",
    url: "https://www.iwannasleep.com.br/products/travesseiro-de-corpo-iws-snow-body?utm_source=Carolina%20Garrido%20Procaci&utm_medium=referral&utm_campaign=Carolina%20Procaci-%20Snow%20Body%201%2F3",
    img: "/links/snow.webp",
  },
  {
    name: "Lackto - Joia de Leite Materno<br/>Cupom: procaci",
    url: "https://www.lackto.com.br/",
    img: "/links/lackto.webp",
  },
  {
    name: "Potes para Leite Materno, Bolsas Térmicas e muito mais<br/>Cupom: supercarolina",
    url: "https://www.supermamae.com.br/",
    img: "/links/supermamae.webp",
  },
  // {
  //   name: "Cupom de Desconto para utilizar na Lackto: procaci ",
  //   url: "https://www.lackto.com.br/?ref=procaci",
  //   img: "/links/6.webp",
  // },
  {
    name: "Página da Amazon de Carolina Procaci ",
    url: "https://www.amazon.com.br/shop/carolina.procaci",
    img: "/links/7.webp",
  },
  {
    name: "Meu canal no Youtube",
    url: "https://www.youtube.com/channel/UCqQ4PyvfWuEIbtiU_aNh0rQ?sub_confirmation=1",
    img: "/links/8.webp",
  },
  {
    name: "WeFy Podcast - Parte 1",
    url: "https://www.youtube.com/watch?v=B_9xthH6at8",
    img: "/links/wefy.webp",
  },
  {
    name: "Encontre o Banco de Leite Humano mais próximo de você",
    url: "https://rblh.fiocruz.br/localizacao-dos-blhs",
    img: "/links/9.webp",
  },
];

export default function Home() {
  let searchParams = useSearchParams();
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
          {links.map((link, i) => {
            const markup = { __html: link.name };
            return (
              <a
                key={i}
                href={`${link.url}${
                  searchParams != "" && link.getParams
                    ? link.url.includes("?")
                      ? `&${searchParams}`
                      : `?${searchParams}`
                    : ""
                }`}
                target="_blank"
              >
                <div className="bg-blue rounded-md px-2 py-10 border-2 border-green text-cream h-16 duration-200 place-items-center justify-between flex">
                  <Image
                    src={link.img}
                    width={48}
                    height={48}
                    alt={`link-${i}`}
                  ></Image>
                  <p
                    className="font-semibold text-balance w-2/3 text-base"
                    dangerouslySetInnerHTML={markup}
                  ></p>
                  <div className=""></div>
                </div>
              </a>
            );
          })}
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
