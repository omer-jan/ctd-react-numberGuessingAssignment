import React, { useState } from "react";
import Button from "./Button";

const GuessControl=({onGuess})=>{
  const [currentGuess , setCurrentGuess] = useState('');
  const handleInputChange=(e)=>{     
  const newGuessedNumber=e.target.value;   
    setCurrentGuess(newGuessedNumber); 
}
const onSubmitGuess=()=> {
  const guessNumber = Number(currentGuess);
  onGuess(guessNumber); 
  setCurrentGuess('');
}
    return (
      <div>
        <input
          type="number"
          value={currentGuess}
          onChange={handleInputChange}
        />
        <Button onClick={onSubmitGuess}>Submit Guess</Button>
      </div>
    ); 
}

export default GuessControl;
