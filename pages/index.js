

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './header'
import React, { useState } from 'react'
import Mainloader from '../components/mainpage'

export default function Home() {

const [toggle, setToggle] = useState(false)


function resetState () {

useState(false)
}


  return (
    <div >
    <div >
      <Head>
        <title>HelloHead</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Header />
</div>
<div>

<button onClick={()=> setToggle(!toggle)  }>Shuffle deck</button>

</div>

      <main className={styles.main}>
      {toggle == (true) && <Mainloader/>}
      {toggle == (!true) && <Mainloader/>}
     
      </main>
      <footer className={styles.footer}>
        <div>Hello Footer</div>
      </footer>
    </div>
  )
}
