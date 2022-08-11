import type { NextPage } from "next";
import Companies from "src/sections/Companies";
import FAQ from "src/sections/FAQ";
import Hero from "src/sections/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <FAQ />
      <Companies />
    </>
  );
};

export default Home;
