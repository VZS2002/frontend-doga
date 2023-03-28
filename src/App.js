import logo from './logo.svg';
import './App.css';
import { Routes, Route,} from "react-router-dom";
import Fooldal from './pages/Fooldal';
import Tapasztalat from './pages/Tapasztalat';
import Idopont from './pages/Idopont';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Fooldal/>}></Route>
        <Route exact path="/tapasztalat" element = {<Tapasztalat/>}></Route>
        <Route exact path="/idopont" element={<Idopont/>}></Route>
     </Routes>
     
    </>
  );
}

export default App;
