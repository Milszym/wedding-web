import { useEffect, useState } from 'react';
import './App.css';
import { Title } from './ui/sections/title/Title';
import { Location } from './ui/sections/location/Location';
import { Faq } from './ui/sections/faq/Faq';
import { WeddingWitnesses } from './ui/sections/weddingWitnesses/WeddingWitnesses';
import { Memories } from './ui/sections/memories/Memories';
import { Rsvp } from './ui/sections/rsvp/Rsvp';
import { Toaster } from 'react-hot-toast';
import emailjs from "emailjs-com";
import { isMobile } from './util/isMobile';

export const USER_ID = 'KvoQmT_FIJQvcZXYN'

function App() {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleThemeChange = (newTheme: string) => {
    document.documentElement.setAttribute("data-theme", newTheme); // Set data-theme on <html>
  };

  useEffect(() => {
    handleThemeChange("pantone")
    emailjs.init(USER_ID);
  }, [])

  return (
    <div className="App">
      <div className="flex flex-col">
        {/* <Navigation /> */}
        <Title />
        <Location />
        <Faq />
        <WeddingWitnesses />
        <Memories />
        <Rsvp />
        <Toaster />
      </div>
    </div>
  );
}

export const openUrl = (url: string, withBlank: boolean = true) => {
  if (isMobile()) {
    window.open(url)?.focus();
  } else {
    window.open(url, withBlank ? '_blank' : '')?.focus();
  }
}

export default App;
