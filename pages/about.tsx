import AboutStatistics from "src/sections/About/About.Statistics";
import AboutDescription from "src/sections/About/About.Description";
import s from "src/styles/Home.module.scss";

const AboutPage: React.FC = () => {
  return (
    <div className={s.container}>
      <AboutStatistics />
      <AboutDescription />
    </div>
  );
};

export default AboutPage;