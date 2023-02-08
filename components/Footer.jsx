import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <p className={styles.footerTitle}>Let's make your dream item</p>
        <div className={styles.socialIcons}>
          <FontAwesomeIcon className='fa-2x' icon={faFacebookF} />
          <FontAwesomeIcon className='fa-2x' icon={faInstagram} />
          <FontAwesomeIcon className='fa-2x' icon={faAt} />
        </div>
      </div>
    </footer>
  )
}

export default Footer;