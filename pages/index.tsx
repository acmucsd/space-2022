import type { NextPage } from "next";
import Companies from "src/sections/Companies";
import About from "src/sections/About";
import FAQ from "src/sections/FAQ";
import Hero from "src/sections/Hero";
import StarCanvas from "src/components/StarCanvas";
import Navbar from "src/components/Navbar";

import "src/styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <main>
      <Navbar />
      <StarCanvas />
      <Hero/>
      <About/>
      <FAQ/>
      <Companies/>
    </main>
  );
};

export default Home;
