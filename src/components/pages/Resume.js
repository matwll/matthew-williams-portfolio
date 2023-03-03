import React from 'react';
import resume from '../../assets/matthew-williams-resume.pdf';

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p>
        {/*resume info and link here*/}
        <img
            src="/images/resume-snapshot.png"
            alt="Resume Snapshot"
            width="100%"
          ></img>
        <a href={resume} target= "_blank" style={{ width: '100%'}}>Click here to view my resume.</a>
      </p>
    </div>
  );
}