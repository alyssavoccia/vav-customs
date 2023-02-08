import Link from "next/link";
import styles from '@/styles/BlogPostCard.module.css';

const BlogPostCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.urlSlug}`} className={styles.blogPostCard}>
      <img className={styles.blogPostCardImg} src={post.imgUrl} alt='Blog post cover' />
      <div className={styles.blogPostCardContent}>
        <p className={styles.blogPostCardDate}>{post.timestamp}</p>
        <div className={styles.blogPostCardText}>
          <p className={styles.blogPostCardTitle}>{post.title}</p>
          <p>{post.tagline}</p>
        </div>
      </div>
      <div className={styles.blogPostCardFooter}>
        <p className={styles.blogPostCardCat}>{post.category}</p>
      </div>
    </Link>
  )
}

export default BlogPostCard;