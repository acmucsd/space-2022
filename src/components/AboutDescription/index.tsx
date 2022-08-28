import Typist from "react-text-typist";
import s from "./style.module.scss";

const AboutDescription: React.FC = () => {
  return (
    <div className={s.container}>
      <Typist
        className={s.header}
        sentences={["Shoot for the stars"]}
        typingSpeed={40}
        loop={false}
        hideCursorOnFinish
      />
      <div className={s.descriptionBlock}>
        <span>
          Through SPACE, students and recruiters can connect and interact with
          each other regarding professional opportunities such as internships,
          full or part-time positions, and student programs.
        </span>
        <img
          src="asset/about-star.png"
          className={s.img}
          alt="About Star Image"
        />
      </div>
    </div>
  );
};

export default AboutDescription;
