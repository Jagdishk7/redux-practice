import Counter from './component/Counter';
import './App.css';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="app">
      <button onClick={e=>dispatch({type:'DECREMENT'})}>Decrement</button>
      <Counter/>
      <button onClick={e => dispatch({type:'INCREMENT'})}>Increment</button>
      <button onClick={e => dispatch({type:'RESET'})}>Reset</button>
    </div>
  );
}

export default App;
