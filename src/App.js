import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}


function LoadCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  return (
    <div>
      <h1>Exploring rest countries in the world !!</h1>
      <h3>Number of countries: {countries.length}</h3>

      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }

    </div>
  )
}

function Country(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h4>Population: {props.population}</h4>
    </div>
  )
}


export default App;
