export const types = {
  ADD_TO_POSTS: "ADD_TO_POSTS",
  GET_CATEGORIES: "GET_CATEGORIES",
  GET_PRODUCTS: "GET_PRODUCTS",
  GET_DISPLAY_PRODUCTS: "GET_DISPLAY_PRODUCTS",
  ADD_TO_CART: "ADD_TO_CART",
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

    case types.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
          .map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
          .sort((a, b) => a.place - b.place),
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

    case types.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
