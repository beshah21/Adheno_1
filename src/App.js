import { useEffect, useState } from 'react';
import { Route, HashRouter as Router, Routes, useNavigate } from 'react-router-dom';
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
import BoardProfile from './pages/boardProfile';
import TeamProfile from './pages/teamProfile';

// Component to handle redirection
const RedirectToHome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/home');
    }, [navigate]);

    return null; // This component doesn't need to render anything
};

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    // Define dynamic styles for dark mode
    const appStyle = {
        backgroundColor: isDarkMode ? '#2c3e50' : '#f9f9f9',
        color: isDarkMode ? '#ecf0f1' : '#333',
        minHeight: '100vh',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        fontFamily: 'Arial, sans-serif'
    };

    return (
        <Router>
            <div style={appStyle}>
                <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                <Routes>
                    <Route path="/" element={<RedirectToHome />} />
                    <Route path="/home" element={<Home isDarkMode={isDarkMode} />} />
                    <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
                    <Route path="/stories" element={<Stories isDarkMode={isDarkMode} />} />
                    
                    <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />} />
                    <Route path="/news" element={<News isDarkMode={isDarkMode} />} />
                    <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
                    <Route path="/donate" element={<Donate isDarkMode={isDarkMode} />} />
                    <Route path="/get-involved" element={<GetInvolved isDarkMode={isDarkMode} />} />
                    <Route path="/resources" element={<Resources isDarkMode={isDarkMode} />} />
                    <Route path="/faqs" element={<FAQs isDarkMode={isDarkMode} />} />
                    <Route path="/team-profile" element={<TeamProfile isDarkMode={isDarkMode} />} />
                    <Route path="/board-profile" element={<BoardProfile isDarkMode={isDarkMode} />} />
                </Routes>
                <Footer isDarkMode={isDarkMode} />
            </div>
        </Router>
    );
};

export default App;