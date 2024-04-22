import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import SearchMovieName from './pages/SearchMovieName';
import MovieDetails from './pages/MovieDetails'
import Navbar from './components/Navbar';
import FavouriteList from "./pages/FavouriteList"
function App() {
  return (
    
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/searchMovieName/:movieName" element={<SearchMovieName/>}/>
        <Route path="/movieDetails/:id" element={<MovieDetails/>}/>
        <Route path="/favourite" element={<FavouriteList/>}/>

      
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
