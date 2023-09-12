import { styled } from "styled-components";
import { Link } from "react-router-dom";
import bgImage from "../assets/login-background.jpg";
import logo from "../assets/netflix-logo.png";
import globe from "../assets/globe-icon.jpg";
// import auth from "../firebase/firebase";

const Login = () => {
  // console.log(auth);
  return (
    <Container>
      <Background $bgImage={bgImage}>
        <ToHome to="/in" alt={""}>
          <Logo src={logo}></Logo>
        </ToHome>
        <Dialog>
          <Title className="dialog-content">Sign In</Title>
          <Form className="dialog-content">
            <Email />
            <Password />
            <SignIn>Sign In</SignIn>
            <Options>
              <RememberMe type="checkbox" />
              <Text>Remember me</Text>
              <Help>Need help?</Help>
            </Options>
          </Form>
          <Para>
            <Line1>
              New to Netflix? <SimpleText>Sign up now.</SimpleText>
            </Line1>
            <Line2>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <LearnMore>Learn more.</LearnMore>
            </Line2>
          </Para>
        </Dialog>
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
      </Background>
    </Container>
  );
};

const Container = styled.div``;
const Background = styled.div`
  background-image: ${(props) => `url(${props.$bgImage})`};
`;
const ToHome = styled(Link)`
  text-decoration: none;
  display: inline-block;
  margin: 20px;
  height: 6em;
  margin: -1em 0 0 1.6em;
  z-index: 111;
  position: relative;
`;
const Logo = styled.img`
  position: relative;
  z-index: -1;
  pointer-events: none;
  object-fit: cover;
  height: 7em;
`;
const Dialog = styled.div`
  pointer-events: all;
  width: 29vw;
  margin-left: 34.7vw;
  padding: 4em;
  padding-top: 4em;
  padding-left: 4.3em;
  color: white;
  background-color: rgb(0, 0, 0, 0.6);
`;
const Title = styled.h1`
  font-weight: 600;
  font-size: 1.8em;
  margin-bottom: 1em;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Email = styled.input`
  &:focus {
    border: transparent;
    outline: none;
    color: white;
  }
  padding: 1.2em;
  border: transparent;
  background-color: #2c2b2b;
  margin-bottom: 1em;
`;
const Password = styled.input`
  &:focus {
    outline: none;
    color: white;
  }
  padding: 1.2em;
  border: transparent;
  background-color: #2c2b2b;
  margin-bottom: 3em;
`;
const SignIn = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: #e50914;
  padding: 0.7em;
  font-weight: bolder;
  border-radius: 0.3em;
  text-align: center;
  margin-bottom: 0.5em;
`;
const RememberMe = styled.input`
  font-size: 0.8em;
  background-color: #a09e9e;
`;
const Help = styled.span`
  font-size: 0.8em;
`;
const Options = styled.div`
  color: #a09e9e;
  display: flex;
  justify-content: space-between;
`;
const Text = styled.div`
  font-size: 0.8em;
  margin-left: -10em;
`;
const Para = styled.div`
  margin-bottom: 5em;
  margin-top: 6em;
`;
const Line1 = styled.div`
  color: #a09e9e;
  margin-bottom: 0.7em;
`;
const Line2 = styled.div`
  font-size: 0.75em;
  color: #a09e9e;
  line-height: 1.3em;
`;
const SimpleText = styled.div`
  color: white;
  display: inline-block;
`;
const LearnMore = styled.a`
  color: #0071eb;
`;
const Footer = styled.div`
  border: 1px solid transparent;
  position: relative;
  color: #a09e9e;
  margin-top: 7em;
  height: 37vh;
  background-color: rgb(0, 0, 0, 0.7);
`;
const L1 = styled.div`
  position: relative;
  left: 0em;
  /* top: 2em; */
  /* border: 1px solid white; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50vw;
  margin-top: 2em;
  margin-left: 17%;
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
  left: 16em;
  top: 2em;
  align-items: center;
  background-color: black;
  padding-left: 1em;
  border: 0.1px solid #a09e9e;
  border-radius: 0.3em;
`;
const Label = styled.label``;
export default Login;
