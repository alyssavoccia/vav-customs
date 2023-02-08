import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench, faArrowUpRightDots, faPeopleArrowsLeftRight } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/Services.module.css';

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.servicesTitle}>
        <h2 className="sectionTitle">What We Provide</h2>
      </div>
      <div className={styles.servicesContent}>
        <div className={styles.itemsContainer}>
          <div className={styles.item}>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon className='fa-2x' icon={faScrewdriverWrench} />
            </div>
            <div className={styles.itemDesc}>
              <h3>One-of-a-Kind</h3>
              <p>Custom one-of-a-kind wood pieces. Select from one of our pre-made pieces, or message us to create your dream item.</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon className='fa-2x' icon={faArrowUpRightDots} />
            </div>
            <div className={styles.itemDesc}>
              <h3>High Quality</h3>
              <p>High quality products require high quality materials. We source only the best raw materials to create our products.</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon className='fa-2x' icon={faPeopleArrowsLeftRight} />
            </div>
            <div className={styles.itemDesc}>
              <h3>Customer Service</h3>
              <p>Customer service you can count on. We understand this is an investment and we want to ensure that you are getting your dream piece.</p>
            </div>
          </div>
        </div>
        <div className={styles.shopInfo}>
          <div className={styles.shopInfoText}>
            <p className={styles.shopInfoTitle}>Want to see what goes on behind the scenes?</p>
            <p>See the shop setup, what tools I use, and what I recommend to get started!</p>
          </div>
          <Link className='btn btnPrimary' href='/the-shop'>Check out The Shop!</Link>
        </div>
      </div>
    </section>
  )
}

export default Services;