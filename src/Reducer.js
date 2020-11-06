import Cookie from "js-cookie";

export const types = {
  ADD_TO_POSTS: "ADD_TO_POSTS",
  GET_CATEGORIES: "GET_CATEGORIES",
  GET_PRODUCTS: "GET_PRODUCTS",
  GET_DISPLAY_PRODUCTS: "GET_DISPLAY_PRODUCTS",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_TO_CART: "REMOVE_TO_CART",
  SET_USER: "SET_USER",
};

// UTILITY FUNCTIONS

export const saveToCart = (cart) => {
  Cookie.set("cart", JSON.stringify(cart));
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

    case types.REMOVE_TO_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
