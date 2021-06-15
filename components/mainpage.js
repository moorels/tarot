import styles from '../styles/Home.module.css'
import React from 'react'
import Image from 'next/image'
import { Imagestest } from '../components/images'
function Mainloader () {

const numm = Imagestest();

return (
<div className={styles.wrapper} >
        <div className={styles.wrapper}>
        <div></div>
        <div><Image 
        src = {`/${numm[0]}.jpg`}
        width = {120}
        height={200}
        layout="fixed"
        ></Image></div>
        <div></div>
        <div><Image 
        src = {`/${numm[1]}.jpg`}
        width = {120}
        height={200}
        layout="fixed"
        ></Image></div>
        <div><Image 
        src = {`/${numm[2]}.jpg`}
        width = {120}
        height={200}
        layout="fixed"
        ></Image></div>
        <div><Image 
        src = {`/${numm[3]}.jpg`}
        width = {120}
        height={200}
        layout="fixed"
        ></Image></div>
        <div></div>
        <div><Image 
        src = {`/${numm[4]}.jpg`}
        width = {120}
        height={200}
        layout="fixed"
        ></Image></div>
        <div></div></div>
        <div className={styles.wrapperleft}>
        <div><Image 
        src = {`/${numm[5]}.jpg`}
        width = {120}
        height={200}
        layout="fixed"
        ></Image></div>
        <div><Image 
        src = {`/${numm[6]}.jpg`}
        width = {120}
        height={200}
        layout="fixed"
        ></Image></div>
        <div><Image 
        src = {`/${numm[7]}.jpg`}
        width = {120}
        height={200}
        layout="fixed"
        ></Image></div>
        <div><Image 
        src = {`/${numm[8]}.jpg`}
        width = {120}
        height={200}
        layout="fixed"
        ></Image></div>
        </div>
        </div>

    )
}

export default Mainloader