import './App.css';
import MainDisplay from '../MainDisplay/MainDisplay';

function App() {

  const data = require('../../data/test_input.json');

  return (
    <div className="App">
      <MainDisplay data={data} />
    </div>
  );
}

export default App;
