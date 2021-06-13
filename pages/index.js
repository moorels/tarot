import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './header'
import React from 'react'
import {getrandom} from '../components/images'


export default function Home() {

  return (
    <div >
    <div >
      <Head>
        <title>HelloHead</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Header />
</div><div><button>Shuffle deck</button></div>

      <main className={styles.main}>
        <div className={styles.wrapper} >
        <div className={styles.wrapper}>
        <div></div>
        <div><img className={styles.images} src={getrandom()}></img></div>
        <div></div>
        <div><img className={styles.images} src={getrandom()}></img></div>
        <div><img className={styles.images} src={getrandom()}></img></div>
        <div><img className={styles.images} src={getrandom()}></img></div>
        <div></div>
        <div><img className={styles.images} src={getrandom()}></img></div>
        <div></div></div>
        <div className={styles.wrapperleft}>
        <div><img className={styles.images} src={getrandom()}></img></div>
        <div><img className={styles.images} src={getrandom()}></img></div>
        <div><img className={styles.images} src={getrandom()}></img></div>
        <div ><img className={styles.images} src={getrandom()}></img></div>
        </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div>Hello Footer</div>
      </footer>
    </div>
  )
}
