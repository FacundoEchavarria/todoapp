import styles from '@/styles/topBar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const TopBar = () => {
  return (
    <header className={styles.header}>
      <Link href={'/'} className={styles.logo}>
        <Image src={'/assets/logo.ico'} alt='Logo' width={80} height={80}/>
      </Link>
      <div>
        <Link href={'/login'} className={styles.links}>LogIn</Link>
        <Link href={'/register'} className={`${styles.links} ${styles.signUp}`}>Sign Up</Link>
      </div>
    </header>
  )
}

export default TopBar