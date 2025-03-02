import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { LanguageProvider } from "./components/LanguageContext";
import { ThemeProvider } from "./components/ThemeContext";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Shopping from "./components/Shopping";

const App = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <Navbar />
          <Header />
          <Shopping />
          <Routes>
            <Route path="/"/>
            <Route path="/about"/>
            <Route path="/contact"/>
          </Routes>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
