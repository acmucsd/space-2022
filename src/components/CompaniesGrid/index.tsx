import s from "./style.module.scss";

const companies = [
  "Merck",
  "MaXentric",
  "Company Name",
  "Company Name",
  "Company Name",
  "Company Name",
];

const CompaniesGrid: React.FC = () => {
  return (
    <div className={s.container}>
      {companies.map((companyName, index) => (
        <div className={s.companyItem} key={index}>
          <h5>{companyName}</h5>
        </div>
      ))}
    </div>
  );
};

export default CompaniesGrid;
