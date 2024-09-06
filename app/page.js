import Link from 'next/link';
import styles from './homePage.module.css'
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <section className={styles.homePage}>
      <h1 className={styles.title}><p>Get things</p>done</h1>
      <Link href={'/'} className={styles.startButton}>
        Start Now
        <FaArrowRight className={styles.arrow}/>
      </Link>
    </section>
  );
}
