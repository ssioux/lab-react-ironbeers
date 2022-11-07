
import './App.css';
import Home from './pages/Home';
import {Route, Routes} from "react-router-dom"
import BeerList from "./pages/BeerList"

function App() {
  return (
    <div className="App">
       <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/beers" element={<BeerList />}/>
    {/* <Route path="/random-Beer" element={}/>
    <Route path="/new-beer" element={}/> */}
    
   
   </Routes>
    </div>
  );
}

export default App;
