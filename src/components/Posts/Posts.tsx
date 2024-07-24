import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { IStoreState} from "../../types";
import { loadPosts } from "../../redux/action-creators";
import './posts.scss'
import { Post } from "./Post/Post";

const Posts = () => {
    const posts = useSelector((state: IStoreState)=> state.posts.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadPosts({ perPage:15,currentPage:1}));
    }, []);
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
            </div>
        </section>
    )
}

export { Posts };