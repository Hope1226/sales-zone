import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/Index.js';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' exact element={<MainPage />} />
    </Routes>
    </>
  );
}

export default App;
