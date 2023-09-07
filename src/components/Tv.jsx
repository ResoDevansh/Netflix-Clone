import { styled } from "styled-components";

const Tv = ({ tv, xCoord, yCoord, height, width, url }) => {
  return (
    <Container>
      <TvImage
        src={tv}
        $marginLeft={xCoord}
        $marginTop={yCoord}
        $height={height}
        $width={width}
      />
      <Video autoPlay muted loop $marginLeft={xCoord}>
        <Source src={url} type="video/mp4" />
        Resource does not exist
      </Video>
    </Container>
  );
};

const TvImage = styled.img`
  margin-left: ${(props) => props.$marginLeft};
  margin-top: ${(props) => props.$marginTop};
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  z-index: 100;
  position: relative;
`;

const Video = styled.video`
  background-color: white;
  color: white;
  margin-left: 52.6em;
  margin-top: -21em;
  height: 14em;
  width: 25.5em;
  object-fit: cover;
  display: block;
  z-index: 1;
`;

const Source = styled.source``;
const Container = styled.div``;
export default Tv;
