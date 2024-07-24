import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { IStoreState, IPostsOptions} from "../../types";
import { loadPosts } from "../../redux/action-creators";

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
                    New realeases books
                </h1>
                <div className="posts-wrap">
                    {
                        posts.map(x => <h1>{x.id}</h1>)
                    }
                </div>
            </div>
        </section>
    )
}

export { Posts };