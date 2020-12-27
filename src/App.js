import './App.css';
import Movielist from './component/Movielist/Movielist';
import Nav from './component/Nav/Nav';
import { MovieProvider } from './component/MovieContext/MovieContext';
import AddMovie from './component/AddMovie/AddMovie';

function App() {

  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <Movielist />
      </div>
    </MovieProvider>  
  );
}

export default App;
