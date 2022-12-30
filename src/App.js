import './App.css';
import { BrowserRouter, Navigate, Routes, Route, Switch } from "react-router-dom";

import Portfoliopage from "webpages/Portfolio/Portfoliopage.js";

function App() {
  return (
    <div className="App">

<BrowserRouter>        

<Routes>

  <Route path="/" element={<Portfoliopage/>} />
  
</Routes>

</BrowserRouter>
     
    </div>
  );
}

export default App;
