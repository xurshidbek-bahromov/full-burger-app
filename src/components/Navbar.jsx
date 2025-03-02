import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { useTheme } from "./ThemeContext";

const Navbar = () => {
    const { language, toggleLanguage } = useLanguage();
    const { darkMode, toggleTheme } = useTheme();

    const texts = {
        uz: { menu: "Menyu", about: "Biz haqimizda", contact: "Kontakt", cart: "Savatcha" },
        ru: { menu: "Меню", about: "О нас", contact: "Контакты", cart: "Корзина" },
    };

    return (
        <nav className="navbar">
            <div className="logo">STREET88</div>
            <div className="controls">
                <ul>
                    <li><Link to="/cart">{texts[language].cart}</Link></li>
                    <li><Link to="/">{texts[language].menu}</Link></li>
                    <li><Link to="/about">{texts[language].about}</Link></li>
                    <li><Link to="/contact">{texts[language].contact}</Link></li>
                </ul>
                <button onClick={toggleLanguage}>🌐 {language.toUpperCase()}</button>
                <button onClick={toggleTheme}>{darkMode ? "🌙" : "☀️"}</button>
            </div>
        </nav>
    );
};

export default Navbar;
