import {useState } from "react";

export const useInputValue = (initialValue: string) => {
  const [value, setValue] = useState();
  const onChange = (event: any) => setValue(event.target.value);
    console.log('6  >>> ', value);
  return [value, onChange];
};
