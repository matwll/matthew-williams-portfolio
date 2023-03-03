import React from "react";

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <br></br>
      <div className="card-group">
      <div className="card">
        <h5 className="card-title">The Collar Club</h5>
        <a href="https://calm-ocean-49248.herokuapp.com/" target="_blank">
          <img
            src="/images/project2screenshot.jpg"
            alt="The Collar Club"
            width="100%"
            className="card-image-top"
          ></img>
        </a>
        <div className="card-body">
          <p>heres some text about the project</p>
        </div>
        <a
            href="https://github.com/walleric23/the-collar-club"
            target="_blank"
          >
            Click here for the github repository
          </a>
      </div>
      <div className="card">
      <h5 className="card-title">Meet Brewery</h5>
        <a href="https://matwll.github.io/nearby-breweries/" target="_blank">
          <img
            src="images/brewery-search-screenshot1.png"
            alt="Meet Brewery Search"
            width="100%"
            className="card-image-top"
          ></img>
        </a>
        <div className="card-body">
          <p>heres some text about the project</p>
        </div>
        <a
            href="https://github.com/matwll/nearby-breweries" target="_blank"
          >
            Click here for the github repository
          </a>
      </div>
      <div className="card">
      <h5 className="card-title">Weather Dashboard</h5>
        <a href="https://matwll.github.io/weather-search-dashboard/"
          target="_blank">
          <img
            src="images/weather-dashboard.png"
            alt="Weather Search Dashboard"
            width="100%"
            className="card-image-top"
          ></img>
        </a>
        <div className="card-body">
          <p>heres some text about the project</p>
        </div>
        <a
            href="https://github.com/matwll/weather-search-dashboard"
          target="_blank"
          >
            Click here for the github repository
          </a>
      </div>
      <div className="card">
      <h5 className="card-title">Tech Blog</h5>
        <a href="https://matwll.github.io/tech-blog-posting/" target="_blank">
          <img
            src=""
            alt="Tech Blog"
            width="100%"
            className="card-image-top"
          ></img>
        </a>
        <div className="card-body">
          <p>heres some text about the project</p>
        </div>
        <a
            href="https://github.com/matwll/tech-blog-posting"
            target="_blank"
          >
            Click here for the github repository
          </a>
      </div>
      <div className="card">
      <h5 className="card-title">Timed Coding Quit</h5>
        <a href="https://matwll.github.io/timed-coding-quiz/" target="_blank">
          <img
            src="/images/timed-quiz-screenshot.png"
            alt="Timed Coding Quit"
            width="100%"
            className="card-image-top"
          ></img>
        </a>
        <div className="card-body">
          <p>heres some text about the project</p>
        </div>
        <a
            href="https://github.com/matwll/timed-coding-quiz"
            target="_blank"
          >
            Click here for the github repository
          </a>
      </div>
      <div className="card">
      <h5 className="card-title">Password Generator</h5>
        <a href="https://matwll.github.io/secure-password-generator/" target="_blank">
          <img
            src="/images/password-generator.png"
            alt="Secure Password Generator"
            width="100%"
            className="card-image-top"
          ></img>
        </a>
        <div className="card-body">
          <p>heres some text about the project</p>
        </div>
        <a
            href="https://github.com/matwll/secure-password-generator"
            target="_blank"
          >
            Click here for the github repository
          </a>
      </div>
      </div>
    </div>
  );
}
