import Buttons from './components/Buttons';
import CatCard from './components/CatCard';
import Header from './components/Header';
import CatCardsCollection from './components/CatCardsCollection';

function App() {
  return (
    <div className="App">
      <Header />
      <CatCard />
      <CatCardsCollection />
      <Buttons />
    </div>
  );
}


export default App;
