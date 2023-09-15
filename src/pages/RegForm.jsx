import { memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMyContext } from "../utils/utils";
import PropTypes from "prop-types";

const RegForm = memo(() => {
  const { enteredEmail, password, setPassword } = useMyContext();
  console.log(password);
  return (
    <Container>
      <Dialog>
        <Title>
          Welcome back!
          <br /> Joining Netflix is easy.
        </Title>
        <About>
          Enter your password and you&apos;ll be watching in no
          <br /> time.
        </About>
        <EmailLabel>
          Email
          <br />
          <EmailContent>{enteredEmail}</EmailContent>
        </EmailLabel>
        <Password
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Validate
          $visible={
            password.length >= 4 && password.length <= 60 ? "false" : "true"
          }
        >
          {(password.length > 0 && password.length < 4) || password.length > 60
            ? "Password should be between 4 and 60 characters."
            : "Password is required."}
        </Validate>
        <Forget>Forgot your password?</Forget>
        <Submit>Submit</Submit>
      </Dialog>
    </Container>
  );
});

RegForm.displayName = "RegForm";
RegForm.propTypes = { children: PropTypes.node };

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Dialog = styled.div`
  /* border: 1px solid black; */
  margin: 2em auto;
  height: 80%;
  width: 50vw;
  & > * {
    text-decoration: none;
    margin-left: 21%;
  }
`;
const Title = styled.div`
  font-size: 2em;
  font-weight: 600;
`;
const About = styled.div`
  margin-top: 0.5em;
  /* border: 1px solid blue; */
`;
const EmailLabel = styled.div`
  margin-top: 1.5em;
`;
const EmailContent = styled.div`
  font-weight: 600;
`;
const Password = styled.input`
  width: 33em;
  padding: 1.5em;
  margin-top: 1.5em;
  font-weight: 1000;
`;
const Validate = styled.div`
  color: #b92d2b;
  font-size: 0.8em;
  visibility: ${(props) => (props.$visible === "true" ? "visible" : "hidden")};
`;
const Forget = styled(Link)`
  display: inline-block;
  margin-top: 0.8em;
  position: relative;
  color: #0071eb;
  &:after {
    transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
    position: absolute;
    left: 0;
    top: 1.2em;
    content: "";
    display: inline-block;
    width: 100%;
    visibility: hidden;
    border-bottom: 1px solid #0071eb;
  }
  &:hover {
    &:after {
      visibility: visible;
    }
  }
`;
const Submit = styled(Link)`
  display: inline-block;
  margin-top: 1em;
  color: white;
  border-color: transparent;
  background-color: #e50914;
  font-size: 1.3em;
  padding: 0.8em 9em;
  border-radius: 0.3em;
  transition: background-color 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: red;
  }
`;

export default RegForm;
