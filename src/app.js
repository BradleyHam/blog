import React from 'react';
import { Router } from '@reach/router';
import Header from './shared/Header/Header';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Home from './pages/Home/Home';

const App = () => (
  <div>
    <Header />
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Blog path="/blog" />
    </Router>
  </div>
);

export default App;
