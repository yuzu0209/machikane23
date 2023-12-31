import './css/App.css';
import { Routes, Route } from "react-router-dom"; // 追加

import Header from './components/Header';
import Footer from './components/Footer';

import Home from "./pages/Home";
import About from "./pages/machikane/About";
import Theme from './pages/machikane/Theme';
import Goods from './pages/machikane/Goods';
import Sponsor from './pages/machikane/Sponsor';

import Sections from './pages/project/Sections';
import Project from './pages/project/Project';
import Timetable from './pages/project/Timetable';
import Ralley from './pages/project/ralley';
import OfficialProject from './pages/project/OfficialProject';
import LabOpen from './pages/project/LabOpen';

import Notes from './pages/visitor/Notes';
import Pamphlet from './pages/visitor/Pamphlet';
import FAQ from './pages/visitor/FAQ';
import Inquiry from './pages/visitor/Inquiry';

import Access from './pages/access-map/Access';
import Map from './pages/access-map/Map';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about/" element={ <About /> } />
        <Route path="/theme/" element={ <Theme /> } />
        <Route path="/goods/" element={ <Goods /> } />
        <Route path="/sponsor/" element={ <Sponsor /> } />

        <Route path="/sections/" element={ <Sections /> } />
        <Route path="/project-search/" element={ <Project /> } />
        <Route path="/timetable/" element={ <Timetable /> } />
        <Route path="/ralley/" element={ <Ralley /> } />
        <Route path="/official-project/" element={ <OfficialProject /> } />
        <Route path="/lab-open/" element={ <LabOpen /> } />

        <Route path="/notes/" element={ <Notes /> } />
        <Route path="/pamphlet/" element={ <Pamphlet /> } />
        <Route path="/FAQ/" element={ <FAQ /> } />
        <Route path="/inquiry/" element={ <Inquiry /> } />

        <Route path="/access/" element={ <Access /> } />
        <Route path="/map/" element={ <Map /> } />

      </Routes>
      <Footer />
    </div>
  );
}

