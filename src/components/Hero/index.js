import React, { useState } from "react";
import {
  HeroContainer,
  HeroBackground,
  VideoBackground,
  HeroH1,
  HeroBtnWrapper,
  ButtonText,
  HeroContent,
  BackgroundImage,
} from "./HeroElements";
import HeroImg from "../../images/heroImg.png";
import Video from "../../images/ch.mp4";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { Button } from "../ButtonElement.js";
const Hero = () => {
  const [isVideoOn, setIsVideoOn] = useState(false);
  console.log(isVideoOn);

  return (
    <HeroContainer>
      <HeroBackground>
        {isVideoOn ? (
          <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
        ) : (
          <BackgroundImage src={HeroImg} />
        )}
      </HeroBackground>
      <HeroContent>
        <HeroH1> Leading Partner for Luxury across the middle east</HeroH1>
      </HeroContent>
      <HeroBtnWrapper>
        <Button
          onClick={() => {
            setIsVideoOn(true);
            console.log("hello");
          }}
          style={{
            flexDirection: "column",
          }}
        >
          <ButtonText onClick={() => {
            setIsVideoOn(true);
            console.log("hello");
          }}>WATCH THE VIDEO</ButtonText>
          <AiOutlinePlayCircle style={{ color: "white", fontSize: "30px" }} />
        </Button>
      </HeroBtnWrapper>
    </HeroContainer>
  );
};

export default Hero;
