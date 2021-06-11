import MovieList from './components/movieList/MovieListContainer';

const routes = [
  {
    path: '/find-your-movie/',
    exact: true,
    component: MovieList
  },
  {
    path: '/find-your-movie/film/:id',
    component: MovieList
  },
  {
    path: '/find-your-movie/search/:search',
    component: MovieList
  },
];

export default routes;
