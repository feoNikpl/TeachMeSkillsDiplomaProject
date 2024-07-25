import { useState } from "react";
import "./search.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/action-creators";

const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSearchClick = () => {
        dispatch(setCurrentPage(1));

        if(searchValue)
            navigate(`/posts/search/${searchValue}`);
        else
            navigate(`/`);
    }
    
    return(
        <div className="search" onKeyDown={(e) => { if (e.key === "Enter") handleSearchClick() }}>
            <input placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        </div>
    )
}

export { Search };