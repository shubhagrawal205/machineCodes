import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cards from './Components/Cards/Cards';
import AutoComplete from './Components/Autocomplete/Autocomplete';
import InfiniteScroll from './Components/InfiniteScroll/InfiniteScroll';
import Tabs from './Components/Tabs/Tabs';
import TicTacToe from './Components/TicTacToe/TicTacToe';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/autocomplete" element={<AutoComplete />} />
            <Route path="/infinite-scroll" element={<InfiniteScroll />} />
            <Route path="/tabs" element={<Tabs />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
            
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
