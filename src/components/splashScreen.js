import React from 'react'
import MoleImage from '../images/mole.png'

const startGame = (props) => {
    let isActive = props.gameActive ? "End Game" : "Start Game!"

    const handleStart = () => {
        props.setGameActive(!props.gameActive)
        props.setScore(0)
    }

    return(
        
        <div>
            <img hidden={props.gameActive} src={MoleImage} alt='Mole' style={{'width':'30vw'}}/>
            <br/>
            <button onClick={handleStart}>{isActive}</button>
        </div>
    )
}

export default startGame