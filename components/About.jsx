import styles from '@/styles/About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.imageStack}>
          <img className={styles.topImage} src='/images/about-me2.jpg' alt="Photo of Vince" />
          <img className={styles.bottomImage} src='/images/about-me.jpg' alt="Photo of Vince on a boat" />
        </div>
        <div className={styles.aboutInfo}>
          <div className={styles.aboutTitle}>
            <h2 className="sectionTitle">Hey, I'm Vince</h2>
          </div>
          <p>
              Meet Vince, a skilled woodworker with over 20 years of experience in the trade. When not bringing his creative visions to life through woodworking, he can be found out on the boat, enjoying a peaceful day of fishing. With a passion for both the art of woodworking and the great outdoors, Vince brings a unique perspective to each of his projects.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;