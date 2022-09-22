import React from 'react'
import Bottom from './Bottom'

const QuoteBox = ({randomQuote, randomColor, getRandomAll}) => {
    console.log(randomQuote)

    const colorObjet = {color: randomColor}

  return (
    <article style={colorObjet} className='card'>
        <p className='card__quote'>{randomQuote.quote}</p>
        <h1 className='card__author'>{randomQuote.author}</h1>
        <Bottom getRandomAll={getRandomAll}
                randomColor = {randomColor}/>

    </article>
  )
}

export default QuoteBox