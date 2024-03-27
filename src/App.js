import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './component/Home'; // Corrected path to Home component
import Tier1 from './component/Tier1'; // Corrected path to Tier1 component
import Tier2 from './component/Tier2'; // Corrected path to Tier2 component

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className='bg-black'>
          <div className='flex justify-center'>
            <Link className='text-lg font-medium text-white p-3' to='/'>Home</Link>
            <Link className='text-lg font-medium text-white p-3' to='/tier1'>Tier 1</Link>
            <Link className='text-lg font-medium text-white p-3' to='/tier2'>Tier 2</Link>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/tier1" element={<Tier1 />} />
            
          <Route path="/tier2" element={<Tier2 />} />
            
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;