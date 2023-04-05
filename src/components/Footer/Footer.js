import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaHackerrank } from "react-icons/fa";

import { SocialIcons, Container } from "../Header/HeaderStyles";
import {
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call or Text</LinkTitle>
          <LinkItem href="tel:510-359-6513">510-359-6513</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:maw01091989@gmail.com">
            maw01091989@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <Container>
          <SocialIcons href="https://github.com/matwll">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/matthew-williams-9b70881b1/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.hackerrank.com/maw01091989">
            <FaHackerrank size="3rem" />
          </SocialIcons>
        </Container>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
