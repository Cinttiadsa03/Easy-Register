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

