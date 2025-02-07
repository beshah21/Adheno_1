import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import FAQs from './pages/FAQs';
import GetInvolved from './pages/GetInvolved';
import Home from './pages/Home';
import News from './pages/News';
import Projects from './pages/Projects';
import Resources from './pages/Resources';
import Stories from './pages/Stories';
import BoardProfile from './pages/boardProfile'; // Import the BoardProfile component
import TeamProfile from './pages/teamProfile'; // Import the TeamProfile component

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/stories" element={<Stories />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/get-involved" element={<GetInvolved />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/team-profile" element={<TeamProfile />} />  {/* Add TeamProfile route */}
                <Route path="/board-profile" element={<BoardProfile />} /> {/* Add BoardProfile route */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;