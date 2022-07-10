import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import NavBar from "../components/NavBar";
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ryann Ferreira</title>
        <meta name="description" content="Ryann Ferreira da Silva, portfolio" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@RyannFerreira_"/>
        <meta name="twitter:creator" content="@RyannFerreira_"/>
        <meta property="og:title" content="Ryann Ferreira"/>
        <meta property="og:description" content="Desenvolvedor Full Stack Javascript"/>
        <meta property="og:url" content="https://ryann-ferreira.vercel.app/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Ryann Ferreira"/>
        <meta name="application-name" content="Ryann Ferreira"/>
        <meta name="msapplication-TileColor" content="#171717"/>
        <meta name="theme-color" content="#171717" />
        <link rel="canonical" href="https://ryann-ferreira.vercel.app/"/>
        <link rel="icon" href="/box.svg" />
      </Head>
      <section className="space-y-8">
        <div className="py-[10vh] prose prose-invert md:py-[20vh]">
          <p className="lead"><b>Ryann Ferreira</b></p>
          <h1 className="text-4xl">
            Criando experiências na Web usando tecnologias modernas de Frontend e Backend
          </h1>
          <p className="my-4">Desenvolvedor Full Stack na Primata e contribuidor de projetos open-source como o Gnome</p>
          <p className="my-4">Para entrar em contato use o email: <Link href="mailto:ryannnkl@gmail.com" passHref><a className="text-emerald-600">ryannnkl@gmail.com</a></Link> ou entre em contato pelo instagram: <Link href="https://instagram.com/ryann_ferreira_"><a target="_blank" className="text-emerald-600">ryann_ferreira_</a></Link> </p>
          <Link href="/">
          <p 
    className="py-4 px-3 border w-fit rounded-xl cursor-pointer hover:border-emerald-600 hover:text-emerald-600 hover:shadow duration-150 hover:shadow-emerald-600">Whatsapp</p>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
