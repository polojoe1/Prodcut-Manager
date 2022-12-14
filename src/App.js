
import './App.css';
import AllProducts from './components/AllProducts';
import { Routes, Route } from 'react-router-dom';
import InfoPage from './components/InfoPage';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <h1>Products</h1>
      
      <Routes>
        <Route path='/' element={<AllProducts/>}/>
        <Route path='/products/:id' element={<InfoPage/>}/> 
        <Route path='/update/products/:id' element={<Update/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
