/* eslint-disable */
import qs from "qs";

interface IProps {
  /**
   * Object data that you want to encode it into query-string
   */
  inputObject: any;
}

export const useQueryString = (inputObject: IProps) => {
  const temp: string = qs.stringify({ ...inputObject });
  return temp;
};
