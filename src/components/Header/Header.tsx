import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <section className="header">
            <div className="container">
                <div className="header-wrap">
                    <div className="logo">
                        <Link to="/">
                            BLOGOLOGO
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Header }