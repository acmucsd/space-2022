import s from "./style.module.scss";
// import title from './images/space_title.png';
// import planet from './images/space_planet.png';
// import spaceship from './images/space_spaceship.png';
// import trail from './images/space_trail.png';

import Image from 'next/image';

const Hero: React.FC = () => {

  return <>
    <div className = {s.heroContainer}>
      <div className = {s.title}>
        <img src="asset/space_title.png" alt = "space"/>
      </div>
      <div className = {s.spaceship}>
        <img src="asset/space_spaceship.png" alt="spaceship"/>
      </div>
      <div className = {s.trail}>
        <img src="asset/space_trail.png" alt="trail"/>
      </div>
      <div className = {s.heroDescription}>
        <div className = {s.heroSubtitle}>StartuP: ACM&apos;s Career Expo</div>
        <div className = {s.heroInfo}>
          <div>Price Center West Ballroom</div>
          <div>November 15th, 2022 @ TBD</div>
          <button className = {s.registerButton}>Register Today!</button>
        </div>
      </div>
      <div className = {s.planet}>
        <img src="asset/space_planet.png" alt="planet"/>
      </div>
    </div>
  
  </>
}

export default Hero;