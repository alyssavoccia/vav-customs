import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import galleryData from "@/lib/galleryData";
import styles from '@/styles/Gallery.module.css';

const Gallery = () => {
  return (
    <section className={styles.gallery} id="gallery">
      <div className={styles.socialMedia}>
        <div className={styles.socialMediaIcons}>
          <FontAwesomeIcon icon={faFacebookF} className='fa-5x' />
          <FontAwesomeIcon icon={faInstagram} className='fa-5x' />
          <FontAwesomeIcon icon={faYoutube} className='fa-5x' />
        </div>
        <div className={styles.socialMediaText}>
          <p>Keep up with me on social media to see my latest work!</p>
        </div>
      </div>
      <div className={styles.galleryMasonry}>
        {galleryData.map((img, i) => {
          return (
            <div className={styles.galleryImgContainer} key={i}>
              <img src={img.src} alt={img.alt} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Gallery;