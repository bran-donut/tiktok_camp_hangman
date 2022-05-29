import Header from "./components/Header"
import Figure from "./components/Figure"
import { useState } from "react";
import Word from "./components/Word";
import WrongLetters from "./components/WrongLetters";
import Keyboard from "./components/Keyboard";
import { Hint } from "./components/Hint";
import Popup from "./components/PopUp";
import { Link } from 'react-router-dom'


const words = [
  ['shrek', 'Ogre smash'], 
  ['sonic', 'Gotta go fast'], 
  ['superman', 'Overpowered superhero'],
  ['batman', 'Rich and bored billionaire']
              ];
let randomNumber = Math.floor(Math.random()*words.length);
let selectedWord = words[randomNumber][0];
let hintWord = words[randomNumber][1];

const Game = () => {
  
  const submitLetter = (e) => {
    {selectedWord.split('').forEach(element => {
        if (selectedWord.includes(e.target.value)) {
          setCorrectLetters(correctLetters + e.target.value)
          e.target.disabled = true
        }else{
          setWrongLetters(wrongLetters + e.target.value)
          e.target.disabled = true
        }   
  })}
  }

  function playAgain() {

    setCorrectLetters([]);
    setWrongLetters([]);

    const randomNumber = Math.floor(Math.random()*words.length);
    selectedWord = words[randomNumber][0];
    hintWord = words[randomNumber][1];
  }

  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  return (
    <>
      <Header />
      <h1 className="category">MOVIES!</h1>
      <div className="game-container">
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        <Popup selectedWord={selectedWord} correctLetters={correctLetters} wrongLetters={wrongLetters} playAgain = {playAgain}/>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Hint hintWord={hintWord} />
      <br></br>
      <Keyboard submitLetter={submitLetter} correctLetters={correctLetters} wrongLetters={wrongLetters} />
      <Link to={{
                pathname: "/",
            }}>
                <button className='menu-button'>Back</button>
            </Link>
    </>
  );
}

export default Game;


