import { shopifyClient, parseShopifyResponse } from "@/lib/shopify";
import Layout from '@/components/Layout';
import StoreNav from '@/components/StoreNav';
import ProductCard from "@/components/ProductCard";
import styles from '@/styles/StoreCategoryPage.module.css';

const CategoryPage = ({ products, categoryName }) => {
  const categories = {
    woodwork: 'Woodwork',
    plans: 'Plans',
    tools: 'Tools',
    merch: 'Merch'
  };
  console.log(products)
  return (
    <Layout title={categories[categoryName]}>
      <StoreNav />
      <div className="pageSection">
        <div className={`${categoryName}CategoryTitle`}>
          <h1 className="sectionTitle">{categories[categoryName]}</h1>
        </div>
        <div className={`storeProductsContainer ${styles.categorySection}`}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {products.length === 0 && (
          <p className={styles.categoryNoItems}>Sorry, currently no items available.</p>
        )}
      </div>
    </Layout>
  )
}

export default CategoryPage;

export const getServerSideProps = async (context) => {
  const { category_name } = context.query;
  const products = await shopifyClient.product.fetchAll();
  const allProducts = parseShopifyResponse(products);
  
  const category = category_name;
  
  const categoryProducts = allProducts.filter(product => product.productType === category_name);

  return {
    props: {
      products: categoryProducts,
      categoryName: category
    }
  }
}