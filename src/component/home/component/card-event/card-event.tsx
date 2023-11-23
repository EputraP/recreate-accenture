import Card from "./component/card";
import "./card-event.scss";

const dummy_data = [
  {
    label: "RESEARCH REPORT",
    background: "black",
    image:
      "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Marquee-hero-Image-New%3Arad-5x3?ts=1700184505548&dpr=off",
    title: "Accenture Life Trends 2024",
    desc: `We’re in a state of flux, but there’s hope and unparalleled
opportunity. Five trends explore people’s evolving relationships with
businesses and technology. What do you need to know to navigate the
coming year and beyond?`,
  },
  {
    label: "RESEARCH REPORT",
    background: "black",
    image:
      "https://dynamicmedia.accenture.com/is/image/accenture/IX%20SCO%20ITL%20Hero_1920x1080%3Arad-5x3?ts=1700151019002&dpr=off",
    title: "Resiliency in the making",
    desc: `There’s never been a better time for big change. Businesses must embed resilience across their engineering, supply, production and operations. And they must do it now, before disruption strikes next.`,
  },
  {
    label: "EVENT",
    background: "white",
    image:
      "https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg?w=1060&t=st=1700723236~exp=1700723836~hmac=4aaa2e4501ee2033d7bc81f0cb327a74d8fa849df59a98e0e9fe1d4f12867d80",
    title: "COP28: Accenture at UN Climate Change Conference 2023",
    desc: "Join our sessions virtually or in person to learn about practical topics that will bring cooperation between business and policymakers to life, and help accelerate decarbonization across industries.",
  },
  {
    label: "RESEARCH REPORT",
    background: "black",
    image:
      "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Catalyst-Women-On-The-Frontline-Hero-3840x2160%3Arad-5x3?ts=1700121673168&dpr=off",
    title: "Enabling women on the frontline to thrive, stay, and perform",
    desc: "In a report by Catalyst in partnership with Accenture, we interviewed frontline women to understand how companies can better position themselves to increase employee satisfaction, morale and engagement in frontline roles.",
  },
  {
    label: "RESEARCH REPORT",
    background: "black",
    image:
      "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Network-1920x1080%3Arad-5x3?ts=1699486670066&dpr=off",
    title: "Modern networks: How to fast track competitive advantage",
    desc: "Digitalization is outpacing network capacity and innovation spend, making networks a bottleneck to reinvention. Our research explores how companies are approaching network modernization and reveals three keys to success.",
  },
  {
    label: "RESEARCH REPORT",
    background: "black",
    image:
      "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Reinvent-Productivity-Hero-3840x2160%3Arad-5x3?ts=1700256022406&dpr=off",
    title: "Productivity: The next competitive edge",
    desc: "Companies often focus on managing costs during uncertain times. But some are reinventing their organization for productivity – using generative AI to strengthen financial resilience, increase competitiveness and drive growth.",
  },
  {
    label: "RESEARCH REPORT",
    background: "white",
    image:
      "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Net-Zero-Web-Hero-3840x2160%3Arad-5x3?ts=1700241212039&dpr=off",
    title: "Destination net zero",
    desc: "Business has a critical role to play in achieving net zero to limit global warming to 1.5°C. Business commitment to net zero continues to grow, but action continues to lag.",
  },
  {
    label: "CASE STUDY",
    image:
      "https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg?w=1060&t=st=1700723236~exp=1700723836~hmac=4aaa2e4501ee2033d7bc81f0cb327a74d8fa849df59a98e0e9fe1d4f12867d80",
    background: "white",
    title: "Be our guest: Marriott's new global HR hub",
    desc: "Learn how Marriott, Accenture and Oracle created an HR solution that will improve the associate experience across 31 brands and 139 countries.",
  },
];

const CardEvent = () => {
  return (
    <div className="card-event-component">
      {dummy_data.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </div>
  );
};

export default CardEvent;
