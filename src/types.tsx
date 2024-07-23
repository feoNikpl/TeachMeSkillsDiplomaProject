export enum THEMES {
    LIGHT = 'light',
    DARK = 'dark'
}

interface IUIState {
    theme: THEMES
}

interface IPost {
    id: number,
    image: string,
    text: string,
    date: string,
    title: string,
    author: number
}

interface IPostResponse {
    results: IPost[],
    count: number
}

interface IPostsOptions {
    perPage: number;
    currentPage: number;
}

interface IPostsState {
    posts: IPost[],
    selectedPost: IPost,
    perPage: number,
    total: number,
    currentPage: number,
}

export type {
    IUIState,
    IPost,
    IPostsState,
    IPostResponse,
    IPostsOptions
}