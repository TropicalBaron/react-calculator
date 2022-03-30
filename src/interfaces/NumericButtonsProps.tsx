import Memory from "../utils/Memory";

export default interface NumericButtonsProps {
  updateDisplayFunc: (value: string) => void;
  MEMORY: Memory;
  handleOperationInputPress: (value: string) => void;
}
