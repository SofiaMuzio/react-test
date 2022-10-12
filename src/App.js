import './App.css';
import Home from './pages/Home/Home';
import SelectedItems from './pages/selectedItems/SelectedItems';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="saved-items" element={<SelectedItems />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
