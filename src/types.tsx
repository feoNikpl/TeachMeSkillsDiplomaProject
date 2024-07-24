export enum THEMES {
    LIGHT = 'light',
    DARK = 'dark'
}

interface IUIState {
    theme: THEMES
}

interface IStoreState {
    posts: IPostsState,
    ui: IUIState
}

interface IPost {
    id: number,
    title:string,
    url:string,
    image_url: string,
    news_site: string,
    summary:string,
    published_at:string,
    updated_at: string,
    featured: boolean,
    launches: Array<ILaunch>,
    events: Array<IEvent>
}

interface ILaunch{
    launch_id: string,
    provider: string
}

interface IEvent{
    event_id: number,
    provider: string
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
    IStoreState,
    IUIState,
    IPost,
    IPostsState,
    IPostResponse,
    IPostsOptions
}