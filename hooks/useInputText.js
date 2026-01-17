import { useState } from "react";

export default function useInputText(initialValue, name) {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
  };
}
