import { useState, useRef } from "react";
import { styled } from "styled-components";
import { validate } from "email-validator";
import Navbar from "../components/Navbar";
import bgImage from "../assets/home-background.jpg";
import arrow from "../assets/arrow.png";
import cross from "../assets/cross.png";

const Message = ({ email }) => {
  if (email.length > 0 && validate(email) === false) {
    return <div>Please enter a valid email address.</div>;
  }
  if (email.length === 0) {
    return <div>Email is required</div>;
  }
  return null;
};

const Home = () => {
  const [email, setEmail] = useState("");
  let visibility = useRef(false);
  // let visibility = { current: false };
  console.log(visibility.current);

  const checkCondition = () => {
    if (email.length === 0) {
      visibility.current = true;
      return;
    }
    if (email.length > 0 && !validate(email)) {
      visibility.current = true;
      return;
    }
    visibility.current = false;
  };
  checkCondition();
  console.log(visibility.current);
  return (
    <Container $backgroundImage={bgImage}>
      <Navbar />
      <FaceTag>
        <F1>
          The biggest Indian hits. The best Indian stories. <br />
          All streaming here.
        </F1>
        <F2>Watch anywhere. Cancel anytime.</F2>
        <F3>
          Ready to watch? Enter your email to create or restart your membership.
        </F3>
        <Form>
          <EmailInput
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <MagicPlaceholder placeholder="Email address" className="magic">
            Email address
          </MagicPlaceholder>
          <Submit type="submit">
            <SubmitText>Get Started</SubmitText>
            <Arrow src={arrow} />
          </Submit>
          <Validate $present={visibility.current}>
            <Cross src={cross} />
            <Message email={email} />
          </Validate>
        </Form>
      </FaceTag>
    </Container>
  );
};

const Container = styled.div`
  height: 101.8vh;
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  background-size: fill;
  background-position: -15vw -18em;
  -webkit-box-shadow: inset 0px 20px 120px 61px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px 20px 120px 61px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px 20px 120px 61px rgba(0, 0, 0, 0.75);
  z-index: 1;
`;

const FaceTag = styled.div`
  margin-top: 3.5em;
  color: white;
  font-size: 2.8em;
  font-weight: 800;
  display: flex;
  flex-direction: column;
`;

const F1 = styled.div`
  text-align: center;
  /* font-size: 100%; */
`;
const F2 = styled.div`
  text-align: center;
  font-size: 50%;
  font-weight: normal;
  margin-top: 0.5em;
  margin-bottom: 1em;
`;
const F3 = styled.div`
  text-align: center;
  font-size: 40%;
  font-weight: normal;
`;
const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 0.5em;
  /* background-color: peachpuff; */
`;
const EmailInput = styled.input`
  color: white;
  padding: 0.6em;
  padding-top: 1.3em;
  padding-left: 0.8em;
  width: 22em;
  position: relative;
  left: -0.8em;
  border: 1px solid red;
  background-color: rgb(10, 10, 10, 0.6);
  border-radius: 0.3em;
  font-size: 0.4em;
  &:focus ~ .magic,
  &:not(:focus):valid ~ .magic {
    /* &:not(:focus):valid ~ .magic { */
    left: 31.2vw;
    font-size: 0.23em;
    transform: translateY(-2em);
  }
`;
const Submit = styled.button`
  display: flex;
  align-items: center;
  padding: 0.7em 1.3em;
  border-radius: 0.3em;
  cursor: pointer;
  background-color: red;
  text-decoration: none;
  border: transparent;
  color: white;
  transition: background-color 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    background-color: #d90505;
  }
  position: relative;
  left: -0.5em;
`;
const Arrow = styled.img`
  height: 1.5em;
  font-weight: 900;
`;
const SubmitText = styled.div`
  font-size: 1.7em;
  font-weight: 500;
`;
const MagicPlaceholder = styled.span`
  font-size: 0.3em;
  font-weight: initial;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0;
  position: absolute;
  left: 31vw;
  bottom: 1.4em;
  pointer-events: none;
  transition: all 200ms ease;
`;
const Validate = styled.div`
  color: #d82805;
  display: flex;
  align-items: center;
  font-size: 0.25em;
  position: absolute;
  font-weight: 500;
  top: 6em;
  left: 30.2vw;
  visibility: ${(props) => (props.$present ? "visible" : "hidden")};
`;
const Cross = styled.img`
  margin-right: 0.3em;
  height: 1.2em;
  border: 1px solid red;
  border-radius: 50%;
`;
export default Home;
