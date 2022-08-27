import type { NextPage } from "next";
import Companies from "src/sections/Companies";
import About from "src/sections/About";
import FAQ from "src/sections/FAQ";
import Hero from "src/sections/Hero";

import "src/styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <FAQ />
      <About />
      <Companies />
    </>
  );
};

export default Home;
