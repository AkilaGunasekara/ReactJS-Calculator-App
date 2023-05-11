import { Button, Grid } from "@mui/material";



interface GridDigitButtonProps {
    digit: String;
    enterDigit: (digit: string) => void;
    xs?: number;
}
export const GridDigitButton: React.FC<GridDigitButtonProps> = ({
    digit,
    enterDigit,
    xs=3
})=> {
    return (
        <Grid item xs={xs}>
            <Button variant="contained" onClick={() => enterDigit("digit")}>
                {digit}
            
            </Button>
        </Grid>
      );
      ;
};

    
