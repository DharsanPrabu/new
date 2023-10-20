import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom";

import Home from './Home/Home';
import Whoweare from './Components/Whoweare';
import Whatwedo from './Components/Whatwedo';
import Saveadate from './Components/Saveadate';
import Secretsofachoos from './Components/Secretsofachoos';
import Primeblossoms from './Components/Primeblossoms';

function App() {
  return (
    <HashRouter  >
    <Routes>
      <Route path="/" element={<Home/>} caseSensitive={true} />
      <Route path="/Whoweare" element={<Whoweare/>} caseSensitive={true} />
      <Route path="/Whatwedo" element={<Whatwedo/>} caseSensitive={true} />
      <Route path="/Saveadate" element={<Saveadate/>} caseSensitive={true} />
      <Route path="/Secretsofachoos" element={<Secretsofachoos/>} caseSensitive={true} />
      <Route path="/Primeblossoms" element={<Primeblossoms/>} caseSensitive={true} />
    </Routes>
  </HashRouter>
  );
}

export default App;
