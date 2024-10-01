import React, { useState } from "react";
import { IDish, IDishMutation } from "../../types";

interface Props {
  addNewDish: (dish: IDish) => void;
}

const DishForm: React.FC<Props> = ({ addNewDish }) => {
  const [dish, setDish] = useState<IDishMutation>({
    name: "",
    description: "",
    price: 0,
    urlImage: "",
  });

  const changeDish = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setDish((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      dish.name.trim().length === 0 &&
      dish.description.trim().length === 0 &&
      dish.price === 0
    ) {
      alert("Try again!");
    } else {
      addNewDish({
        id: String(new Date()),
        ...dish,
        price: Number(dish.price),
      });

      setDish({
        name: "",
        description: "",
        price: 0,
        urlImage: "",
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Add new dish</h3>

      <div className="form-group mb-2">
        <label htmlFor="name">Title:</label>
        <input
          type="text"
          value={dish.name}
          onChange={changeDish}
          id="name"
          name="name"
          required
          className="form-control"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="description">Description:</label>
        <textarea
          value={dish.description}
          onChange={changeDish}
          name="description"
          id="description"
          required
          className="form-control"
        ></textarea>
      </div>

      <div className="form-group mb-2">
        <label htmlFor="urlImage">Url image:</label>
        <input
          type="url"
          value={dish.urlImage}
          onChange={changeDish}
          id="urlImage"
          name="urlImage"
          className="form-control"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          value={dish.price}
          onChange={changeDish}
          id="price"
          name="price"
          min={1}
          required
          className="form-control"
        />
      </div>

      <button className="btn btn-primary">Add</button>
    </form>
  );
};

export default DishForm;
