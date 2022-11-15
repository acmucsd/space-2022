import type { NextPage } from "next";
import Companies from "src/sections/Companies";
import About from "src/sections/About";
import FAQ from "src/sections/FAQ";
import Hero from "src/sections/Hero";
import SEO from "src/components/SEO";
import StarCanvas from "src/components/StarCanvas";

import "src/styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <main>
      <SEO />
      <StarCanvas />
      <Hero />
      <About />
      <FAQ />
      <Companies />
    </main>
  );
};

export default Home;
