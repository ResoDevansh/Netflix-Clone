import { useRef, memo } from "react";
import { styled } from "styled-components";
import { validate } from "email-validator";
import { Link } from "react-router-dom";
import { useMyContext } from "../utils/utils";
import Navbar from "../components/Navbar";
import Tv from "../components/Tv";
import bgImage from "../assets/home-background.jpg";
import arrow from "../assets/arrow.png";
import cross from "../assets/cross.png";
import tv from "../assets/tv.png";
import video from "../assets/video/video.mp4";
import image from "../assets/c2image.jpg";
import stranger from "../assets/stranger.png";
import gif from "../assets/gif/gif";

const Message = ({ email }) => {
  if (email?.length > 0 && validate(email) === false) {
    return <div>Please enter a valid email address.</div>;
  }
  if (email?.length === 0) {
    return <div>Email is required</div>;
  }
  return null;
};

const Home = memo(() => {
  const { enteredEmail, setEnteredEmail } = useMyContext();
  console.log("home rerender");

  let visibility = useRef(false);

  const checkCondition = () => {
    if (enteredEmail?.length === 0) {
      visibility.current = true;
      return;
    }
    if (enteredEmail?.length > 0 && !validate(enteredEmail)) {
      visibility.current = true;
      return;
    }
    visibility.current = false;
  };

  checkCondition();

  return (
    <Container>
      <TopContainer $backgroundImage={bgImage}>
        <Navbar />
        <FaceTag>
          <F1>
            The biggest Indian hits. The best Indian stories. <br />
            All streaming here.
          </F1>
          <F2>Watch anywhere. Cancel anytime.</F2>
          <F3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </F3>
          <Form>
            <EmailInput
              type="text"
              value={enteredEmail}
              onChange={(e) => {
                setEnteredEmail(e.target.value);
              }}
              required
            />
            <MagicPlaceholder placeholder="Email address" className="magic">
              Email address
            </MagicPlaceholder>
            <ToSignUp
              $visibility={visibility.current}
              to={!visibility.current && `/signup/registration?locale=en-IN`}
            >
              <Submit type="submit">
                <SubmitText>Get Started</SubmitText>
                <Arrow src={arrow} />
              </Submit>
            </ToSignUp>
            <Validate $present={visibility.current}>
              <Cross src={cross} />
              <Message email={enteredEmail} />
            </Validate>
          </Form>
        </FaceTag>
      </TopContainer>
      <CenterContainer>
        <C1>
          <Tv
            tv={tv}
            xCoord="50vw"
            yCoord="5vw"
            height="26em"
            width="35em"
            url={video}
          />
          <Para1>
            <Heading1>Enjoy on your TV</Heading1>
            <Content1>
              Watch on smart TVs, PlayStation, Xbox, Chromecast,
              <br /> Apple TV, Blu-ray players and more.
            </Content1>
          </Para1>
        </C1>
        <C2>
          <Image2 src={image} />
          <Para2>
            <Heading2>
              Download your shows
              <br /> to watch offline
            </Heading2>
            <Content2>
              Save your favourites easily and always have something <br />
              to watch.
            </Content2>
          </Para2>
          <Dialog>
            <ImageSmall src={stranger} />
            <DialogSmall>
              <Box>
                <Title>Stranger Things</Title>
                <Subtitle>Downloading...</Subtitle>
              </Box>
            </DialogSmall>
            <Gif src={gif[0]} />
          </Dialog>
        </C2>
        <C3></C3>
        <C4></C4>
      </CenterContainer>
    </Container>
  );
});
const Container = styled.div``;
const CenterContainer = styled.div``;
const C1 = styled.div`
  color: white;
  height: 85vh;
  border-bottom: 9px solid #1d1c1c;
  background-color: black;
`;
const Para1 = styled.div`
  /* border: 1px solid pink; */
  margin-top: -11em;
  width: 50vw;
  text-align: justify;
  padding-left: 11em;
`;
const Heading1 = styled.h1`
  font-size: 3em;
`;
const Content1 = styled.div`
  font-size: 1.4em;
`;
const C2 = styled(C1)``;
const Image2 = styled.img`
  height: 28em;
  width: 20em;
  margin-left: 19em;
  margin-top: 4em;
  object-fit: cover;
  z-index: 1;
  position: relative;
`;
const Heading2 = styled(Heading1)``;
const Para2 = styled(Para1)`
  padding: 0;
  margin-left: 47.5em;
  margin-top: -22em;
`;
const Content2 = styled(Content1)``;
const Dialog = styled.div`
  border: 1px solid white;
  width: 20vw;
  height: 6.5em;
  border-radius: 1em;
  z-index: 100;
  position: relative;
  margin-left: 19em;
  background-color: black;
  display: flex;
  align-items: center;
`;
const ImageSmall = styled.img`
  object-fit: cover;
  height: 5em;

  margin-left: 1em;
`;
const DialogSmall = styled.div`
  margin-left: 0.7em;
  min-width: 8em;
`;
const Gif = styled.img`
  border: 1px solid transparent;
  height: 3.3em;
  margin-left: 2.6em;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 0.9em;
  font-weight: 500;
`;
const Subtitle = styled.div`
  font-size: 0.8em;
  color: #0071eb;
`;
const C3 = styled(C1)``;
const C4 = styled(C1)``;
const TopContainer = styled.div`
  height: 101.8vh;
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  background-size: fill;
  background-position: -15vw -18em;
  -webkit-box-shadow: inset 0px 20px 120px 61px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px 20px 120px 61px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px 20px 120px 61px rgba(0, 0, 0, 0.75);
  z-index: 1;
  /* border-bottom: 8px solid #1d1c1c; */
  border-bottom: 9px solid #5c5b5b;
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
  /* border: 1px solid white; */
  pointer-events: none;
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
  color: #e6e3e3f5;
  padding: 0.6em;
  padding-top: 1.2em;
  padding-left: 0.8em;
  width: 22em;
  position: relative;
  left: -0.8em;
  border: 1px solid gray;
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
  visibility: visible;
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0.7em 2em;
  border-radius: 0.3em;
  cursor: pointer;
  background-color: rgb(229, 9, 20);
  text-decoration: none;
  border: transparent;
  color: white;
  transition: background-color 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    background-color: #d90505;
  }
`;
const ToSignUp = styled(Link)`
  visibility: ${(props) => (props.$visibility ? "visible" : "hidden")};
  text-decoration: none;
  justify-content: center;
  position: relative;
  left: -0.1em;
  align-items: center;
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

Home.displayName = "Home";
export default Home;
