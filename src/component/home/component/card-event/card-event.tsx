import Card from "./component/card";
import "./card-event.scss";

const dummy_data = [1, 2, 3, 4];

const CardEvent = () => {
  return (
    <div className="card-event-component">
      {dummy_data.map((data, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default CardEvent;
