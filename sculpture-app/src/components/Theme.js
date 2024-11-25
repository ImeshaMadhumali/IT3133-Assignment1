import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const Theme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    }, [isDarkMode]);

    return (
        <Form.Check
        type="switch"
        id="theme-switch"
        label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
        checked={isDarkMode}
        onChange={toggleTheme}
    />
    );
};

export default Theme;
