import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './Home'
import Search from './Search'
import Header from './Header'


class App extends React.Component {
  state = {
    wantToWatch: [],
    watched: [],
    idList: [],
  }

  addWatched = movie => {
    this.setState({
      watched: [...this.state.watched, { title: movie.Title, poster: movie.Poster }],
      idList: [...this.state.idList, movie.imdbID],
    })
  }

  addToWatch = movie => {
    this.setState({
      wantToWatch: [...this.state.wantToWatch, { title: movie.Title, poster: movie.Poster }],
      idList: [...this.state.idList, movie.imdbID],
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <div>
            <Route exact path='/' render={() => {
              return (
                <>
                  <Link to='/search'>Search</Link>
                  <Home
                    watchedMovies={this.state.watched}
                    wantToWatchMovies={this.state.wantToWatch}
                  />
                </>
              )
            }} />
            <Route path='/search' render={() => {
              return (
                <>
                  <div><Link to='/'>Home</Link></div>
                  <Search
                    imdbIds={this.state.idList}
                    addWatched={this.addWatched}
                    addToWatch={this.addToWatch}
                  />
                </>
              )
            }} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
