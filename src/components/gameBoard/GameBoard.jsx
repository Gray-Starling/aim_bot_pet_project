import './GameBoard.scss'
import React, { useState } from 'react'
import { Button } from '../UI/Button/Button'

export const GameBoard = () => {
  const [gameStart, setGameStart] = useState(false)

  const handleClick = () => {
    setGameStart(!gameStart)
  }
  return (
    <div className="game-board">
      {!gameStart ? (
        <Button btnType="btn__start" onClick={handleClick}>
          Start
        </Button>
      ) : (
        <div>Игра</div>
      )}
    </div>
  )
}
