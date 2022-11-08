
import './App.css';
import Home from './pages/Home';
import {Route, Routes} from "react-router-dom"
import BeerList from "./pages/BeerList"
import BeerDetails from "./pages/beerDetails"

function App() {
  return (
    <div className="App">
       <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/beers" element={<BeerList />}/>
    <Route path="/beers/:beerId" element={<BeerDetails />}/>


    {/* <Route path="/random-Beer" element={<Beerdetails />}/> */}
    {/* <Route path="/new-beer" element={}/> */}
    
   
   </Routes>
    </div>
  );
}

export default App;
