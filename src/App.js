import Counter from './component/Counter';
import './App.css';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button>Increment</button>
      <Counter/>
      <button>Decrement</button>
    </div>
  );
}

export default App;
