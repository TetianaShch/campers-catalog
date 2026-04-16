import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Campers of your dreams</h1>
        <p className={styles.text}>
          You can find everything you want in our catalog
        </p>
        <button>View Now</button>
      </div>
    </section>
  );
};

export default Hero;
