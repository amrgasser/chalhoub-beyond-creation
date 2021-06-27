import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import {
  NumbersContainer,
  CarouselContainer,
  NumbersWrapper,Header,SubHeader
} from "./NumbersElements";
import './carousel.css'

const Numbers = () => {

    const breakPoints=[
        {width: 768, itemsToShow: 1},
        {width: 1000, itemsToShow: 3},
    ]

  return (
    <>
      <NumbersContainer>
        <NumbersWrapper>
            <Header> Chalhoub</Header>
            <SubHeader>in numbers</SubHeader>
          <CarouselContainer>
            <Carousel breakPoints={breakPoints}>
              <Card number="1" />
              <Card number="2" />
              <Card number="3" />
              <Card number="4" />
              <Card number="5" />
              <Card number="6" />
              <Card number="7" />
              <Card number="8" />
            </Carousel>
          </CarouselContainer>
        </NumbersWrapper>
      </NumbersContainer>
    </>
  );
};

export default Numbers;
