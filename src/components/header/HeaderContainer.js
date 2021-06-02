import Header from "./Header";
import {connect} from "react-redux";
import {addMovieActionCreator} from "../../modules/movies-reducer"

const mapStateToProps = (store) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMovie: (newMovie) => {
            dispatch(addMovieActionCreator(newMovie))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)