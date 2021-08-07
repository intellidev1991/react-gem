/* eslint-disable */
import React from "react";

interface IUseStatePersistRawProps {
  /** Key */
  key: string;
  /** initial state value  */
  init: any;
}

// store data as clear text
const useStatePersistRaw = ({ key, init }: IUseStatePersistRawProps) => {
  const initializer = () => {
    try {
      let json_str = localStorage.getItem(key);
      if (json_str) {
        return JSON.parse(json_str);
      } else {
        return init;
      }
    } catch (e) {
      return init;
    }
  };
  const [value, setValue] = React.useState(initializer());

  React.useEffect(() => {
    let json_str = JSON.stringify(value);
    localStorage.setItem(key, json_str);
  }, [value]);

  return [value, setValue];
};

export { useStatePersistRaw };
