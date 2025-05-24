// import "./app.scss"
// import Test from "./Test"
// import Navbar from "./components/navbar/Navbar";
// import Hero from "./components/hero/hero";
// import Parallax from "./components/parallax/Parallax";
// import Services from "./components/services/services";
// import Contact from "./components/Contact/Contact";
// import Portfolio from "./components/portfolio/Portfolio";

// const App = () => {
//   return <div>
//     <section id="Homepage">
//       <Navbar/>
//       <Hero/>
//     </section>
//     <section id="Projects"><Parallax type="portfolio"/>
//     </section>
//     <Portfolio/>
    
//     <section id="About"><Parallax type="services"/></section>
//     <section><Services/></section>
//     <section id="Contact"><Contact/></section>
//     {/* <Test/>
//     <Test/> */}
//   </div>;
// };

// export default App;
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebars.jsx";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          {/* Redirect root path to /home */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



