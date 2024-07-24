import { Link } from "react-router-dom";
import { IPost} from "../../../types";
import "./post.scss";

const Post = ({post}: {post: IPost}) => {
    return(
        <div className="post-card">
            <div className="post-card__image">
                <Link to={`/posts/${post.id}`}>
                    <img alt="image_post" src={post.image_url}/>
                </Link>
            </div>
            <div className="post-card__subtitle">
                <p>{post.published_at}</p>
            </div>
            <Link to={`/posts/${post.id}`}>
                <h3>{post.title}</h3>
            </Link>
        </div>
    )
}

export { Post };