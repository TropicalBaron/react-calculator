import { Button, SimpleGrid } from "@chakra-ui/react";
import NumericButtonsProps from "../interfaces/NumericButtonsProps";
import Style from "../Styles/Style";
export default function NumericButtons(props: NumericButtonsProps) {
  const { MEMORY, updateDisplayFunc, handleOperationInputPress } = props;
  function handleNumberInputPress(digit: string) {
    console.log("MEMORY = ", MEMORY.value);
    MEMORY.value += digit;
    updateDisplayFunc(MEMORY.value);
  }
  function createNumbersButtons() {
    const list = [];
    for (let i = 9; i >= 0; i--) {
      list.push(
        <Button
          className="NumericButton"
          onClick={() => {
            handleNumberInputPress(i.toString());
          }}
          sx={Style.NumericButton}
        >
          {i}
        </Button>
      );
    }
    return list;
  }
  const NumbersButtons = createNumbersButtons();
  return (
    <SimpleGrid columns={3} gap={2}>
      {NumbersButtons}
      <Button
        className="SignalButton"
        onClick={() => {
          handleNumberInputPress(".");
        }}
        sx={Style.NumericButton}
      >
        .
      </Button>
      <Button
        className="SignalButton"
        onClick={() => {
          handleOperationInputPress("=");
        }}
        sx={{
          ...Style.NumericButton,
          backgroundColor: "yellow.400",
          color: "white",
        }}
      >
        =
      </Button>
    </SimpleGrid>
  );
}
