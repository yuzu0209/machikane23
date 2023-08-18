import './css/App.css';
import { Routes, Route } from "react-router-dom"; // 追加

import Header from './components/Header';
import Footer from './components/Footer';

import Home from "./pages/Home";
import About from "./pages/About";
import Project from './pages/Project';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/23/about/" element={ <About /> } />
        <Route path="/23/project/" element={ <Project /> } />

      </Routes>
      <Footer />
    </div>
  );
}

