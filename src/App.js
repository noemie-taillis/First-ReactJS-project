import React,  { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    document.getElementById('research').addEventListener('keypress',function(e) {
      if (e.key == 'Enter') {
        loadData();
      }
    })
  }, [search]);

  async function loadData() {
    var API_KEY = '17555297-46a99d3dc7abf78679ec9e640';
    var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(search);
    let response = await fetch(URL);
    let data= await response.json();
    setItems(data.hits);
  };

  return(
      <div class="Flowers">
        <input type="search" id="research" name="q" placeholder="Search..." class="research"
        onChange={event => setSearch(prevSearch => event.target.value)}></input>
        <p></p>
        {items.map(item => (
        <span key={item.id}>
          <img src={item.largeImageURL} alt="item.largeImageURL" class="image"/>
        </span>))}
      </div>

  )
}

export default App;

