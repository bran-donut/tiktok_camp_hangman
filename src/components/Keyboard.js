import React from 'react'


export const Keyboard = ({submitLetter, correctLetters, wrongLetters}) => {

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  return (
    <div className='keyboard'>
        {alphabet.split("").map(letter => (
            
                <button disabled={correctLetters.includes(letter) || wrongLetters.includes(letter)} key={letter} value={letter} onClick={submitLetter} className='kbd'>
                    {letter}
                </button>
            ))
        }
    </div>
  )
}

export default Keyboard;

