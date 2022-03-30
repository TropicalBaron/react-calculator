import { useState } from "react";

export default function useDisplayValue() {
  const [displayValue, setDisplayValue] = useState<string | number>(0);
  return [displayValue, setDisplayValue];
}
