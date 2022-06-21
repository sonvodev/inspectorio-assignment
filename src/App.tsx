import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import HomePage from './pages/home/Home';
import PersonPage from './pages/person/Person';


function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/person/:username" element={<PersonPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
