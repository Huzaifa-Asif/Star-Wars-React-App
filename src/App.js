import React,{ useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home  from './pages/home/Home.js'
import People from './pages/people/People.js';
import PeopleDetail from './pages/people/PeopleDetail.js';
import PlanetDetail from './pages/planet/PlanetDetail.js';
import Planet from './pages/planet/Planet.js';
import Film from './pages/film/Film.js';
import FilmDetail from './pages/film/FilmDetail.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    async function fetchPeople(){
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchPlanets(){
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }

    async function fetchFilms(){
      let res = await fetch('https://swapi.dev/api/films/?format=json');
      let data = await res.json();
      setFilms(data.results);
      setLoading(false);
    }

    fetchPeople();
    fetchPlanets();
    fetchFilms();
   
  }, [])


  return (
    <>
       <Router>
        <Navbar />
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ):(
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/planet'>
              <Planet data={planets} />
            </Route>
            <Route path="/planet-detail/:id">
              <PlanetDetail />
            </Route>
            <Route exact path='/people'>
              <People data={people} />
            </Route>
            <Route path="/people-detail/:id">
              <PeopleDetail />
            </Route>
            <Route exact path='/film'>
              <Film data={films} />
            </Route>
            <Route path="/film-detail/:id">
              <FilmDetail />
            </Route>
          </Switch>
        )}
       </Router>
    </>
  );
}

export default App;
