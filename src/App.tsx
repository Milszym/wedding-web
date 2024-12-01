import React, { useEffect, useState } from 'react';
import './App.css';
import { Navigation } from './ui/navigation/Navigation';
import { Title } from './ui/sections/title/Title';
import { Location } from './ui/sections/location/Location';
import { Faq } from './ui/sections/faq/Faq';

function App() {
  const [theme, setTheme] = useState<string>("pantone"); // Default theme

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme); // Set data-theme on <html>
  };

  useEffect(() => {
    handleThemeChange("pantone")
  }, [])

  return (
    <div className="App" style={{ background: 'base-100' }}>
      <div className="flex flex-col">
        <Navigation />
        <Title />
        <Location />
        <Faq />
      </div>
    </div>
  );
}

export default App;
