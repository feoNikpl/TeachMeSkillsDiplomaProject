import { IPost, IPostResponse, IPostsOptions } from "../../types";
import { LOAD_POSTS, LOAD_SELECTED_POST, SET_CURRENT_PAGE, SET_PER_PAGE, SET_POSTS, SET_SELECTED_POST, SET_TOTAL } from "../action-types";
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

const setPerPage = (perPage: number) => ({
    type: SET_PER_PAGE,
    perPage
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
    const { perPage, currentPage } = postsOptions;
    const response: Response = yield fetch(`https://studapi.teachmeskills.by/blog/posts?limit=${ perPage }&offset=${(currentPage - 1) * perPage}`);
    const { results, count }: IPostResponse = yield response.json();
    yield put(setPosts(results));
    yield put(setTotal(count));
};

function* fetchSelectedPost(action:any) {
    const { id } = action;
    const response: Response = yield fetch(`https://studapi.teachmeskills.by/blog/posts/${id}`);
    const post: IPost = yield response.json();
    yield put(setSelectedPost(post))
}

function* watcherPosts() {
    yield takeEvery(LOAD_POSTS, fetchLoadPosts)
    yield takeEvery(LOAD_SELECTED_POST, fetchSelectedPost)
}

export {
    setPosts,
    loadPosts,
    setSelectedPost,
    loadSelectedPost,
    setPerPage,
    setTotal,
    setCurrentPage,
    watcherPosts,
}