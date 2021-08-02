/* eslint-disable */
import React from "react";

interface IUseStateSessionRawProps {
  /** Key */
  key: string;
  /** initial state value  */
  init: any;
}

const useStateSessionRaw = ({ key, init }: IUseStateSessionRawProps) => {
  const initializer = () => {
    try {
      let json_str = sessionStorage.getItem(key);
      if (json_str) {
        return JSON.parse(json_str);
      } else {
        return init;
      }
    } catch (e) {
      return init;
    }
  };
  const [_value, _setValue] = React.useState(initializer());

  React.useEffect(() => {
    let json_str = JSON.stringify(_value);
    sessionStorage.setItem(key, json_str);
  }, [_value]);

  return [_value, _setValue];
};

export { useStateSessionRaw };
