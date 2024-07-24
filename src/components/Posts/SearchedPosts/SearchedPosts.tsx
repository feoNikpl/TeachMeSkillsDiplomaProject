import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IStoreState } from "../../../types";
import { useEffect } from "react";
import { loadSearchPosts } from "../../../redux/action-creators";
import { Post } from "../Post";

const SearchPosts = () => {
    const { searchValue = "" } = useParams();
    const dispatch = useDispatch();
    const posts = useSelector((state: IStoreState) => state.posts.posts);
    const currentPage = useSelector((state: IStoreState) => state.posts.currentPage);
    
    useEffect(() => {
        dispatch(loadSearchPosts(searchValue, currentPage));

    }, [searchValue, currentPage]);
    return(
        <section className="posts">
            <div className="container">
                <h1>
                    {`Search results '${searchValue}'`}
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

export { SearchPosts };