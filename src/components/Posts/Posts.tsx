import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { IStoreState} from "../../types";
import { loadPosts } from "../../redux/action-creators";
import './posts.scss'
import { Post } from "./Post/Post";
import { Pagination } from "./Pagination";

const Posts = () => {
    const posts = useSelector((state: IStoreState)=> state.posts.posts);
    const currentPage = useSelector((state: IStoreState)=> state.posts.currentPage);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadPosts({currentPage}));
    }, [currentPage]);
    return(
        <section className="posts">
            <div className="container">
                <h1>
                    Blog
                </h1>
                <div className="posts-wrap">
                    {
                        posts.map(x => <Post key={x.id} post={x}/>)
                    }
                </div>
                <Pagination/>
            </div>
        </section>
    )
}

export { Posts };