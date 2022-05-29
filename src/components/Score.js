import React from 'react'

export const Score = ({scoreValue, category}) => {
  return (
    <div className="score-container">Score for the {category} category:  {scoreValue}</div>
  )
}

export default Score;