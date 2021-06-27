import styled from "styled-components";

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display:flex;
    justify-content: center;
    align-items:center;
    padding: 0 30px;
    height:850px;
    top:0;
    z-index: 1;
    align-items:center;
    justify-content:center;

    :before {
        content:'';
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0% ,rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0% ,transparent 100%);
        z-index:2;
    }
`

export const HeroBackground=styled.div`
    position: absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    width:100%;
    height:100%;
    overflow:hidden;
    background-color:#fff;
`
export const VideoBackground=styled.video`
    width:100%;
    height:100%;
    -o-object-fit:cover;
    object-fit:cover;
    background:#232a34;
`
export const BackgroundImage=styled.img`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:#232a34;
`

export const HeroH1 = styled.h1`
    color:#fff;
    font-size: 72px;
    text-align:center;

    @media screen and (max-width: 768px){
        font-size: 48px
    }

    @media screen and (max-width: 480px){
        font-size: 40px
    }
`
export const HeroContent = styled.div`
    z-index:3;
    max-width:1200px;
    position:absolute;
    padding: 8px 24px;
    display: flex;
    align-items: center;
`

export const ButtonText=styled.p`
    color:#fff;
    font-size:10px;
    text-align:center;
    letter-spacing: 4px;
`

export const HeroBtnWrapper=styled.div`
    margin-top:32px;
    display:flex;
    flex-direction; column;
    align-items:center;
    z-index:4;
    position: absolute;
    bottom: 40px;
`

