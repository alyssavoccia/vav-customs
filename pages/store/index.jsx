import Link from "next/link";
import Layout from "@/components/Layout";
import StoreNav from "@/components/StoreNav";
import { shopifyClient, parseShopifyResponse } from "@/lib/shopify";
import StoreCategories from "@/components/StoreCategories";
import StoreServices from "@/components/StoreServices";
import ProductCard from "@/components/ProductCard";
import styles from '@/styles/Store.module.css';

const store = ({ products }) => {
  return (
    <Layout title='Store'>
      <StoreNav />
      <div className={styles.storeBanner}>
        <div className={styles.bannerContent}>
          <h1>Custom Woodwork is Here</h1>
          <p>Have a specific piece that you're looking for? We're able to turn your dream item into a reality. Check out the custom build page for more info.</p>
          <Link href='/custom-build'>Custom Build</Link>
        </div>
        <img className="" src='/images/grid-images/shelf3.jpg' />
      </div>
      <div className={styles.categoryContainer}>
        <h2>Shop by Category</h2>
        <StoreCategories />
      </div>
      <StoreServices />
      <div className={styles.storeContainer}>
        <h2>Shop All Products</h2>
        <div className='storeProductsContainer'>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default store;

export const getServerSideProps = async () => {
  const products = await shopifyClient.product.fetchAll();

  return {
    props: {
      products: parseShopifyResponse(products)
    }
  }
}