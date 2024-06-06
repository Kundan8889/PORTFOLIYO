import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Educations/Education";
import WorkExp from "./pages/Work Exp/WorkExp";
import Contact from "./pages/Contact/Contact";
import { useTheme } from "./pages/Techstack/ThemeContext";
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MobileNav from "./MobileNav/MobileNav";
function App() {
  const[theme]=useTheme();
  return (
    < >
    <div id={theme}>
      <ToastContainer/>
      <MobileNav/>
      <Layout/>
      <div className="container">
      <About/>
      </div>
      <Education/>
      <Techstack/>
      <Projects/>
      <WorkExp/>
      {/* <ToastContainer/> */}
      <Contact/>
      <div className="footer pb-3 mb-3">
        <h4 className="text-center"> 
"😍Experience my portfolio. Let's craft excellence together😍" © [👨‍🏫Kundan Rathore👨‍🏫] [2024-25]"</h4>
      </div>
      </div>
      <ScrollToTop color="#f29f67" smooth style={{backgroundColor:'#1e1e2c',borderRadius:"80px"}}/>
    </>
  );
}

export default App;
