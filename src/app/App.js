import './App.css';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import CardDataState from '../context/CardData/CardDataState';

function App() {
  return (
    <>
      <CardDataState>
        <Navbar />
        <Home />
      </CardDataState>
    </>
  );
}

export default App;
