import ToolBar from "../../Components/ToolBar/ToolBar.tsx";
import DishForm from "../../Components/DishForm/DishForm.tsx";
import Cart from "../../Components/Cart/Cart.tsx";
import Dishes from "../../Components/Dishes/Dishes.tsx";
import { useState } from "react";
import { DishCart, IDish } from '../../types';
import Modal from '../../Components/UI/Modal/Modal.tsx';

const Plovo = () => {
  const [cart, setCart] = useState<DishCart[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
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

  const addDishToCart = (dish: IDish) => {
    setCart(prevState => {
      const indexDish = prevState.findIndex(dishCart => dishCart.dish === dish);
      if (indexDish === -1) {
        return [...prevState, {dish, amount: 1}];
      } else {
        const cartCopy = [...prevState];
        const copyDishCart = {...cartCopy[indexDish]};
        copyDishCart.amount++;
        cartCopy[indexDish] = copyDishCart;
        return [...cartCopy];
      }
    });
  };

  const closeModalWindow = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Modal show={showModal} title="Order" closeModal={closeModalWindow}>
        <div></div>
      </Modal>
      <header>
        <ToolBar />
      </header>
      <main className="container mt-4">
        <div className="row">
          <div className="col-4 mb-2">
            <DishForm addNewDish={addNewDish} />
          </div>
          <div className="col-4 mb-2">
            <Dishes dishes={dishes} addToCart={addDishToCart}/>
          </div>
          <div className="col-4 mb-2">
            <Cart cart={cart}/>
            <button className="btn btn-primary" onClick={() => setShowModal(!showModal)}>Order</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Plovo;
