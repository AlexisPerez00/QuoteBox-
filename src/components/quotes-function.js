import Data from "./quotes.json"
import { useState } from 'react'


const RandomQuote = () => {
const quotes = Data.quotes
let randomIndex = Math.floor(Math.random() * quotes.length);
const [oneQuote, setQuote] = useState(quotes[randomIndex])


const getQuote = oneQuote.quote 
const getAuthor = oneQuote.author;


 return (
     <div className="quote-container">
        
          <h4 >{getQuote}</h4>

          <h5>{getAuthor}</h5>

          <button onClick={() => setQuote(quotes[Math.floor(Math.random() * quotes.length)])}>
              New Quote
          </button>

    </div>
 )
   
    
}

export default RandomQuote