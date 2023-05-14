import { Button, Container, Grid, Paper, styled } from '@mui/material';
import React, { useState } from 'react';
import { GridOparationButton } from './GridOperationButton';
import { GridDigitButton } from './GridDigitButton';

const OutputContainer = styled("div")(({theme})=> ({
  width: "100%",
  textAlign: "right",
  height: "2em",
  padding: theme.spacing(2),
  fontSize:"3em",
  overflow:"hidden"
}));

const CalculatorBase = styled(Paper) (({theme})=> ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15

}));

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const[Operation, setOperation] = useState(""); 
  const[prevValue, setPrevValue] = useState("");
  const[overwrite, setOverwrite] = useState("");
  
  const equals = () => {
    const val = calculate();
    setCurrentValue(`${val}`);
    setPrevValue("");
    setOperation("");
    setOverwrite(true);
  };

  const selectOperation = (operation: string) => {
    setOperation(operation);
  };


  const setDigit = (digit: string) => { 
    

    if(overwrite && digit !== "."){
      setCurrentValue(digit);
    }

    setCurrentValue('${currentValue}${digit}');

  };



  return (
    
      <Container maxWidth="sm">
        <CalculatorBase elevation={3}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <OutputContainer>{currentValue}</OutputContainer>
            </Grid>
            <Grid item container columnSpacing={1}>
              <GridOparationButton
              operation={"AC"}
              selectOperation={selectOperation}
              selectedOperation={Operation}
              />
              <GridOparationButton
              operation={"C"}
              selectOperation={selectOperation}
              selectedOperation={Operation}
              />
              <GridOparationButton
              operation={"%"}
              selectOperation={selectOperation}
              selectedOperation={Operation}
              />
              <GridOparationButton
              operation={"/"}
              selectOperation={selectOperation}
              selectedOperation={Operation}
              />
            </Grid>
            <Grid item container columnSpacing={1}>
              <GridDigitButton digit={"7"} enterDigit={setDigit} />
              <GridDigitButton digit={"8"} enterDigit={setDigit} />
              <GridDigitButton digit={"9"} enterDigit={setDigit} />
              <GridOparationButton
              operation={"*"}
              selectOperation={selectOperation}
              selectedOperation={Operation}
              />
          </Grid>
          <Grid item container columnSpacing={1}>
              <GridDigitButton digit={"4"} enterDigit={setDigit} />
              <GridDigitButton digit={"5"} enterDigit={setDigit} />
              <GridDigitButton digit={"6"} enterDigit={setDigit} />
              <GridOparationButton
              operation={"-"}
              selectOperation={selectOperation}
              selectedOperation={Operation}
              />
          </Grid>
          <Grid item container columnSpacing={1}>
              <GridDigitButton digit={"1"} enterDigit={setDigit} />
              <GridDigitButton digit={"2"} enterDigit={setDigit} />
              <GridDigitButton digit={"3"} enterDigit={setDigit} />
              <GridOparationButton
              operation={"+"}
              selectOperation={selectOperation}
              selectedOperation={Operation}
              />
          </Grid>
          <Grid item container columnSpacing={1}>
              <GridDigitButton digit={"0"} enterDigit={setDigit} xs={6}/>
              <GridDigitButton digit={"1"} enterDigit={setDigit} />
              <Grid item xs={3}>
                <Button fullWidth variant="contained">
                  =
                </Button>
          </Grid>
          </Grid>
          </Grid>
        </CalculatorBase>

      </Container>
    
  );  
}

export default App;
