import { Link, useParams } from "react-router-dom";
import "./selectedPost.scss";
import { useEffect } from "react";
import { IStoreState, THEMES } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import { loadSelectedPost } from "../../../redux/action-creators";
import { LoremIpsum } from 'react-lorem-ipsum';

const SelectedPost = () => {
    const { id = '' } = useParams();
    const dispatch = useDispatch();
    const selectedPost = useSelector((state: IStoreState) => state.posts.selectedPost)
    const theme = useSelector((state: IStoreState) => state.ui.theme)
    useEffect(() => {
        dispatch(loadSelectedPost(id))
    }, [id])
    return (
        <section className="selected-post-section">
            <div className="container">
                <div className="selected-post">
                    <div className="selected-post__nav">
                        <Link to='/'>
                            <h3>Home</h3>
                        </Link>
                        /{selectedPost?.id}
                    </div>
                    <h1>{selectedPost?.title}</h1>
                    <div className="selected-post__image">
                        <img src={selectedPost?.image_url} alt="logo" />
                    </div>
                    <div className={`selected-post__text ${theme === THEMES.DARK ? "dark" : ""}`}>
                        <LoremIpsum p={4}/>
                    </div>
                    <div className="selected-post__buttons">
                        <div className="button-eval">
                            
                        </div>
                        <div className="button-favorites">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {
    SelectedPost
}