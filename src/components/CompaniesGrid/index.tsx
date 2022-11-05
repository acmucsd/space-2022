import s from "./style.module.scss";

const companies = [
  {
    name: "Merck",
    img: "asset/about-star.png",
    link: "https://www.google.com/",
  },
  { name: "Merck", img: "asset/about-star.png", link: "" },
  { name: "Merck", img: "asset/about-star.png", link: "" },
  { name: "Merck", img: "asset/about-star.png", link: "" },
  { name: "Merck", img: "asset/about-star.png", link: "" },
  { name: "Merck", img: "asset/about-star.png", link: "" },
];

const CompaniesGrid: React.FC = () => {
  return (
    <div className={s.container}>
      {companies.map((company, index) => (
        <a className={s.companyItem} key={index} href={company.link}>
          <img src={company.img} className={s.img} alt="About Star Image" />
          <h5>{company.name}</h5>
        </a>
      ))}
    </div>
  );
};

export default CompaniesGrid;
