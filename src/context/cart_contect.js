import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";


const CartContext = createContext();
 const getLocalCartData =()=>{
  let localCartData = localStorage.getItem("thapacart");
  if(localCartData === []){
    return [];
  }else{
    return JSON.parse(localCartData)
  }
 }

const initialState = {
  // cart: [],
  cart : getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  // increase or decresase
  const setDecrease = (id) =>{
    dispatch({ type: "Set_Decreases", payload: id});
  }

  const setIncrease = (id) =>{
    dispatch({ type: "Set_Increase", payload: id});
  }

  const removeItem = (id) => {
    dispatch({ type: "Remove_Item", payload: id });
  };

  // to clear cart
  const clearCart = () => {
    dispatch({ type: "Clear_Cart"});
  };



  // to add to cart in local storage
  // get or set are use (get = pana or set = add krna )

  useEffect(() => {
    dispatch({type:"Cart_Total_Item"});
    dispatch({type:"Cart_Total_Price"});
    localStorage.setItem("thapacart",JSON.stringify(state.cart))
  },[state.cart]);




  return (
    <CartContext.Provider value={{ ...state, addToCart,removeItem,clearCart,setIncrease,setDecrease}}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };