import { Products } from './Pages/Products';
import { Routes, Route } from 'react-router-dom';
import {Cart} from "./Pages/Cart";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
