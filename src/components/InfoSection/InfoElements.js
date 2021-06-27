import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: #fff;
  margin-top: 50px;

  @media screen and (max-width: 768 px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col2 col1";
  @media screen and (max-width: 768px) {
    grid-template-areas: "col2" "col1";
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
//   grid-column: 2;
//   grid-row:1;
  grid-area: col1;
    // @media screen and (max-width : 768px){
    //     grid-column: 1;
    // grid-row:2;
}
       

`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  //   grid-column: 1;
  //   grid-row:1;

  @media screen and (max-width: 980px){
    //   margin-bottom: 100px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #003767;
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
  // margin-bottom:10px;
`;

export const Heading = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 700;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  border: 1px solid #ad8c66;
  padding: 10px;
  max-height: 45px;
  width: 200px;
  align-items: center;
  border-radius: 15px 35px 35px 2px;
  transition: 0.3s all ease-in-out;
  // overflow: hidden;

  :hover {
    transform: scale(1.2);
    transition: 0.3s all ease-in-out;
  }
`;

export const ImgWrap = styled.div`
  diplay: flex;
  max-width: 450px;
  height: 500px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(
    to top,
    #f1eae3 0%,
    #f1eae3 66%,
    #ffffff 66%,
    #ffffff 100%
  );
  
`;

export const Img = styled.img`
  display: absolute;
  position: relative;
  width: 70%;

  //   margin: 0 0 10px 0;
`;

export const WholeImageWrap = styled.div`
  display: flex;
  max-width: 555px;
  background: #ff0000;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyle = {
  color: "#ad8c66",
  fontSize: "8px",
  fontWeight: "900",
  letterSpacing: "3px",
  marginLeft: "5px",
};

export const Arrow = styled.div`
  display: flex;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #f1ece7;
  align-items: center;
  justify-content: center;
  position: relative;
  right: -47px;
  font-size: 30px;
  color: #ad8c66;
`;

export const Dots = styled.div`
  grid-colomun: 3;
  grid-row: 1;
  height: 50px;
  width: 20px;
  z-index: 1000;
`;
