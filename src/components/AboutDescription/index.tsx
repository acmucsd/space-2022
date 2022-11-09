import Typist from "react-text-typist";
import s from "./style.module.scss";

const AboutDescription: React.FC = () => {
  return (
    <div className={s.container}>
      <Typist
        className={s.header}
        sentences={["Shoot for the stars", "Anthony is cool", "The sky is the limit."]}
        typingSpeed={70}
        loop={true}
        startDelay={2000}
        pauseTime={5000}
        cursorSmooth
        deletingSpeed={60}
        hideCursorOnFinish
      />
      <div className={s.descriptionBlock}>
        <span>
          Through SPACE, students and recruiters can connect and interact with each other regarding
          professional opportunities such as internships, full or part-time positions, and student
          programs.
        </span>
        <img src="asset/about-star.png" className={s.img} alt="About Star Image" />
      </div>
    </div>
  );
};

export default AboutDescription;
