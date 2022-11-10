import s from "./style.module.scss";

const companies = [
  {
    name: "Shield AI",
    logo: "",
    link: "https://shield.ai/",
    alt: "Shield AI Company Sponsor Logo",
  },
  {
    name: "MaXentric",
    logo: "asset/MaXentric_logo.png",
    link: "https://maxentric.com/",
    alt: "MaXentric Company Sponsor Logo",
  },
  {
    name: "MagnaFlow",
    logo: "asset/MagnaFlow_logo.png",
    link: "https://www.magnaflow.com/",
    alt: "MagnaFlow Company Sponsor Logo",
  },

  {
    name: "LPL Financial",
    logo: "asset/LplFinancial_logo.png",
    link: "https://www.lpl.com/",
    alt: "LPL Financial Company Sponsor Logo",
  },
  {
    name: "Xifin",
    logo: "asset/Xifin_logo.png",
    link: "https://www.xifin.com/",
    alt: "Xifin Company Sponsor Logo",
  },
  {
    name: "Flock Freight",
    logo: "",
    link: "https://www.flockfreight.com/",
    alt: "Flock Freight Company Sponsor Logo",
  },
  {
    name: "ASML",
    logo: "",
    link: "https://www.asml.com/en",
    alt: "ASML Company Sponsor Logo",
  },
];

const CompaniesGrid: React.FC = () => {
  return (
    <div className={s.container}>
      {companies.map((company, index) => (
        <a className={s.companyItem} key={index} href={company.link}>
          <img src={company.logo} className={s.companyLogo} alt={company.alt} />
          <h5 className={s.companyName}>{company.name}</h5>
        </a>
      ))}
    </div>
  );
};

export default CompaniesGrid;
