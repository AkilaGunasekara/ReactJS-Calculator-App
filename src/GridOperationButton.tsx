import { Button, Grid, styled } from "@mui/material";



interface GridOparationButtonProps {
    operation: String;
    selectOperation: (operation: string) => void;
    selectedOperation: string;
}

const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
    backgroundColor:"blue",
    borderColor: props.selected ? "red" : "blue",
    
    }))

export const GridOparationButton: React.FC<GridOparationButtonProps> = ({
    operation,
    selectedOperation,
    selectOperation,
})=> {
    return (
        <Grid item>
            <Button 
            variant="contained" 
            onClick={() => selectOperation("operation")}>
            selected={selectedOperation === operation}
            
                {operation}
            
            </Button>
        </Grid>
      );
      ;
};

    
