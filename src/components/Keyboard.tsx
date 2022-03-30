import {
  Box,
  Grid,
  GridItem,
  SimpleGrid,
  Button,
  background,
} from "@chakra-ui/react";
import { memoryUsage } from "process";
import numericKeboardProps from "../interfaces/NumericKeyboardProps";
import Style from "../Styles/Style";
import { MEMORY } from "./App";
import NumericButtons from "./NumericButtons";

function NumericKeyboard({ updateDisplayFunc }: numericKeboardProps) {
  function handleOperationInputPress(digit: string) {
    if (digit === "=") {
      updateDisplayFunc(eval(MEMORY.value));
      MEMORY.value = "";
    } else if (digit === "AC") {
      MEMORY.value = "";
      updateDisplayFunc(eval(MEMORY.value));
    } else {
      MEMORY.value += digit;
      updateDisplayFunc(MEMORY.value);
    }
  }

  return (
    <Box>
      <Grid
        className="NumericKeyboardMainGrid"
        sx={Style.NumericKeyboardMainGrid}
      >
        <GridItem rowStart={1} rowEnd={2} colStart={1} colEnd={12}>
          <Button
            w="100%"
            className="operationButton"
            id="ACButton"
            onClick={() => {
              handleOperationInputPress("AC");
            }}
            sx={{ backgroundColor: "blue.300", color: "white" }}
          >
            AC
          </Button>
        </GridItem>
        <GridItem
          rowStart={2}
          rowEnd={12}
          colStart={1}
          colEnd={8}
          marginLeft="8vw"
          marginRight="8vw"
        >
          <NumericButtons
            updateDisplayFunc={updateDisplayFunc}
            MEMORY={MEMORY}
            handleOperationInputPress={handleOperationInputPress}
          />
        </GridItem>
        <GridItem rowStart={2} rowEnd={12} colStart={8} colEnd={12}>
          <SimpleGrid columns={1} gap={2}>
            <Button
              className="operationButton"
              id="plusButton"
              onClick={() => {
                handleOperationInputPress("+");
              }}
              sx={{ ...Style.operationButton, backgroundColor: "green.300" }}
            >
              +
            </Button>
            <Button
              className="operationButton"
              id="minusButton"
              onClick={() => {
                handleOperationInputPress("-");
              }}
              sx={{ ...Style.operationButton, backgroundColor: "red.300" }}
            >
              -
            </Button>
            <Button
              className="operationButton"
              id="multiplyButton"
              onClick={() => {
                handleOperationInputPress("*");
              }}
              sx={{ ...Style.operationButton, backgroundColor: "pink.300" }}
            >
              *
            </Button>
            <Button
              className="operationButton"
              id="divideButton"
              onClick={() => {
                handleOperationInputPress("/");
              }}
              sx={{ ...Style.operationButton, backgroundColor: "purple.300" }}
            >
              /
            </Button>
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default NumericKeyboard;
