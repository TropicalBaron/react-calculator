import { useEffect, useState } from "react";
import Style from "../Styles/Style";
import Memory from "../utils/Memory";
import useDisplayValue from "../Hooks/displayValueHook";
import {
  Heading,
  Button,
  Box,
  SimpleGrid,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import NumericKeyboard from "./Keyboard";

export var MEMORY: Memory = new Memory("");

function App() {
  const [displayValue, setDisplayValue] = useState<string | number>(0);
  // function that executes setDisplayValue
  function updateDisplay(value: string | number) {
    setDisplayValue(value);
  }
  return (
    <Box className="Calculator" sx={Style.Calculator}>
      <Box className="CalculatorPainel" sx={Style.CalculatorPainel}>
        <Box className="VirtualDisplay" sx={Style.VirtualDisplay}>
          <Text className="VirtualDisplayValue">{displayValue}</Text>
        </Box>
        <NumericKeyboard updateDisplayFunc={updateDisplay} />
        <Text sx={{ textAlign: "right", color: "gray.400", marginTop: "5px" }}>
          By Andrew
        </Text>
      </Box>
    </Box>
  );
}

export default App;
