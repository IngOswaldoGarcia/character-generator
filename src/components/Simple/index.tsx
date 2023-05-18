import React, { useState, useEffect } from 'react'

import styled from 'styled-components';

const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`;

const ControlContainer = styled.div`
    position: fixed;
    top: 10px;
    right: 40px;
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
    position: fixed;
    top: 10px;
    right: 0;
    left: 0;
    width: 200px;
    height: auto;
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
    display: flex;
    flex-direction: row;
    word-break: break-all;
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
    const [generatorStatus, setGeneratorStatus] = useState(false);
    const [characters, setCharacters] = useState("");
    const [charactersLimit, setCharactersLimit] = useState(0);
    const [timer, setTimer] = useState(0);
    const [time, setTime] = useState(0);

    const generateTimeout = () => {setTimeout(() => {
        setCharacters(characters.concat(Math.random().toString(36).substr(2, 1)))
    }, time)}

    const startTimer = () => {setTimeout(() => {
        setTimer(timer + 1);
    }, 1000)}

    useEffect(() => {
        if(generatorStatus){
            startTimer();
        } 
    }, [timer, generatorStatus]);

    useEffect(() => {
        if(generatorStatus && characters.length < charactersLimit){
            generateTimeout();
        }else if(characters.length >= charactersLimit){
            setGeneratorStatus(false);
        }

    }, [characters, generatorStatus])
    
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
    const startGenerator =  (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setGeneratorStatus(true)
    }  

    const stopGeneratorValue = () => {
        setGeneratorStatus(false);
    };

    const clearGeneratorValues = () => {
        setCharacters("");
        setTimer(0);
    };
 
  return (
    <MainContainer>
        <MesuringContainer>
            <LabelContainer>
                <LabelTitle>
                    Total Time:
                </LabelTitle>
                <LabelCounter>
                    {timer}
                </LabelCounter>
            </LabelContainer>
            <LabelContainer>
                <LabelTitle>
                    Characters Number:
                </LabelTitle>
                <LabelCounter>
                    {characters.length}
                </LabelCounter>
            </LabelContainer>
            <StopGeneration onClick={() => {stopGeneratorValue()}}>Stop</StopGeneration>
            <StopGeneration onClick={() => {clearGeneratorValues()}}>Clear</StopGeneration>
        </MesuringContainer>
        <ControlContainer>
            <FormContainer onSubmit={(e) => startGenerator(e)}>
                <LabelInput>
                    Number of characters:
                    <Input type="number" value={charactersLimit} onChange={e => setCharactersLimit(parseFloat(e.target.value))}/>
                </LabelInput>
                <LabelInput>
                    Time between characters:
                    <Input type="number" value={time} onChange={e => setTime(Number(e.target.value))} />
                </LabelInput>
                <InputSubmit type="submit" />
            </FormContainer>
        </ControlContainer>
        <CharactersContainer>
            {characters}
        </CharactersContainer>
    </MainContainer>

  )
}

export default Simple;