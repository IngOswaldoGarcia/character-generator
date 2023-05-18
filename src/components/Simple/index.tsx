import React, { useState, useEffect } from 'react'

import styled from 'styled-components';

const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`;

const ControlContainer = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 200px;
    height: 250px;
    background-color: #FFF;
    border-radius: 30px;
`;

const FormContainer = styled.form`
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const LabelInput = styled.label`
    color: #592614;
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: 500;
`;

const Input = styled.input`
    width: 100%;
    border-radius: 10px;
    margin-top: 5px;
    border: 1px solid #bdbebd;
    height: 30px;
    padding: 0 10px;
    text-align: center;
    font-weight: 700;
    &:focus{
        outline: 1.5px solid #bdbebd;
    }
`;

const InputSubmit = styled.input`
    width: 100%;
    border-radius: 5px;
    margin-top: 5px;
    border: 0;
    color: #FFF;
    background-color: #A3A649;
    height: 30px;
    &:hover{
        cursor: pointer;
    }
`;

const MesuringContainer = styled.div`
    position: absolute;
    top: 10px;
    right: 0;
    left: 0;
    width: 200px;
    height: 150px;
    margin: 0 auto;
    background-color: #FFF;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    text-align: center;
`;

const LabelContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const LabelTitle = styled.span`
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    color: #592614;
`;

const LabelCounter = styled.span`   
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    color: #000;
`;

const CharactersContainer = styled.p`   
    width: 100%;
    height: 100%;
    font-size: 1rem;
`;

const StopGeneration = styled.button`
    width: 80%;
    border-radius: 5px;
    margin-top: 5px;
    border: 0;
    color: #FFF;
    background-color: #A3A649;
    height: 30px;
    &:hover{
        cursor: pointer;
    }
`;

const Simple = () => {

    const [stopGenerator, setStopGenerator] = useState(false);

    useEffect(() => {
        if (stopGenerator){
            setInterval(() => {
                console.log("Hola");
            }, 1000);  
        }
      }, [stopGenerator]);
/* 
    const mainGeneratorFunc = () => { 
        console.log(stopGenerator);
         const interval = setTimeout(() => {
            console.log("Hola");
            console.log(stopGenerator);
            if(stopGenerator) clearInterval(interval);
        }, 1000);  
    }
*/
    const startGenerator = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setStopGenerator(true);
    }  

    const stopGeneratorValue = () => {
        console.log("click");
        setStopGenerator(false);
    };
 
  return (
    <MainContainer>
        <MesuringContainer>
            <LabelContainer>
                <LabelTitle>
                    Total Time:
                </LabelTitle>
                <LabelCounter>
                    0
                </LabelCounter>
            </LabelContainer>
            <LabelContainer>
                <LabelTitle>
                    Characters Number:
                </LabelTitle>
                <LabelCounter>
                    0
                </LabelCounter>
            </LabelContainer>
            <StopGeneration onClick={() => {stopGeneratorValue()}}>Stop</StopGeneration>
        </MesuringContainer>
        <ControlContainer>
            <FormContainer onSubmit={(e) => startGenerator(e)}>
                <LabelInput>
                    Number of characters:
                    <Input type="text"/>
                </LabelInput>
                <LabelInput>
                    Time between characters:
                    <Input type="text"/>
                </LabelInput>
                <InputSubmit type="submit" />
            </FormContainer>
        </ControlContainer>
        <CharactersContainer>
            hola
        </CharactersContainer>
    </MainContainer>

  )
}

export default Simple;