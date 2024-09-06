import styles from '@/styles/footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Made by - <Link href={'https://www.linkedin.com/in/facundo-echavarria-pacios-718089276/'}>Facundo Echavarria Pacios</Link></p>
    </footer>
  )
}

export default Footer