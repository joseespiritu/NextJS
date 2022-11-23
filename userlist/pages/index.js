import Link from "next/link"
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>User List | Home</title>
        <meta name="keywords" content="users" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem et, recusandae fuga laboriosam ipsam ipsum nihil sit enim totam, nulla molestiae. Ut hic obcaecati possimus recusandae nobis voluptas cumque quos.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem et, recusandae fuga laboriosam ipsam ipsum nihil sit enim totam, nulla molestiae. Ut hic obcaecati possimus recusandae nobis voluptas cumque quos.</p>
        <Link href="/users">
          <a className={styles.btn}>See User Listing</a>
        </Link>
      </div>
    </>
  )
}
