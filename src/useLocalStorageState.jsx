import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, keyValue) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(keyValue);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(value));
  }, [value, keyValue]);

  return [value, setValue];
}
