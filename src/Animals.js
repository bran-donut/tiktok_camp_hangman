import Header from "./components/Header"
import Figure from "./components/Figure"
import { useEffect, useState } from "react";
import Word from "./components/Word";
import WrongLetters from "./components/WrongLetters";
import Keyboard from "./components/Keyboard";
import { Hint } from "./components/Hint";
import Popup from "./components/PopUp";
import { Link } from 'react-router-dom'
import Score from "./components/Score"

let scoreValue = 0;
const category = "Animal"

const words = [
  ['dog', 'animal'], 
  ['cat', 'animal'], 
  ['tiger', 'animal']
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

  useEffect(()=> {
    scoreValue += 10
    console.log(scoreValue)
  },[correctLetters])

  useEffect(()=> {
    console.log(scoreValue)
  },[wrongLetters])

  return (
    <>
      <Header />
      <h1 className="category">ANIMALS!</h1>
      <Score category = {category} scoreValue = {scoreValue}/>
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


