import styled from "styled-components";

export const Button = styled.button`

width:348px;
height:58px;
margin-top:130px;


background:${props => props.isBack ? 'transparent':'rgba(0, 0, 0, 0.8)'};
border: ${ props => props.isBack ? '1px solid #ffffff' : 'none'};
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
    transform:${props=> props.isBack &&'rotateY(180deg)'};
   
}

`;


