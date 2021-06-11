import React from "react";
import "./styles.scss"
import Footer from "./components/footer";
import Logo from "./components/logo";
import NotFound from "./components/erros/404";
import HeaderContainer from "./components/header/HeaderContainer";
import MovieListContainer from "./components/movieList/MovieListContainer";
import {MovieDetailsContainer} from "./components/movieDetails/MovieDetailsContainer";
import {Route} from "react-router-dom";

function App() {
    return (
        <>
            <Route exact path="/find-your-movie/">
                <HeaderContainer logo={<Logo />} />
                <MovieListContainer />
            </Route>
            <Route path="/find-your-movie/film/:id" component={MovieListContainer}>
                <MovieDetailsContainer logo={<Logo />} />
                <MovieListContainer />
            </Route>
            <Route path="/find-your-movie/search/:search">
                <HeaderContainer logo={<Logo />} />
                <MovieListContainer />
            </Route>
            <Route path="/find-your-movie/not-found" component={NotFound} />
            <Footer>
                <Logo />
            </Footer>
        </>
    );
}

export default App;