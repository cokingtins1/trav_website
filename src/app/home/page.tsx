import styles from './page.module.css'
import Image from 'next/image'
import heroImg from '/public/hero-picture.png'
import logoImg from '/public/Logo.png'

export default function Home() {
    return (
        <main className={styles.main} >
            <div className={styles.header}>
                <Image src={logoImg}
                    className={styles.logoImg}
                    width={200}
                    alt='logo'></Image>

            </div>
            <div className={styles.heroSection}>
                <Image src={heroImg}
                    className={styles.heroImg}
                    width={500}
                    height={500}
                    style={{
                        maxWidth: '100%',
                        height: 'auto'
                    }}
                    alt='pic'></Image>
            </div>
        </main>
    )
}