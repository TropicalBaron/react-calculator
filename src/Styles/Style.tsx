import { CSSObject } from "@chakra-ui/react";

// Styles for App.tsx

const CalculatorStyle: CSSObject = {
  textAlign: "center",
  backgroundColor: "gray.500",
  // maxWidth: "1200px",
};

const CalculatorPainelStyle: CSSObject = {
  height: "100%",

  padding: "5%",
  maxPadding: "20px",
};

const VirtualDisplayStyle: CSSObject = {
  height: "10%",
  maxHeight: "80px",
  backgroundColor: "gray.50",
  textAlign: "right",
  padding: "2vh",
  borderRadius: "5px",
};

// Styles for NumericKeyboard.tsx

const NumericKeyboardMainGridStyle: CSSObject = {
  className: "NumericKeyboardMainGrid",
  templateColumns: "repeat(12, 1fr)",
  TemplateColumns: "repeat(12, 1fr)",
  gap: 2,

  marginTop: "1vh",
};

const NumericButtonStyle: CSSObject = {
  borderRadius: "40px",
  backgroundColor: "gray.50",
  Width: "100%",

  maxWidth: "200px",
  minHeight: "50px",

  height: "5vw",
};

const operationButtonStyle: CSSObject = {
  ...NumericButtonStyle,
  backgroundColor: "yellow.400",
  color: "white",
};

// Creation of Style Object

const Style = {
  Calculator: CalculatorStyle,
  CalculatorPainel: CalculatorPainelStyle,
  VirtualDisplay: VirtualDisplayStyle,
  NumericKeyboardMainGrid: NumericKeyboardMainGridStyle,
  NumericButton: NumericButtonStyle,
  operationButton: operationButtonStyle,
};

export default Style;
