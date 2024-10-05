import React from 'react';

export function ContactMe() {
  return (
    <div className="container contact">
      <h1><u>Contact Me</u></h1>
      <form>
        <p>If you have any project ideas or just want to say hello I would be happy to recieve them below.</p>
        <input type="text" className="form-control" />
        <div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
};
