import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";
import Products from "./Layouts/components/Products";
import Nav from "./Layouts/components/Nav";
import Home from "./Layouts/components/Home";
import Weather from "./Layouts/components/Weather";
import About from "./Layouts/components/About";
import NotFound from "./Layouts/components/NotFound/NotFound";
import Otp from "./Layouts/components/OTP/Otp";

function App() {
    return (
        <Router>
            <Nav />
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product" element={<Products />} />
                        <Route path="/weather" element={<Weather />} />
                        <Route path="/otp" element={<Otp />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </header>
            </div>
        </Router>
    );
}

export default App;
