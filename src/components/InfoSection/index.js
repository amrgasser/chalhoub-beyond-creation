import React from "react";
import {InfoContainer,InfoWrapper,InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, BtnWrap,  ImgWrap, Img, ButtonStyle, Arrow, WholeImageWrap} from './InfoElements'
import {Button} from '../ButtonElement'
import {BiRightArrowAlt} from 'react-icons/bi'
import Ceo from '../../images/ceo.png'
import Dotsimg from '../../images/homeDots.png'


const InfoSection = () => {
  return (
    <>
      <InfoContainer style={{backgroundImage:`image(${Dotsimg})`}}>
        <InfoWrapper>
          <InfoRow imgStart={true}>
            <Column1>
              <TextWrapper>
                <Heading style={{color:'#004b79'}}>Chalhoub</Heading>
                <Heading style={{color:'#ad8c66'}}>Group</Heading>
                <TopLine> The Chalhoub Group is the leading partner for luxury across the middle east since 1955. As an export in retail, distribution and marketing services based in Dubai, the Group has become a major player in the beauty, fashion and gift sectors regionally.</TopLine>

                <TopLine style={{paddingBottom:'1.5rem'}}>By blending its Middle East expertise and intimate knowledge of luxury, the Chalhoub Group is building brands in the region, by offering service excellence to all its partners and a unique experience to its customers. The Group is moving fast from a traditional distributor and retailer for luxury in the Middle East to a hybrid retailer bringing luxury experiences everywhere.</TopLine>
              <BtnWrap>
                  <Button style={ButtonStyle} to='/'>LEARN MORE</Button>
                  <Arrow><BiRightArrowAlt/></Arrow>
              </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
                {/* <WholeImageWrap> */}
                <ImgWrap>
                    <Img src={Ceo}/>
                </ImgWrap>
                {/* </WholeImageWrap> */}
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
