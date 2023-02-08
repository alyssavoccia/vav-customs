import Layout from '@/components/Layout';
import CategoryList from '@/components/CategoryList';
import BlogPostCard from '@/components/BlogPostCard';
import { getPosts } from '@/lib/posts';
import styles from '@/styles/BlogPage.module.css';

const CategoryPage = ({ posts, categoryName, categories }) => {
  const pageTitle = {
    woodworking: 'Woodworking',
    misc: 'Misc',
    lifestyle: 'Lifestyle',
    tutorial: 'Tutorial'
  }

  return (
    <Layout title={`${pageTitle[categoryName]} | Blog`}>
      <section className={`pageSection ${styles.blogSection}`}>
        <div className={styles.categoryTitleContainer}>
          <h1 className='sectionTitle'>Posts in {pageTitle[categoryName]}</h1>
        </div>
        <CategoryList categories={categories} isActive={pageTitle[categoryName]} />
        <div className={styles.blogPosts}>
          {posts.map((post) => (
            <BlogPostCard key={post.title} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default CategoryPage;

export async function getStaticPaths() {
  const posts = await getPosts();

  const categories = posts.map(post => {
    return post.category.toLowerCase();
  });

  const paths = categories.map(category => ({
    params: { category_name: category }
  }));

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { category_name } }) {
  const posts = await getPosts();

  // const categories = posts.map(post => post.category);
  const categories = posts.map(post => post.category);
  const uniqueCategories = [...new Set(categories)];

  const categoryPosts = posts.filter(post => post.category.toLowerCase() === category_name);

  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
      categories: uniqueCategories
    }
  }
}