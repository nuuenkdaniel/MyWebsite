import React, { Fragment } from 'react';
import './App.css';

import { AboutMe } from "./About_me_components/AboutMe";
import { ContactMe } from "./About_me_components/ContactMe";
import { WhatsNext } from "./About_me_components/WhatsNext";

function App() {
  return (
    <>
      <AboutMe />
      <ContactMe />
      <WhatsNext />
    </>
  );
}

export default App;
