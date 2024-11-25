import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const Theme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => setIsDarkMode(prev => !prev);

   
    useEffect(() => {
        document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    }, [isDarkMode]);

    return (
        <div className="theme-switch">
            <Form.Check
                type="switch"
                id="theme-switch"
                label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
                checked={isDarkMode}
                onChange={toggleTheme}
            />
        </div>
    );
};

export default Theme;
