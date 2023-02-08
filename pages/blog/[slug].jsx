import Layout from '@/components/Layout';
import { getPosts } from '@/lib/posts';
import styles from '@/styles/PostPage.module.css';

const PostPage = ({ post }) => {
  return (
    <Layout title={post.title}>
      <section className={`pageSection ${styles.blogPost}`}>
        <div className={styles.blogHeader}>
          <p className={styles.blogPostCategory}>{post.category}</p>
          <h1 className={styles.blogPostTitle}>{post.title}</h1>
          <p className={styles.blogPostTagline}>{post.tagline}</p>
          <p className={styles.blogPostDate}>{post.timestamp}</p>
          <img src={post.imgUrl} alt='Blog Post Image' />
        </div>
        <div className={styles.blogPostMain}>
          <div className={styles.blogPostText} dangerouslySetInnerHTML={{ __html: post.body}}></div>
        </div>
      </section>
    </Layout>
  )
}

export default PostPage;

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map(post => ({
    params: {
      slug: post.urlSlug
    }
  }));

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getPosts();
  const blog = posts.filter(post => post.urlSlug === slug);

  return {
    props: {
      post: blog[0]
    }
  }
}