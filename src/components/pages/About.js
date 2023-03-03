import React from "react";

export default function About() {
  return (
    <div>
      <h2>About Me</h2>
      <p
        style={{
          backgroundColor: "#CECECE",
          fontSize: "16px",
          textAlign: "center",
          padding: "20px",
        }}
      >
        {/*about me text here*/}
        <img src="images/doggos.jpg" alt="" id="self-picture"></img>
        <br></br>
        <span style={{ fontWeight: "bold" }}>Hello,</span>
        <br></br>I am Matthew Williams, a JR. Full Stack Web Developer. I have a
        functioning understanding of HTML, CSS, Javascript, Mysql, and the MERN
        stack. I really like the concept of machine learning and AI. Although I
        know I will need Python, as well as more advanced math and algorithms.
        <br></br>
        <br></br>
        Currently I work at PPG as a Production Planner. I moved to Washington
        about 5 years ago since i love the cooler weather and rain. I have 2
        dog's (Addie and Aiden) who are 9 years old. When I have some time (and
        money) I enjoy working on my car.
      </p>
    </div>
  );
}
