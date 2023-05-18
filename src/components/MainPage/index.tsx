import React from 'react';

import Link from 'next/link';

import styled from 'styled-components';

const MainContainer = styled.div`
    height: 100%;
    width: 100%;
`;

const ContainerButtons = styled.div`
    height: 100%;
    width: 100%;
    margin: 0 auto;
    overflow: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Button = styled.a`
    width: 200px;
    height: 50px;
    margin: 0 50px;
    background-color: #F2921D;
    color: #FFF;
    border-radius: 15px;
    font-weight: 700;
    border: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover{
        cursor: pointer;
    }
`;

const index = () => {
  return (
    <MainContainer>
        <ContainerButtons>
            <Link href="/simple" passHref legacyBehavior>
                <Button>
                    Generador Simple
                </Button>
            </Link>
            <Link href="#" passHref legacyBehavior>
                <Button>
                    Generador Matrix
                </Button>
            </Link>
        </ContainerButtons>
    </MainContainer>
  )
}

export default index;