import './App.css'
import Home from "./Pages"
import Splash from './Components/Splash'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;