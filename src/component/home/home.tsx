import "./home.scss";
import TextMoveOnMouseMove from "./component/text-move-onMouseMove/text-move-onMouseMove";
import CardEvent from "./component/card-event/card-event";
import Carousel from "./component/carousel/carousel";
import DegValue from "./component/value-360/deg-value";

const home = () => {
  return (
    <div className="home-component">
      <TextMoveOnMouseMove />
      <CardEvent />
      <DegValue />
      <Carousel
        data={[
          {
            src: "https://picsum.photos/seed/img1/600/400",
            alt: "Image 1 for carousel",
          },
          {
            src: "https://picsum.photos/seed/img2/600/400",
            alt: "Image 2 for carousel",
          },
          {
            src: "https://picsum.photos/seed/img3/600/400",
            alt: "Image 3 for carousel",
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
