import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { IStoreState, Sort} from "../../types";
import { loadPosts, setCurrentPage, setSortField } from "../../redux/action-creators";
import './posts.scss'
import { Post } from "./Post/Post";
import { Pagination } from "./Pagination";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

const Posts = () => {
    const posts = useSelector((state: IStoreState)=> state.posts.posts);
    const currentPage = useSelector((state: IStoreState)=> state.posts.currentPage);
    const sortField = useSelector((state:IStoreState)=> state.posts.sortField);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadPosts({currentPage, sortField}));
    }, [currentPage, sortField]);
    return(
        <section className="posts">
            <div className="container">
                <h1>
                    Blog
                </h1>
                <div className="posts-sort">
                    <h3>Sort</h3>
                    <Select
                        id="demo-simple-select"
                        value={sortField}
                        onChange={(event: SelectChangeEvent) => {dispatch(setSortField(event.target.value as string)); dispatch(setCurrentPage(1))}}>
                        <MenuItem value={Sort.TITLE}>Name</MenuItem>
                        <MenuItem value={'-'+Sort.TITLE}>Name distinct</MenuItem>
                        <MenuItem value={Sort.PUBLISHED_AT}>Publish date</MenuItem>
                        <MenuItem value={'-'+Sort.PUBLISHED_AT}>Publish date distinct</MenuItem>
                    </Select>
                </div>
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