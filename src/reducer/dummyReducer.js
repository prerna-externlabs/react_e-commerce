const ProductReducer = (state, action) => {
  switch (action.type) {
    case "Dummy_Api_Loading":
      return {
        ...state,
        isLoading: true,
      };

    case "Dummy_Api_Data":
    // //   const dummy = action.payload.filter((curElemm) => {
    // //     return curElemm.featured === true;
    //   });
      return {
        ...state,
        isLoading: false,
        dummyproduct: action.payload,
      };

    case "Dummy_Api_Error":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;
