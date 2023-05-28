import './App.css';
import React, { useState } from "react";
import first_page from './components/firts_page';



function App() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className='background'>
                <div className={darkMode ? "dark-mode" : "light-mode"}>
            <div className="container">
                <div className="switch-checkbox">
                    <label className="switch">
                        <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                        <span className="slider round"> </span>
                    </label>
                </div>
            </div>
            <div>
                <first_page />
            </div>

        </div>
        </div>
    );
}
export default App;
