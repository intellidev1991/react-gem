/* eslint-disable */
import React from "react";
import { Base64 } from "js-base64";

/**
 * Hook to store state in sessionStorage with Base64 encoded data
 * @param localStorageKey The key to store in sessionStorage
 * @param init initialize data to store in sessionStorage
 */
const useStateSessionBase64 = (localStorageKey: string, init: any) => {
  const initializer = () => {
    try {
      let json_str = sessionStorage.getItem(localStorageKey);
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
    sessionStorage.setItem(localStorageKey, convertedToB64);
  }, [value]);

  return [value, setValue];
};

export { useStateSessionBase64 };
