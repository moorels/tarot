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
        <div className={styles.cardtext}>Goals & Ideas<Image 
        src = {`/${numm[0]}.jpg`}
        width = {120}
        height={200}
        layout="fixed"
        ></Image></div>
        <div></div>
        <div className={styles.cardtext}>Past<Image 
        src = {`/${numm[1]}.jpg`}
        width = {120}
        height={200}
        layout="fixed"
        ></Image></div>
        <div className={styles.cardtext}>Right Now<Image 
        src = {`/${numm[2]}.jpg`}
        width = {120}
        height={200}
        layout="fixed"
        ></Image></div>
        <div className={styles.cardtext}>Near Future<Image 
        src = {`/${numm[3]}.jpg`}
        width = {120}
        height={200}
        layout="fixed"
        ></Image></div>
        <div></div>
        <div className={styles.cardtext}>Subconsious Influences<Image 
        src = {`/${numm[4]}.jpg`}
        width = {120}
        height={200}
        layout="fixed"
        ></Image></div>
        <div></div></div>
        <div className={styles.wrapperleft}>
        <div className={styles.cardtext}>Final Outcome<Image 
        src = {`/${numm[5]}.jpg`}
        width = {120}
        height={200}
        layout="fixed"
        ></Image></div>
        <div className={styles.cardtext}>Hopes & Fears<Image 
        src = {`/${numm[6]}.jpg`}
        width = {120}
        height={200}
        layout="fixed"
        ></Image></div>
        <div className={styles.cardtext}>Need To Know<Image 
        src = {`/${numm[7]}.jpg`}
        width = {120}
        height={200}
        layout="fixed"
        ></Image></div>
        <div className={styles.cardtext}>Self Image<Image 
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