import "./home.scss";
import TextMoveOnMouseMove from "./component/text-move-onMouseMove/text-move-onMouseMove";
import CardEvent from "./component/card-event/card-event";
import Carousel from "./component/carousel/carousel";
import DegValue from "./component/value-360/deg-value";
import AccentureWoma from "../../assets/Accenutre-Woman-Smiling-With-Other-Woman-768x432_rad-3x2 (1).png";
import Remaining from "../../assets/reimagining-saudi-arabia-economy-glanceskim-640x452_rad-3x2 (1).png";
import MorningEat from "../../assets/Accenture-Father-Daughter-Breakfast-768x768_rad-3x2 (1).png";

const home = () => {
  return (
    <div className="home-component">
      <TextMoveOnMouseMove />
      <CardEvent />
      <DegValue />
      <Carousel
        data={[
          {
            src: AccentureWoma,
            alt: "Image 1 for carousel",
            title: "Creating a sense of belonging",
            desc: "A global retailer and Accenture co-created a multiyear inclusion and diversity strategy to facilitate a greater sense of belonging for their people.",
          },
          {
            src: Remaining,
            alt: "Image 2 for carousel",
            title: "Mondelēz International’s Data and AI Transformation",
            desc: "The global snacking giant is laying a tasty foundation for reinvention and growth. Accenture is helping Mondelēz International to embrace the power of data and AI, build a strong digital core and implement interoperable cloud-enabled technology.",
          },
          {
            src: MorningEat,
            alt: "Image 3 for carousel",
            title: "Reimagining Saudi Arabia’s economy",
            desc: "In just five years, the Saudi Data and Artificial Intelligence Authority, in partnership with Accenture, has built a strong foundation for a globally competitive, data- and AI-driven economy.",
          },
        ]}
      />

      <div className="slides">
        <h2>test</h2>
      </div>
      <div className="slides">
        <h2>test</h2>
      </div>
      <div className="slides">
        <h2>test</h2>
      </div>
    </div>
  );
};

export default home;
