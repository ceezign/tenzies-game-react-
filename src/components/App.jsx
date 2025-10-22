import { useEffect, useRef, useState } from "react";
import Die from "./Die"
import { nanoid } from "nanoid";
import ReactConfetti from "react-confetti";


export default function App(){

  const [dice, setDice] = useState(() => generateAllNewDice())

  const buttonRef = useRef(null)


  const gameWon = (
    dice.every(die => die.isHeld) && 
    dice.every(die => die.value === dice[0].value)  
 
  )

  useEffect(() => {
    if (gameWon ) {
      buttonRef.current.focus()
    }
  }, [gameWon])


  function generateAllNewDice(){

    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6), 
        isHeld: false,
        id: nanoid()

      }))
  }

  function rollDice(){
    if (!gameWon) {
      setDice(oldDie => oldDie.map(die => 
      die.isHeld ?
        die :
        {...die, value: Math.ceil(Math.random() * 6) } 
      ))
    } else {
    setDice(generateAllNewDice())
  }
  }

  function hold(id){
    setDice(prevDie => prevDie.map(die => {
      return die.id === id ? 
        {...die, isHeld: !die.isHeld} : 
        die
    }))
  }


  const diceElements = dice.map(dieObj => <Die 
                                              key={dieObj.id} 
                                              value={dieObj.value}
                                              isHeld={dieObj.isHeld}
                                              id={dieObj.id}
                                              hold={hold}
                                            />)


  return(
      <main>
        {gameWon ? <ReactConfetti/> : null}
        <div aria-live="polite" className="sr-only">
          {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>} 
        </div>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same.
          Click each die to freeze it at its currrent value between rolls.
        </p>
        <div className="dice-container">
          {diceElements}
        </div>
        <button className="roll-dice" onClick={rollDice} ref={buttonRef}>
          {gameWon ? "New Game" : "Roll"}
          </button>

      </main>
  )
}




// function generateAllNewDice(){

//     const newDice = [];
//     for (let i = 0; i < 10; i++){
//       const num = Math.floor(Math.random() * 6) + 1
//       newDice.push(num)
//     }
//     return newDice
//   }
//   console.log(generateAllNewDice())