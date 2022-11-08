import s from "./style.module.scss";

const Hero: React.FC = () => {
  return (
    <>
      <div className={s.heroContainer}>
        <img src="asset/hero_title.png" alt="hero" className={s.heroTitle} />
        <img src="asset/hero_planet.png" alt="planet" className={s.heroPlanet} />
        <div className={s.heroDescription}>
          <div className={s.heroSubtitle}>ACM at UCSD&apos;s Annual Career Fair</div>
          <div className={s.heroInfo}>
            <div>Price Center West Ballroom</div>
            <div>November 15th, 2022 (10am to 4pm)</div>
            <a className={s.registerButton} href="https://acmurl.com/space-registration">
              Register Today!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
