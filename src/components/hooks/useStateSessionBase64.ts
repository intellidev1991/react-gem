/* eslint-disable */
import React from "react";
import { Base64 } from "js-base64";
interface IUseStateSessionBase64Props {
  /** Key */
  key: string;
  /** initial state value  */
  init: any;
}

const useStateSessionBase64 = ({ key, init }: IUseStateSessionBase64Props) => {
  const initializer = () => {
    try {
      let json_str = sessionStorage.getItem(key);
      if (json_str) {
        let convertedFromB64ToString = Base64.decode(json_str);
        return JSON.parse(convertedFromB64ToString);
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
    let convertedToB64 = Base64.encode(json_str);
    sessionStorage.setItem(key, convertedToB64);
  }, [value]);

  return [value, setValue];
};

export { useStateSessionBase64 };
