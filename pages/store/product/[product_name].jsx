import { useContext } from "react";
import Layout from "@/components/Layout";
import { shopifyClient, parseShopifyResponse } from "@/lib/shopify";
import { addItemToCart, updateTotalItemsInCart } from "@/context/cartActions";
import StoreNav from "@/components/StoreNav";
import styles from '@/styles/ProductPage.module.css';
import CartContext from "@/context/CartContext";

const ProductPage = ({ product }) => {
  const { checkout, dispatch } = useContext(CartContext);

  const handleAdd = async () => {
    const newCheckoutObj = await addItemToCart(shopifyClient, checkout, product.variants[0].id, 1);
    dispatch({ type: 'ADD_VARIANT_TO_CART', payload: newCheckoutObj });

    const totalItems = await updateTotalItemsInCart(newCheckoutObj);
    dispatch({ type: 'UPDATE_TOTAL_ITEMS_IN_CART', payload: totalItems });
  };

  return (
    <Layout title={`${product.title} | VAV Customs`}>
      <StoreNav />
      <div className={styles.productPage}>
        <div className={styles.productContainer}>
          <div>
            <img className={styles.productImg} src={product.variants[0].image.src} alt={`Picture of ${product.title}`} />
          </div>
          <div>
            <div className={styles.productHeader}>
              <h1 className={styles.productTitle}>{product.title}</h1>
              <p>${parseFloat(product.variants[0].price.amount).toFixed(2)}</p>
            </div>
            <div className={styles.productInfo}>
              <h2>Description</h2>
              {product.description}
              <button disabled={!product.availableForSale} className={`${styles.cartBtn} ${!product.availableForSale ? styles.noHover : ''}`} onClick={handleAdd}>{product.availableForSale ? 'Add to Cart' : 'Sold Out'}</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductPage;

export const getServerSideProps = async (context) => {
  const { product_name } = context.query;
  const products = await shopifyClient.product.fetchAll();
  const allProducts = parseShopifyResponse(products);
  
  const product = allProducts.filter(product => product.handle === product_name);

  return {
    props: {
      product: product[0]
    }
  }
}