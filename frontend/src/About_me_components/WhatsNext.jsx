import React from 'react';

export function WhatsNext() {
  return (
    <div className="container">
      <h6>Whats Next?</h6>
      <div className="what_next_content">
        <div className="what_next_project">
          <p>Check out my projects on my prjects page! (click on the image)</p>
          <a href="/projects">
            <img src="/nootnoot.jpg" alt="Projects"/>
          </a>
        </div>
        <div className="what_next_gh">
          <p>Or just check out my github page</p>
          <a href="https://github.com/nuuenkdaniel" target="_blank">
            <img src="/github.svg" alt="Github" rel="noreferrer"/>
          </a>
        </div>
        <div className="whats_next_resume">
          <p>And if you're interested in hiring me then maybe take a look at my resume :)</p>
          <a href="/resume">
            <img src="/nootnoot.jpg" alt="Resume"/>
          </a>
        </div>
      </div>
    </div>
  )
};
