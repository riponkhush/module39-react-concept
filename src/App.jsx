
import './App.css'
import Counter from './counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick(){
    alert('button click');
  }
  const handleClick2 = () => {
    alert('windows alert');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h1>React Core concept 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click2</button>
      <button onClick={ () => {alert('third clicked')}}>third</button>
      <button onClick={ () => addToFive(3)}>Forth</button>
    </>
  )
}

export default App
