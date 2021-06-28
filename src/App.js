import logo from './logo.svg';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <motion.main initial={{ y: 120 }} animate={{ y: 0 }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. edit here
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </motion.main>
    </div>
  );
}

export default App;
