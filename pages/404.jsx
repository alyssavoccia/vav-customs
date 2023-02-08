import Layout from "@/components/Layout";
import Link from "next/link";
import styles from '@/styles/NotFound.module.css';

const NotFoundPage = () => {
  return (
    <Layout title='Page Not Found'>
      <section className={`pageSection ${styles.notFoundSection}`}>
        <Link href='/'>
          <img src='/images/mini-logo-dark.png' alt="VAV Customs Logo" />
        </Link>
        <h1>Sorry!</h1>
        <p>This page does not exist.</p>
        <Link href='/' className={styles.notFoundLink}>Go Home</Link>
      </section>
    </Layout>
  )
}

export default NotFoundPage;