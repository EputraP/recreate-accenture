import "./accenture-news.scss";

const AccentureNews = () => {
  const data: { date: string; desc: string }[] = [
    {
      date: "2023 September 28",
      desc: "Accenture Reports Fourth-Quarter and Strong Full-Year Fiscal 2023 Results",
    },
    {
      date: "2023 November 06",
      desc: "PEUGEOT Appoints Accenture Song as Global Creative Agency of Record",
    },
    {
      date: "2023 November 13",
      desc: "Vodafone Announces Strategic Partnership with Accenture to Accelerate the Commercialization of its Shared Operations",
    },
    {
      date: "2023 September 28",
      desc: "Accenture Reports Fourth-Quarter and Strong Full-Year Fiscal 2023 Results",
    },
    {
      date: "2023 November 06",
      desc: "PEUGEOT Appoints Accenture Song as Global Creative Agency of Record",
    },
    {
      date: "2023 November 13",
      desc: "Vodafone Announces Strategic Partnership with Accenture to Accelerate the Commercialization of its Shared Operations",
    },
  ];

  return (
    <div className="accenture-news">
      <h3>Accenture news</h3>
      <div className="slider">
        <div className="slide-track">
          {data.map((data: any, index: number) => (
            <div key={index} className="slide-news">
              <label>{data.date}</label>
              <p>{data.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccentureNews;
