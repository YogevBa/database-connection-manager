import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConnectionsList from './components/ConnectionsList';
import ConnectionDetails from './components/ConnectionDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConnectionsList />} />
        <Route path="/details/:id" element={<ConnectionDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
