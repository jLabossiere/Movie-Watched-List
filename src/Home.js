import React from 'react'


class Home extends React.Component {
  render() {
    return (
      <div className='lists'>
        {this.props.wantToWatchMovies[0] && (
          <ul className='want-to'> <h1>Want to Watch:</h1>
            {this.props.wantToWatchMovies.map(movie => {
              return (
                <div key={movie.title} className='movie'>
                  <img src={movie.poster} alt={movie.title} />
                  <li>{movie.title}</li>
                </div>
              )
            })}
          </ul>
        )}
        {this.props.watchedMovies[0] && (
          <ul className='watched' > <h1>Watched:</h1>
            {this.props.watchedMovies.map(movie => {
              return (
                <div key={movie.title} className='movie'>
                  <img src={movie.poster} alt={movie.title} />
                  <li>{movie.title}</li>
                </div>
              )
            })}
          </ul>
        )}
      </div>
    )
  }
}

export default Home