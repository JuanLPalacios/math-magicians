/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NoMatch from './components/NoMatch';
import Quote from './components/Quote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<Home />} />
              <Route path="Calculator" element={<Calculator />} />
              <Route path="Quote" element={<Quote />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
