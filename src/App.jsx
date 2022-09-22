import { useState } from 'react'
import './App.css'
import QuoteBox from './Components/QuoteBox'
import	quotes from './json/quotes.json'
import color from './utils/color'




function App() {
  //This function calculates a index random number
  const getIndexRandom = arr =>  Math.floor(Math.random() * arr.length)

  //Here extract the elements according to the index random number
  const firstQuote = quotes[getIndexRandom(quotes)]
  const firstColor = color[getIndexRandom(color)]
  
  const [randomQuote, setRandomQuote] = useState(firstQuote)
  const [randomColor, setRandomColor] = useState(firstColor)
  const backgroundObjet = {backgroundColor: randomColor}
  
  //This function calculate both a quote anda color random
  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(color[getIndexRandom(color)])
  }

  return (
    <div style={backgroundObjet} className="App">
      <QuoteBox 
      randomQuote = {randomQuote}
      randomColor = {randomColor}
      getRandomAll = {getRandomAll}
      />
    </div>
  )
}

export default App
