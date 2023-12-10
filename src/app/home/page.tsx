import styles from './page.module.css'
import Image from 'next/image'
import heroImg from '/public/hero-picture.png'
import logoImg from '/public/Logo.png'

export default function Home() {
    return (
        // <main className={styles.main} >
        //     <div className={styles.header}>
        //         <Image src={logoImg}
        //             className={styles.logoImg}
        //             width={200}
        //             alt='logo'></Image>
        //         <h1>Trav</h1>
        //     </div>
        //     <div className={styles.heroSection}>
        //         <div className={styles.heroRing}></div>
        //         <Image src={heroImg}
        //             className={styles.heroImg}
        //             width={600}
        //             style={{
        //                 maxWidth: '100%',
        //                 height: 'auto'
        //             }}
        //             alt='pic'>

        //         </Image>

        //     </div>
        // </main>

        <main className={styles.main} >
            <div className={styles.header}>
                <Image src={logoImg}
                    className={styles.logoImg}
                    width={200}
                    alt='logo'></Image>
                <h1>Trav</h1>
            </div>
            <div className={styles.heroSection}>
                <div className={styles.heroImgContainer}>
                    <div className={styles.heroRing}>
                        <Image src={heroImg}
                            className={styles.heroImg}
                            width={600}
                            style={{
                                maxWidth: '100%',
                                height: 'auto'
                            }}
                            alt='pic'>
                        </Image>
                    </div>
                </div>

            </div>
        </main>

    )
}

