import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenRuler, faBolt, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import styles from '@/styles/StoreServices.module.css';

const StoreServices = () => {
  return (
    <section className={styles.storeServices}>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesItem}>
          <FontAwesomeIcon className="fa-2x" icon={faPenRuler} />
          <h3>Customizable</h3>
          <p>We want this to be your dream item. We support fully custom builds, down to the finish and stain.</p>
        </div>
        <div className={styles.servicesItem}>
          <FontAwesomeIcon className="fa-2x" icon={faBolt} />
          <h3>Quick Response</h3>
          <p>No one likes waiting. We strive to respond to customers and ship orderes as quickly as possible.</p>
        </div>
        <div className={styles.servicesItem}>
          <FontAwesomeIcon className="fa-2x" icon={faPeopleGroup} />
          <h3>Customer Service</h3>
          <p>We know this is a big purchase. Which is why we give personalized attention and tailored solutions for each customer.</p>
        </div>
      </div>
    </section>
  )
}

export default StoreServices;