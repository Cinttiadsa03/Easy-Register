import styled from 'styled-components'
import Background from '../../Assets/background2.svg'

export const Container = styled.div`
background: url("${Background2}");
background-size: cover;
display:flex;
flex-direction:column;
align-items: center;
gap: 40px;



`;

export const Image = styled.img`
margin-top: 30px;
`;

export const ContainerItens = styled.div`
background:linear-gradient(
157.44deg,
rgba(255,255,255,0.6)0.84%,
rgba(255,255,255,0.6)0.85%,
rgba(255,255,255,0.15)100%

);


border-radius: 61px 61px 0px 0px;
backdrop-filter:blur(45px);
padding: 50px 36px;
display:flex;
flex-direction:column;
height:100vh;

`;


export const H1 = styled.h1`

font-family: Roboto;
font-size: 34px;
font-weight: 700;
line-height: 40px;
text-align: center;
margin-bottom:80px;
color:#ffff


`;

export const Button = styled.button`

width:348px;
height:58px;
margin-top:120px;
border:1px solid;


background: transparent;
border-radius:14px;
font-style: normal;
font-weight: bold;
font-size:18px;
line-height:20px;


color:#ffffff;
cursor: pointer;
display:flex;
align-items: center;
justify-content: center;
gap:20px;



&:hover{  
opacity:0.8;
}

&:active{
opacity:0.5;
}

img{
    transform: rotatey(180deg);
}
`;
