import React from "react";
import styled,{css,keyframes,ThemeProvider, createGlobalStyle} from "styled-components";

export default function ComponentesEstilizados(){
    let mainColor = "red";
    let secondColor = "yellow";

    const light = {
        color:'#222',
        bgColor:'#DDD'
    };
    const dark = {
        color:'#DDD',
        bgColor:'#222'
    };

    const Box =styled.div`
        padding:1rem;
        margin:1rem;
        color:${({theme})=>theme.color};
        background-color:${({theme})=>theme.bgColor};
        
    `;

    const BoxRendend = styled(Box)`
        border-radius:20rem;
    `;

    const fadedin = keyframes`
        0%{ 
            opacity:0;
        }

        100%{
            opacity:1;
        }

    `;

   const  setTransitionTime = (time)=>`all ${time} ease-in-out`;

    const MyH3 = styled.h3`
        background-color:green;
        color:${(props)=>props.color ||'pink'};
        transition:${setTransitionTime('4s')};    
        ${(props)=>props.isButton && css
            `margin:auto;
            max-width:50%;
            border-radius:0.25rem;
            cursor:pointer`
             
        }

        animation:${fadedin} 2s ease-in-out;

        &:hover{
        border:20px solid ${secondColor};
        }
        
    `;


    const GlobalStyle = createGlobalStyle`
        h2{
        background-color:gray;
        text-transform:lowercase
        }
    `;
    return(
        <>
            <GlobalStyle/> 
            <MyH3>ESTE ES UN COMPONENTE ESTILIZADO</MyH3>
            <MyH3 color="blue">ESTE ES UN COMPONENTE ESTILIZADO</MyH3>
            <MyH3 isButton> ESTE ES UN H3 CONVERTIDO EN BUTTON</MyH3>
            <ThemeProvider theme={light}>
            <Box >CAJA CON LUZ</Box>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
            <Box>CAJA OSCURA</Box>
            <BoxRendend>Este es una caja redondeada</BoxRendend>
            </ThemeProvider>

            <ThemeProvider theme={light}>
              <BoxRendend>Este es una caja redondeada</BoxRendend>
            </ThemeProvider>
            
        </>
    )
}