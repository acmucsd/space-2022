import AboutStatistics from "./About.Statistics";
import AboutDescription from "./About.Description";
import s from "./style.module.scss";

const About: React.FC = () => {
  return (
    <div className={s.container}>
      <AboutStatistics />
      <AboutDescription />
    </div>
  );
};

export default About;
