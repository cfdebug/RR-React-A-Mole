import './App.css';
import React, {useState} from 'react';
import MoleContainer from './components/moleContainer';
import StartGame from './components/splashScreen'

function App() {
  let [score,setScore] = useState(0)
  let [gameActive,setGameActive] = useState(false)
  
  const createMoleHill = () => {
    let hills = []
    for(let i=0; i<9; i++){
      hills.push(<MoleContainer key={i} score={score} setScore={setScore}/>)
    }

    return(
      <div>
        {hills}
      </div>
    )
  }

  let letsPlay = gameActive ? <React.Fragment>{score} {createMoleHill()}</React.Fragment> : null
  
  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      {letsPlay}
      <StartGame gameActive={gameActive} setGameActive={setGameActive} setScore={setScore}/>
    </div>
  );
}

export default App;
