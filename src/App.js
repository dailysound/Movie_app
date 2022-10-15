import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component{
  state = {
    isLoading: true,
    // 로딩된 애니 데이터 저장
    movies: []
  };

  getMovies = async () => {
    // axios.get()이 반환한 결과 moives에 저장
    const {
      data: {
        data: {movies},
      }
    } = await axios.get('http://yts-proxy.now.sh/list_movies.json?sort_by=rating'); //eslint-disable-line no-unused-vars
    // ?sort_by=rating 평점 순으로 정렬
    this.setState({movies: movies, isLoading: false}); // movies: state, movies: 영화 데이터가 담긴 변수
    // state와 대입할 변수의 이름이 같으면 하나로 축약 가능 {movies}
    // isLoading: false 영화 데이터를 다 가져오면 false로 변함
  }

  componentDidMount(){
    // 영화 데이터 로딩
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
