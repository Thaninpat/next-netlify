import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const newPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netlify</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>New Page</h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <div className={styles.grid}>
          <Link href='/'>back to home page &rarr;</Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default newPage
