import { useEffect } from 'react';
import './App.css';
import { Navigation } from './ui/navigation/Navigation';
import { Title } from './ui/sections/title/Title';
import { Location } from './ui/sections/location/Location';
import { Faq } from './ui/sections/faq/Faq';
import { WeddingWitnesses } from './ui/sections/weddingWitnesses/WeddingWitnesses';
import { Memories } from './ui/sections/memories/Memories';
import { Rsvp } from './ui/sections/rsvp/Rsvp';

export const MARRIAGE_DATE: Date = new Date(2025, 6, 12, 16, 30, 0, 0)

function App() {
  
  const handleThemeChange = (newTheme: string) => {
    document.documentElement.setAttribute("data-theme", newTheme); // Set data-theme on <html>
  };

  useEffect(() => {
    handleThemeChange("pantone")
  }, [])

  return (
    <div className="App">
      <div className="flex flex-col">
        {/* <Navigation /> */}
        <Title />
        <Location />
        {/* <Faq /> */}
        <WeddingWitnesses />
        <Memories />
        <Rsvp />
      </div>
    </div>
  );
}

export default App;
