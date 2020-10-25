const types = {
    ADD_TO_POSTS: "ADD_TO_POSTS",
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
  
      default:
        return state;
    }
  };
  
  export default reducer;