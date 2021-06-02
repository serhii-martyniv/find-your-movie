import React, {useState} from "react";
import AddMovieButton from "./addMovieButton";
import SearchBar from "./searchBar";
import "./index.scss"
import PropTypes from "prop-types"
import Modal from "../modals"
import AddFilmModal from "../modals/AddFilmModal"

const Header = (props) => {
    const [show, setShow] = useState(false)

    const showModal = () => {
        setShow(true)
    };

    const hideModal = () => {
        setShow(false)
    };
    let onAddMovie = (deletedMovie) => {
        props.addMovie(deletedMovie)
    }
    const Slogan = () => <h1 className="slogan">find your movie</h1>
    const TopBar = () => {
        return (
            <div className="topBar">
                {props.logo}
                <AddMovieButton handleShow={showModal}/>

                <Modal show={show} handleClose={hideModal}>
                    <AddFilmModal onAddMovie={onAddMovie}/>
                </Modal>
            </div>
        )
    }

    return(
        <div className="header container" ref={props.refItem}>
            <TopBar />
            <Slogan />
            <SearchBar/>
        </div>
    )
}

Header.propTypes = {
    slogan: PropTypes.string,
    logo: PropTypes.object.isRequired
}

export default Header
