import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Historial from './Historial';

export default function Workspace() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/historial" element={<Historial />} />
      </Routes>
    </div>
  );
}