import React from 'react'

const Bottom = ({getRandomAll, randomColor}) => {
  const backgroundObjet = {backgroundColor: randomColor}
    
  return (
    <button className='card__btn' style={backgroundObjet}
        onClick={getRandomAll}>&#62;</button>
  )
}

export default Bottom