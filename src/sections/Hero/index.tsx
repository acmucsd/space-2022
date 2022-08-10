import s from "./style.module.scss";
import title from './images/space_title.png';
import planet from './images/space_planet.png';
import spaceship from './images/space_spaceship.png';
import trail from './images/space_trail.png';

import Image from 'next/image';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from 'react'

const Hero: React.FC = () => {

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
      await console.log(container)
  }, []);

  return <>
   <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        particles: {
          color: {
            value: "#FFFFFF",
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 90,
          },
          opacity: {
            animation: {
              enable: true,
              speed: 1,
              sync: false,
              opacity_min: 0
            },
            value: 1
          },
          wobble:{
            enable: true,
            distance: 0.25,
            speed: 0.5
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 4 },
          },
        },
        detectRetina: true,
      }}
    />
    <div className = {s.heroContainer}>
      <div className = {s.title}>
        <Image src={title} alt = "space"></Image>
      </div>
      <div className = {s.spaceship}>
        <Image src={spaceship} alt="spaceship"></Image>
      </div>
      <div className = {s.planet}>
        <Image src={planet} alt="planet"></Image>
      </div>
      <div className = {s.trail}>
        <Image src={trail} alt="trail"></Image>
      </div>
      <div className = {s.heroDescription}>
        <div className = {s.heroSubtitle}>StartuP: ACM's Career Expo</div>
        <div className = {s.heroInfo}>
          <div>Price Center West Ballroom</div>
          <div>November 15th, 2022 @ TBD</div>
          <button className = {s.registerButton}>Register Today!</button>
        </div>
      </div>
    </div>
  
  </>
}

export default Hero;