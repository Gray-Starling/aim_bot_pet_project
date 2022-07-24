import './GameBoard.scss'
import React, { useState } from 'react'
import { Button } from '../UI/Button/Button'

export const GameBoard = () => {
  const [gameStart, setGameStart] = useState(false)

  const handleClick = (ev) => {
    setGameStart(!gameStart)
  }
  return (
    <div className="game-board">
      {!gameStart ? (
        <Button btnType="btn__start" onClick={(ev) => handleClick(ev)}>
          Start
        </Button>
      ) : (
        <div>Игра</div>
      )}
    </div>
  )
}
