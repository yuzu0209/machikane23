import './css/App.css';
import { Routes, Route } from "react-router-dom"; // 追加

import Header from './components/Header';
import Footer from './components/Footer';

import Home from "./pages/Home";
import About from "./pages/About";

//javascriptのサンプル　本番は消してもよい
import Sample1 from "./tmp/Sample1";
import Sample2 from "./tmp/Sample2";
import Project from './pages/Project';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/23/about/" element={ <About /> } />
        <Route path="/23/project/" element={ <Project /> } />
    

        <Route path="/tmp/sample1" element={ <Sample1 /> } />
        <Route path="/tmp/sample2" element={ <Sample2 /> } />


      </Routes>
      <Footer />
    </div>
  );
}

