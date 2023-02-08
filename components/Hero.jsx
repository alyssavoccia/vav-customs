import styles from '@/styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <img className={styles.heroLogo} src='/images/HeroLogo.png' alt="VAV Customs Logo" />
    </section>
  )
}

export default Hero;