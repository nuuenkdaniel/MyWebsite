import React from 'react';

export function AboutMe() {
  return (
    <div className="container border-bottom">
      <h1><u>About Me</u></h1>
      <div className="about_me_text">
        <p>
          I am a sophmore at Stony Brook University majoring in CS. I like to do fun projects
          <br></br>
          like this website. I am always looking for new topics to explore and developing new
          <br></br>
          interests. When I am not working on my projects I like playing video games and
          <br></br>
          hanging out with friends.
        </p>
      </div>
      <div className="about_me_img">
        <img src="/nootnoot.jpg" alt="" />
      </div>
    </div>
  )
};
