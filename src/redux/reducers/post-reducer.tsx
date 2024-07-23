import { IPost, IPostsState } from "../../types"
import { SET_CURRENT_PAGE, SET_PER_PAGE, SET_POSTS, SET_SELECTED_POST, SET_TOTAL } from "../action-types";

const initialState = {
    posts: [] as IPost[],
    selectedPost: {} as IPost,
    perPage: 15,
    total: 0,
    currentPage: 1
}

const postsReducer = (state: IPostsState = initialState, action: any) => {
    switch(action.type) {
        case SET_POSTS:{
            const { posts } = action;
            return ({
                ...state,
                posts
            })
        }

        case SET_SELECTED_POST: {
            const { post } = action;
            return ({
                ...state,
                selectedPost: post
            })
        }

        case SET_PER_PAGE: {
            const { perPage } = action;
            return ({
                ...state,
                perPage
            })
        }

        case SET_TOTAL: {
            const { total } = action;
            return ({
                ...state,
                total
            })
        }

        case SET_CURRENT_PAGE: {
            const { currentPage } = action;
            return ({
                ...state,
                currentPage
            })
        }

        default: {
            return state;
        }
    }
}

export {
    postsReducer
}