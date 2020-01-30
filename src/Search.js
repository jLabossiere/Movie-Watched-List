import React from 'react'


const APIKey = '49133bd7'

class Search extends React.Component {
  state = {
    activeSearch: [],
    searchValue: ''
  }

  changeValue = e => {
    this.setState({
      searchValue: e.target.value
    });
  }

  searchMovie = searchvalue => {
    const fetchURL = `http://www.omdbapi.com/?apikey=${APIKey}&s=${searchvalue}`
    fetch(fetchURL).then(
      response => response.json()
    ).then(
      json => {
        if (json.Response === 'False') {
          alert(json.Error)
        } else {
          this.setState({
            activeSearch: json.Search,
            searchValue: ''
          })
        }

      }
    )
  }

  render() {
    return (
      <>
        <input type='text' onChange={this.changeValue} value={this.state.searchValue} />
        <button onClick={() => this.searchMovie(this.state.searchValue)}>Search</button>
        <div>
          {this.state.activeSearch[0] && (
            this.state.activeSearch.map(movie => {
              return (
                <div key={movie.imdbID} className='movie'>
                  <img src={movie.Poster} alt={movie.Title} />
                  <li>{movie.Title}</li>
                  {!this.props.imdbIds.includes(movie.imdbID) && (
                    <li>
                      <button onClick={() => this.props.addToWatch(movie)}>Want to Watch</button>
                      <button onClick={() => this.props.addWatched(movie)}>Watched</button>
                    </li>
                  )}
                </div>
              )
            })
          )}
        </div>
      </>
    )
  }
}

export default Search 