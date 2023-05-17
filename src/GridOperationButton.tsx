import { Button, Grid, styled } from "@mui/material";



interface GridOperationButtonProps {
    operation: string;
    selectOperation: (operation: string) => void;
    selectedOperation: string;
}

const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
    backgroundColor:"black",
    borderColor: props.selected ? "blue" : "black",
    
    }));

export const GridOparationButton: React.FC<GridOperationButtonProps> = ({
    operation,
    selectedOperation,
    selectOperation,
})=> {
    return (
        <Grid item xs={3}>
            <StyledButton 
            fullWidth
            variant="outlined" 
            onClick={() => selectOperation(operation)}
            selected={selectedOperation === operation}
            >
                {operation}
                
            </StyledButton>
        </Grid>
      );
};

    
