export const types = {
  ADD_TO_POSTS: "ADD_TO_POSTS",
  GET_PRODUCTS: "GET_PRODUCTS",
  GET_DISPLAY_PRODUCTS: "GET_DISPLAY_PRODUCTS",
};

// export const getNumberOfPosts = (post) => post?.reduce((total, item) => (total+item.price),0)

const reducer = (state, action) => {
  console.log("action is:", action);
  switch (action.type) {
    case types.ADD_TO_POSTS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    case types.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.map((doc) => ({ ...doc.data(), id: doc.id })),
      };

    case types.GET_DISPLAY_PRODUCTS:
      return {
        ...state,
        displayProducts: state.products.filter(
          (product) => product.category == action.payload
        ),
      };

    default:
      return state;
  }
};

export default reducer;
