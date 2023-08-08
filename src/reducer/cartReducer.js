const cartReducer = (state, action) => {
  // add to cart
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
  
    // TACKLE EXIXTING PRODUCT NOT SHOW IN ANOTHER TIME ONLY QUNTITY UPDATED

    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id+ color
    );
   
    if(existingProduct){
      let updateProduct = state.cart.map((curElem)=>{
        if(curElem.id === id+color){
          let newAmount = curElem.amount+amount;

          if(newAmount>=curElem.max){
            newAmount = curElem.max;
          }
          return{
            ...curElem,
            amount:newAmount,
          }
        }else{
          return curElem;
        }
        
      });
      return {
        ...state,
        cart: updateProduct,
      };

    }else{
    let  cartProduct = {
      id: id + color,
      name: product.name,
      color,
      amount,
      image: product.image[0].url,
      price: product.price,
      max: product.stock,
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }
  }

  // decreases 
  if(action.type  === "Set_Decreases"){
    let updateProduct = state.cart.map((curElem)=>{
      if(curElem.id === action.payload){
        let decAmount = curElem.amount-1;

        if(decAmount<=1){
          decAmount = 1;
        }

        return{
          ...curElem,
          amount:decAmount,
        };
      }else{
        return curElem;
      }
    })
    return {...state,cart:updateProduct}
  
  }

  //  increse
  if(action.type  === "Set_Increase"){
    let updateProduct = state.cart.map((curElem)=>{
      if(curElem.id === action.payload){
        let incAmount = curElem.amount+1;

        if(incAmount >= curElem.max){
          incAmount  = curElem.max;
        }

        return{
          ...curElem,
          amount:incAmount,
        };
      }else{
        return curElem;
      }
    })
    return {...state,cart:updateProduct}
  
  }

  // remove
  if(action.type === "Remove_Item"){
    let updatecart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart :  updatecart 

    }
  }

  // to empty or clear
  if( action.type === "Clear_Cart"){
    return {
      ...state,
      cart:[]
    }
  }

  // update cart total item
  if(action.type === "Cart_Total_Item"){
    
    let updateItemVal = state.cart.reduce((intialVal,curElem)=>{
      let {amount} = curElem;

      intialVal= intialVal+amount;
      return intialVal;
    },0);

    return {
      ...state,
      total_item : updateItemVal,
    }
  }

 
  if(action.type === "Cart_Total_Price"){
    let total_price = state.cart.reduce((intialVal,curElem)=>{
      let {price,amount} = curElem;

      intialVal= intialVal+(price*amount);
      return intialVal;
    },0);

    return {
      ...state,
      total_price,
    }
  }

  

  return state;
};

export default cartReducer;