export const initialState = {
    posts: [],
    user: null
};

// export const getNumberOfPosts = (post) => post?.reduce((total, item) => (total+item.price),0)

const reducer = (state, action) => {
    console.log('action is:',action)
    switch(action.type){
        case 'ADD_TO_POSTS':
            return{
                ...state,
                posts: [...state.posts, action.post],
            }

            default:
                return state;
    }
}

export default reducer;