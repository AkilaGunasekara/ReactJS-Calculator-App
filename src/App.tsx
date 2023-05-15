import React, { useState } from 'react';
import { GridOparationButton } from './GridOperationButton';
import { GridDigitButton } from './GridDigitButton';
import { 
  Button, 
  Container, 
  Grid, 
  Paper, 
  styled 
} from '@mui/material';

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
  const[overwrite, setOverwrite] = useState(true);
  
  const equals = () => {
    const val = calculate();
    setCurrentValue(`${val}`);
    setPrevValue("");
    setOperation("");
    setOverwrite(true);
  };

  const calculate = () => {
    if (!prevValue || !Operation) return currentValue;

    const curr = parseFloat(currentValue);
    const prev = parseFloat(prevValue);

    console.log("curr", curr);
    console.log("prev", prev);
    let result;
    switch (Operation) {
      case "÷":
        result = prev / curr;
        break;
      case "*":
        result = prev * curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "+":
        result = prev + curr;
        break;
    }
    console.log("result", result);
    return result;
  };

  const clear = () => {
    setPrevValue("");
    setOperation("");
    setCurrentValue("0");
    setOverwrite(true);
  };

  const del = () => {
    setCurrentValue("0");
    setOverwrite(true);
  };

  const percent = () => {
    const curr = parseFloat(currentValue);
    setCurrentValue((curr / 100).toString());
  };

  const selectOperation = (x: string) => {
    if (prevValue) {
      const val = calculate();
      setCurrentValue(`${val}`);
      setPrevValue(`${val}`);
    } else {
      setPrevValue(currentValue);
    }
    setOperation(x);
    setOverwrite(true);
  };

  const setDigit = (digit: string) => {
    if (currentValue[0] === "0" && digit === "0") return;
    if (currentValue.includes(".") && digit === ".") return;

    if (overwrite && digit !== ".") {
      setCurrentValue(digit);
    } else {
      setCurrentValue(`${currentValue}${digit}`);
    }
    setOverwrite(false);
  };



  return (
    
    <Container maxWidth="sm">
    <CalculatorBase elevation={3}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <OutputContainer data-testid="output">
            {currentValue}
          </OutputContainer>
        </Grid>
        <Grid item container columnSpacing={1}>
          <GridOparationButton
            operation={"AC"}
            selectOperation={clear}
            selectedOperation={Operation}
          />
          <GridOparationButton
            operation={"C"}
            selectOperation={del}
            selectedOperation={Operation}
          />
          <GridOparationButton
            operation={"%"}
            selectOperation={percent}
            selectedOperation={Operation}
          />
          <GridOparationButton
            operation={"÷"}
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
          <GridDigitButton xs={3} digit={"0"} enterDigit={setDigit} />
          <GridDigitButton digit={"."} enterDigit={setDigit} />

          <Grid item xs={6}>
            <Button fullWidth variant="contained" onClick={equals}>
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
