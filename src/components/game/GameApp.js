import React from 'react'
import ResponsiveAppBar from '../navbar/ResponsiveAppBar'

function GameApp() {

    const choices = ['rock', 'paper', 'scissor'];

    const [playerChoice, setPlayerChoice] = React.useState("");
    const [computerChoice, setComputerChoice] = React.useState("");
    const [result, setResult] = React.useState("");

    const playGame = (playerChoice) => {
        const computer = choices[Math.floor(Math.random() * choices.length)];
        setPlayerChoice(playerChoice);
        setComputerChoice(computer);
        if(playerChoice === computer) {
            setResult("It's a tie!");
        } else if(
            (playerChoice === "rock" && computer === "paper") ||
            (playerChoice === "paper" && computer === "scissor") ||
            (playerChoice === "scissor" && computer === "rock")
        ){
            setResult("You won!");
        }else{
            setResult("You lost!");
        }
    }

  return (
    <div>
        <ResponsiveAppBar />
        <h1>Rock Paper Scissor</h1>
        {choices.map((choice) => (
            <button key={choice} onClick={() => playGame(choice)}>
                {choice}
            </button>
        ))}
        <div>
            {playerChoice &&
                <div>
                    <h2>Player choice: {playerChoice}</h2>
                    <h2>Computer choice: {computerChoice}</h2>
                    <h2>{result}</h2>
                </div>
            }
        </div>
    </div>
  )
}

export default GameApp