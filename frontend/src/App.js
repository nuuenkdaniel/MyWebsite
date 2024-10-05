import React, { Fragment } from 'react';
import './App.css';

import { AboutMe } from "./About_me_components/AboutMe";
import { ContactMe } from "./About_me_components/ContactMe";

function App() {
  return (
    <>
      <AboutMe />
      <ContactMe />
    </>
  );
}

export default App;
