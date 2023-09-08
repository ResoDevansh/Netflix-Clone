import { styled } from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/netflix-logo.png";
import globe from "../assets/globe-icon.jpg";

const Navbar = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo src={logo} alt="image not found"></Logo>
      </LogoWrapper>
      <LanguageSelector>
        <GlobeIcon src={globe} alt="image not found" />
        <Label htmlFor="language">
          <LanguageButton name="language">
            <Option value="english">English</Option>
            <Option value="hindi">Hindi</Option>
          </LanguageButton>
        </Label>
      </LanguageSelector>
      <SignIn to="login">Sign In</SignIn>
      {/* <SignIn as="a" href="">
        Sign In
      </SignIn> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: -0.8em;
  font-weight: 900;
  background-color: transparent;
  filter: brightness(100%);
  /* background-color: blueviolet; */
`;
const Logo = styled.img`
  height: 15vh;
  /* background-color: black; */
`;
const LogoWrapper = styled.div`
  display: flex;
  position: relative;
  left: -2.5em;
`;
const LanguageButton = styled.select`
  overflow: hidden;
  font-size: 1em;
  border: transparent;
  padding: 0.2em 1em;
  background-color: black;
  color: white;
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
  display: flex;
  position: relative;
  left: 22em;
  align-items: center;
  background-color: black;
  padding-left: 1em;
  border: 1px solid white;
  border-radius: 0.3em;
`;
const Label = styled.label``;
const SignIn = styled(Link)`
  padding: 0.3em 1em;
  background-color: red;
  color: white;
  font-size: 0.9em;
  font-weight: 600;
  border-radius: 0.3em;
  box-shadow: 0;
  text-decoration: none;
  border: transparent;
  transition: background-color 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    background-color: #d90505;
  }
`;
export default Navbar;
