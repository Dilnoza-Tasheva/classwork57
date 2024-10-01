import ToolBar from "../../Components/ToolBar/ToolBar.tsx";
import DishForm from "../../Components/DishForm/DishForm.tsx";
import Cart from "../../Components/Cart/Cart.tsx";
import Dishes from "../../Components/Dishes/Dishes.tsx";
import { useState } from "react";
import { IDish } from "../../types";

const Plovo = () => {
  const [dishes, setDishes] = useState<IDish[]>([
    {
      id: "1",
      name: "Plov",
      description: "Taste",
      price: 200,
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Polu.jpg/274px-Polu.jpg",
    },
    {
      id: "2",
      name: "Pizza",
      description: "Cheesy",
      price: 500,
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Polu.jpg/274px-Polu.jpg",
    },
    {
      id: "3",
      name: "Taco",
      description: "Crunchy",
      price: 360,
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Polu.jpg/274px-Polu.jpg",
    },
  ]);

  const addNewDish = (dish: IDish) => {
    setDishes((prevState) => [...prevState, dish]);
  };

  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main className="container mt-4">
        <div className="row">
          <div className="col-4 mb-2">
            <DishForm addNewDish={addNewDish} />
          </div>
          <div className="col-4 mb-2">
            <Dishes dishes={dishes} />
          </div>
          <div className="col-4 mb-2">
            <Cart />
          </div>
        </div>
      </main>
    </>
  );
};

export default Plovo;
