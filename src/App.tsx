import React from 'react';
import './App.css';
import {Route, Routes } from 'react-router';
import Hello from "./pages/Hello";
import BasicLayout from "./layouts/Basic.Layout";

function App() {
  return (
    <div className="App">
      <BasicLayout/>
    </div>
  );
}

export default App;
