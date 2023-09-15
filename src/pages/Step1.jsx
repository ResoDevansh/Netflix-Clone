import { styled } from "styled-components";
import { Link, Routes, Route } from "react-router-dom";
import logo from "../assets/netflix-logo.png";
import globe from "../assets/globe-icon.jpg";
import RegForm from "./RegForm";

const Step1 = () => {
  return (
    <Container>
      <Navbar>
        <LogoLink to="/in">
          <Logo src={logo} />
        </LogoLink>
        <SignInLink>Sign In</SignInLink>
      </Navbar>
      <Routes>
        <Route path="" element={<RegForm />} />
      </Routes>
      <Footer>
        <L1>
          Questions? Call <PhoneNo>&nbsp;000-800-919-1694</PhoneNo>
        </L1>
        <L2>
          <FooterLink>FAQ</FooterLink>
          <FooterLink>Help Centre</FooterLink>
          <FooterLink>Terms of Use</FooterLink>
          <FooterLink>Privacy</FooterLink>
        </L2>
        <L3>
          <FooterLink>Cookie Preferences</FooterLink>
          <FooterLink className="sp">Corporate Information</FooterLink>
        </L3>
        <LanguageSelector>
          <GlobeIcon src={globe} alt="image not found" />
          <Label htmlFor="language">
            <LanguageButton name="language">
              <Option value="english">English</Option>
              <Option value="hindi">Hindi</Option>
            </LanguageButton>
          </Label>
        </LanguageSelector>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  height: 140vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Navbar = styled.nav`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;
const LogoLink = styled(Link)`
  text-decoration: none;
  outline: 0;
  line-height: 0;
  margin: -0.9em 0 0 1.8em;
`;
const Logo = styled.img`
  height: 7.2em;
  object-fit: cover;
`;
const SignInLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: #333;
  font-weight: 600;
  font-size: 1.2em;
  margin-left: 61em;
  &:after {
    content: "";
    border-bottom: 2px solid black;
    display: block;
    width: 100%;
    position: absolute;
    top: 1.2em;
    visibility: hidden;
    transition: all 100ms ease-in;
  }
  &:hover {
    &:after {
      visibility: visible;
    }
  }
`;
const Footer = styled.div`
  border: 1px solid transparent;
  color: #737373;
  background-color: #eee6e6;
`;
const L1 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50vw;
  margin-top: 2em;
  margin-left: 5%;
  font-size: 0.9em;
`;
const L2 = styled(L1)`
  justify-content: space-between;
  font-size: 0.75em;
`;
const L3 = styled(L1)`
  justify-content: space-between;
  font-size: 0.75em;
  margin-top: 1em;
  .sp {
    position: relative;
    left: -35.5em;
  }
`;
const PhoneNo = styled.a`
  text-decoration: none;
  font-size: 1.1em;
`;
const FooterLink = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const LanguageButton = styled.select`
  overflow: hidden;
  font-size: 0.8em;
  border: transparent;
  padding: 0.2em 1em;
  background-color: black;
  color: #a09e9e;
  border-radius: 0.3em;
`;
const Option = styled.option`
  overflow: hidden;
`;
const GlobeIcon = styled.img`
  color: white;
  background-color: white;
  height: 1.2em;
  position: absolute;
  left: 0.6em;
`;
const LanguageSelector = styled.div`
  padding: 0.6em;
  width: 8em;
  display: flex;
  position: relative;
  left: 4.6em;
  margin-top: 1em;
  margin-bottom: 1.2em;
  align-items: center;
  background-color: black;
  padding-left: 1em;
  border: 0.1px solid #a09e9e;
  border-radius: 0.3em;
`;
const Label = styled.label``;
export default Step1;
