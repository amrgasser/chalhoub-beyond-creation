import styled from "styled-components";

export const CardContainer = styled.div`
    width:100%;
    height:500px;
    background: transparent;
    color: black;
    font-size:30px;
    margin: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NumbersContainer = styled.div`
  color: #fff;
  background: #faf7f5;
  

  @media screen and (max-width: 768px) {
    margin-top: 170px;
  }
`;

export const NumbersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1700px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
  justify-content: center;
  align-items: center
`;

export const CarouselContainer=styled.div`
  height: 50%;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`

export const Header=styled.h1`
  font-size: 64px;
  font-weight: 900;
  color: #003666;
`

export const SubHeader=styled.h1`
  font-size: 32px;
  font-weight: 900;
  color: #b49471;
`