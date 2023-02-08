import Layout from "@/components/Layout";
import styles from '@/styles/TheShop.module.css';

const TheShop = () => {
  return (
    <Layout title='The Shop'>
      <section className="pageSection">
        <div className={styles.shopTitleContainer}>
          <h1 className="sectionTitle">The Shop</h1>
        </div>
        <div className={styles.shopContent}>
          <img src="/images/theShop.jpg" alt="Different woodworking tools hanging on the wall." />
          <div className={styles.shopFavorites}>
            <div className={styles.shopFavoritesTitle}>
              <h2 className="sectionSubtitle">Tools in the Shop</h2>
            </div>
          </div>
          <div className={styles.shopRecommendations}>
            <div className={styles.shopRecommendationsTitle}>
              <h2 className="sectionSubtitle">Other Tools I Recommend</h2>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default TheShop;