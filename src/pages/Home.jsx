import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import bgImage from "../assets/home-background.jpg";
import arrow from "../assets/arrow.png";

const Home = () => {
  return (
    <Container backgroundImage={bgImage}>
      <Navbar />
      <FaceTag>
        <F1>
          The biggest Indian hits. The best Indian stories. All
          <br /> streaming here.
        </F1>
        <F2>Watch anywhere. Cancel anytime.</F2>
        <F3>
          Ready to watch? Enter your email to create or restart your membership.
        </F3>
        <Form>
          <EmailInput type="email" placeholder="Email address" />
          <Submit type="submit">
            <SubmitText>Get Started</SubmitText>
            <Arrow src={arrow} />
          </Submit>
        </Form>
      </FaceTag>
    </Container>
  );
};

const Container = styled.div`
  height: 101.8vh;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: fill;
  background-position: -15vw -18em;
  -webkit-box-shadow: inset 0px 20px 120px 61px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px 20px 120px 61px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px 20px 120px 61px rgba(0, 0, 0, 0.75);
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
  margin-bottom: 0.7em;
`;
const F3 = styled.div`
  text-align: center;
  font-size: 40%;
  font-weight: normal;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 0.5em;
`;
const EmailInput = styled.input`
  color: white;
  padding: 1em;
  width: 30em;
  position: relative;
  left: -2em;
  border: 1px solid red;
  background-color: rgb(10, 10, 10, 0.6);
  border-radius: 0.3em;
  font-size: 0.3em;
  &::placeholder {
    color: #dfd3d0;
    font-size: 1.2em;
  }
`;
const Submit = styled.button`
  padding: 0.7em 1.3em;
  border-radius: 0.3em;
  cursor: pointer;
  background-color: red;
  text-decoration: none;
  border: transparent;
  color: white;
  display: inline-flex;
  align-items: center;
  transition: background-color 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    background-color: #d90505;
  }
  position: relative;
  left: -1.3em;
`;
const Arrow = styled.img`
  height: 1.5em;
  font-weight: 900;
`;
const SubmitText = styled.div`
  font-size: 1.7em;
  font-weight: 500;
`;
export default Home;
