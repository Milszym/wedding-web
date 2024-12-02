import { useEffect } from 'react';
import './App.css';
import { Navigation } from './ui/navigation/Navigation';
import { Title } from './ui/sections/title/Title';
import { Location } from './ui/sections/location/Location';
import { Faq } from './ui/sections/faq/Faq';

function App() {
  
  const handleThemeChange = (newTheme: string) => {
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
