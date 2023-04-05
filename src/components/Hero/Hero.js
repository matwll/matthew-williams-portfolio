import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, <br />
        Welcome to my Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a Jr Full Stack Developer. I started learning to code on my own in
        2021. I began learning python and some front end HTML, and Javascript.
        Later, in the fall of 2022, I decided to join a coding bootcamp which I
        completed in March. Being able to bring critical thinking, and problem
        solving skills from past roles has definetly helped. I continue learning
        at home in my spare time since there is so much to learn. Feel free to
        click the link below to be taken to my LinkIn profile or continue below
        for some examples of my work and technologies I've utilized.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://www.linkedin.com/in/matthew-williams-9b70881b1/")
        }
      >
        Message me on Linkedin
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
