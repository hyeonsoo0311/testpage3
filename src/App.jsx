import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import ResultPage from './pages/ResultPage';

function App() {
  const [result, setResult] = useState(() => {
    const saved = localStorage.getItem('result');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (result) {
      localStorage.setItem('result', JSON.stringify(result));
    }
  }, [result]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage setResult={setResult} />} />
        <Route path="/result" element={<ResultPage result={result} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
