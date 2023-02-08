import Link from "next/link";
import styles from '@/styles/BlogSection.module.css';

const BlogSection = () => {
  return (
    <section className={styles.blogSection}>
      <div className={styles.blogSectionContent}>
        <div className={styles.blogContentText}>
          <p className={styles.blogContentTextMain}>Interested in reading more?</p>
          <p>Check out my blog!</p>
        </div>
        <Link className="btn btnPrimary" href='/blog'>See Blog Posts</Link>
      </div>
    </section>
  )
}

export default BlogSection;