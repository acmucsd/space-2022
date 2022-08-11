import React from "react";
import Typist from "react-text-typist";
import AboutStarImage from "public/about-images/about-star.png";
import s from "./style.module.scss";

const AboutDescription: React.FC = () => {
  return (
    <section className={s.about__description}>
      <Typist
        className={s.about__description__header}
        sentences={["Shoot for the stars"]}
        typingSpeed={40}
        loop={false}
        hideCursorOnFinish
      />
      <div className={s.about__description__block}>
        <div>
          <br />
          <span>Through SPACE, students and recruiters </span>
          <br />
          <span>can connect and interact with each</span>
          <br />
          <span>other regarding professional</span>
          <br />
          <span>opportunities such as internships, full or</span>
          <br />
          <span>part-time positions, and student </span>
          <br />
          <span>programs.</span>
        </div>
        <img
          src={AboutStarImage.src}
          className={s["about__description__block__star-img"]}
          alt="About Star Image"
        />
      </div>
    </section>
  );
};

export default AboutDescription;
