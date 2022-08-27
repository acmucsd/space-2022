import Typist from "react-text-typist";
import AboutStarImage from "public/about-images/about-star.png";
import s from "./style.module.scss";

const AboutDescription: React.FC = () => {
  return (
    <section className={s.description}>
      <Typist
        className={s.header}
        sentences={["Shoot for the stars"]}
        typingSpeed={40}
        loop={false}
        hideCursorOnFinish
      />
      <div className={s.block}>
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
          className={s.img}
          alt="About Star Image"
        />
      </div>
    </section>
  );
};

export default AboutDescription;
