import type { NextPage } from 'next'
import About from 'src/sections/About';
import Companies from 'src/sections/Companies';
import FAQ from 'src/sections/FAQ';
import Hero from 'src/sections/Hero';
import style from 'src/styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={style.container}>
      <Hero />
      <About />
      <FAQ />
      <Companies />
    </div>
  )
}

export default Home
