import './App.css';
import DisplayQuote from './components/DisplayQuote';
import axios from 'axios';
import { useState } from 'react';


function App() {

const sampleSimpson = {
  "quote" : "Words hurts Lisa, words hurts.",
  "character": "Homer Simpson",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
}

const [quote, setQuote] = useState(sampleSimpson)

const getQuote = () => {
  axios
  .get('https://simpsons-quotes-api.herokuapp.com/quotes')
  .then((response) => response.data)
  .then((data)=>{
    setQuote(data[0])
  })
}


  return (
    <div className="App">
      <header className="App-header">
          <DisplayQuote simpson = {quote}/>
          <button type='button' id='change-quote' onClick={getQuote}>Change quote</button>
      </header>
    </div>
  );
}

export default App;
