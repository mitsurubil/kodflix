import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './Gallery';
import Details from './Details';
import NotFound from './NotFound';
import './App.css';

function App() {
  
  useEffect(() => {
    getShows();
  }, []);

  const getShows = async () => {
    const response = await fetch(`/rest/shows`);
    const data = await response.json();
    console.log(data);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Gallery} />
          <Route exact path='/not-found' component={NotFound} />
          <Route exact path='/:showOrMovieId' component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;