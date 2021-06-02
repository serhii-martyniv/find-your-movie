import React, {useState} from "react";
import "./index.scss"
import {
    Link,
} from "react-router-dom";

export default () => {
    const [searchValue, setSearchValue] = useState('');
    let onChangeSearchValue = (e) => {
        setSearchValue(e.target.value)
    }
    return(
        <div className="search">
            <input type="text" placeholder="What do you want to watch?" onChange={onChangeSearchValue} />
            <Link className="searchButton" to={
                {
                    pathname:  searchValue ? `/search/${searchValue}` : '/',
                }
            }>Search</Link>
        </div>
    )
}
