
import './App.css';
import Header from './header/Header';
import veri from './helpers/data'
import Liste from './list/Liste';

function App() {
  return (
    <div className="App">
      <Header/>
      <Liste data={veri}/>
    </div>
  );
}

export default App;
