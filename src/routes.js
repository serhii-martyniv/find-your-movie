import MovieList from './components/movieList/MovieListContainer';

const routes = [
  {
    path: '/',
    exact: true,
    component: MovieList
  },
  {
    path: '/film/:id',
    component: MovieList
  },
  {
    path: '/search/:search',
    component: MovieList
  },
];

export default routes;
