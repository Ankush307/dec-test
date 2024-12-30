import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductPage from './view/ProductPage';
import CompetitionPage from './view/CompetitionPage';
import Others from './view/Others';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductPage />} />
          <Route path='about' element={<CompetitionPage />} />
          <Route path='other' element={<Others />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
