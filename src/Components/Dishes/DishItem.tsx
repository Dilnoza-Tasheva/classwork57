import { IDish } from "../../types";
import React from "react";

interface Props {
  dish: IDish;
}

const DishItem: React.FC<Props> = ({ dish }) => {
  const imageUrl =
    "https://lh6.googleusercontent.com/Bu-pRqU_tWZV7O3rJ5nV1P6NjqFnnAs8kVLC5VGz_Kf7ws0nDUXoGTc7pP87tyUCfu8VyXi0YviIm7CxAISDr2lJSwWwXQxxz98qxVfMcKTJfLPqbcfhn-QEeOowjrlwX1LYDFJN";

  const imageStyle = {
    background: `url(${dish.urlImage || imageUrl}) center center / cover no-repeat`,
  };

  return (
    <div className="card mb-3 p-4">
      <div className="row justify-content-between">
        <div className="col-5" style={imageStyle} />

        <div className="col-6">
          <h5 className="card-title">{dish.name}</h5>
          <p className="card-text">{dish.description}</p>
          <p className="card-text">Price: {dish.price} som</p>
        </div>
      </div>
    </div>
  );
};

export default DishItem;
