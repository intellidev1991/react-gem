/* eslint-disable */
import React from "react";

interface IUseStateSessionRaw {
  localStorageKey: string /* key */;
  init: any /* initializer */;
}
const useStateSessionRaw = ({ localStorageKey, init }: IUseStateSessionRaw) => {
  const initializer = () => {
    try {
      let json_str = sessionStorage.getItem(localStorageKey);
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
    sessionStorage.setItem(localStorageKey, json_str);
  }, [value]);

  return [value, setValue];
};

export { useStateSessionRaw };
