import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Product from './FRONTEND/Product';
import Home from './FRONTEND/Home';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product' element={<Product />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
