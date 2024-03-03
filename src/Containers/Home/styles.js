import styled from 'styled-components'
import Background from '../../Assets/background1.svg'

export const Container = styled.div`
background: url("${Background}");
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

export const InputLabel = styled.p`


font-size: 18px;
font-style:normal;
font-weight: bold;
line-height: 30px;
letter-spacing: -0.408px;
color:#ffffff;
margin-left:20px;

`;

export const Input = styled.input`

background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
width: 348px;
height:58px;
padding-left:50px;

outline: none;
border: none;


color:#ffffff;
font-style:normal;
font-weight:normal;
font-size:20px;
line-height:20px;
margin-bottom:10px;


`;

export const Button = styled.button`

width:348px;
height:58px;
margin-top:130px;


background: rgba(0,0,0,0.8);
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

`;

