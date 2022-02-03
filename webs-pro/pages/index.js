import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomePage from './Home'
import Auth from './auth'

export default function Home() {

  return (
    <div className="border-4 ">
      <Head>
        <title>Web-App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <HomePage />

    </div>
  )
}
