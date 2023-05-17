import React, { FC }  from 'react';
import Head from 'next/head';

import styled from 'styled-components';

const Body = styled.div`
    height: 100%;
    width: 100%;
    background-color: bisque;
    overflow: auto;
`;

type Props = {
    children?: React.ReactNode
};

const LayoutMaster: FC<Props> = ({children} ) => {
  return (
    <>
        <Head>
            <title> Generador de Caracteres </title>
            <meta name='title' content='Generado de caracteres dinamicos' />
            <meta name='description' content='Pagina para generar caracteres dinamicos.' />
            <meta name='keywords' content='characteres, dynamic, page' /> 
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        </Head>
        <Body>
            {children}
        </Body>
    </>
  )
}

export default LayoutMaster;