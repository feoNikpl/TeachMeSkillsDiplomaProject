import { IPost, IPostResponse, IPostsOptions } from "../../types";
import { LOAD_POSTS, LOAD_SEARCH_POSTS, LOAD_SELECTED_POST, SET_CURRENT_PAGE, SET_POSTS, SET_SELECTED_POST, SET_TOTAL } from "../action-types";
import { put, takeEvery } from "redux-saga/effects"

const setPosts = (posts: IPost[]) => ({
    type: SET_POSTS,
    posts
})

const loadPosts = (postsOptions: IPostsOptions) => ({
    type: LOAD_POSTS,
    postsOptions
})

const setSelectedPost = (post: IPost) => ({
    type: SET_SELECTED_POST,
    post
})

const loadSelectedPost = (id: string) => ({
    type: LOAD_SELECTED_POST,
    id
})


const setTotal = (total: number) => ({
    type: SET_TOTAL,
    total
})

const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

function* fetchLoadPosts(action: any) {
    const { postsOptions } = action;
    const { currentPage } = postsOptions;
    const response: Response = yield fetch(`https://api.spaceflightnewsapi.net/v4/articles/?limit=15&offset=${(currentPage - 1) * 15}`);
    const { results, count }: IPostResponse = yield response.json();
    yield put(setPosts(results));
    yield put(setTotal(count));
};

function* fetchSelectedPost(action:any) {
    const { id } = action;
    const response: Response = yield fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
    const post: IPost = yield response.json();
    yield put(setSelectedPost(post))
}

const loadSearchPosts = (searchValue: string, currentPage: number) => ({
    type: LOAD_SEARCH_POSTS,
    searchValue,
    currentPage
})

function* fetchLoadSearchPosts(action: any) {
    const { searchValue } = action;
    const response: Response = yield fetch(`https://api.spaceflightnewsapi.net/v4/articles/?search=${searchValue}`);
    const { results, count }: IPostResponse = yield response.json();
    
    yield put(setTotal(count));
    yield put(setCurrentPage(1));
    yield put(setPosts(results));
}

function* watcherPosts() {
    yield takeEvery(LOAD_POSTS, fetchLoadPosts)
    yield takeEvery(LOAD_SELECTED_POST, fetchSelectedPost)
    yield takeEvery(LOAD_SEARCH_POSTS, fetchLoadSearchPosts)
}

export {
    setPosts,
    loadPosts,
    setSelectedPost,
    loadSelectedPost,
    setTotal,
    setCurrentPage,
    watcherPosts,
    loadSearchPosts
}