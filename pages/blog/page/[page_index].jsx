import Layout from "@/components/Layout";
import BlogPostCard from "@/components/BlogPostCard";
import { getPosts } from "@/lib/posts";
import Pagination from "@/components/Pagination";
import CategoryList from "@/components/CategoryList";
import styles from '@/styles/BlogPage.module.css';

const BlogPage = ({ posts, numPages, currentPage, categories }) => {
  return (
    <Layout title='Blog | VAV Customs'>
      <section className={`pageSection ${styles.blogSection}`}>
        <div className={styles.blogTitleContainer}>
          <h1 className="sectionTitle">Blog</h1>
        </div>
        <CategoryList categories={categories} />
        <div className={styles.blogPosts}>
          {posts.map((post) => (
            <BlogPostCard key={post.title} post={post} />
          ))}
        </div>
        <Pagination currentPage={currentPage} numPages={numPages} />
      </section>
    </Layout>
  )
}

export default BlogPage;

export async function getStaticPaths() {
  const posts = await getPosts();

  const numPages = Math.ceil(posts.length / 6);

  const paths = [];

  for (let i = 0; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() }
    });
  }

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.page_index) || 1);

  const posts = await getPosts();

  const categories = [];
  posts.forEach(post => {
    post.category && categories.push(post.category);
  });

  const uniqueCategories = [...new Set(categories)];

  const numPages = Math.ceil(posts.length / 6);
  const pageIndex = page - 1;
  const orderedPosts = posts.slice(pageIndex * 6, (pageIndex + 1) * 6);

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
      categories: uniqueCategories
    }
  }
}