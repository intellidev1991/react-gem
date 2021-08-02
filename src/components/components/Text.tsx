/* eslint-disable */
//@ts-nocheck
import React, { useState, useEffect } from "react";

interface ITextProps {
  /**
   * The app title
   */
  title: string;
  /**
   * Toggle the active button
   */
  isActive: boolean;
}

const Text = React.memo(({ title, isActive, children }: ITextProps) => {
  useEffect(() => {}, []);
  return <div>{children}</div>;
});

//const Text = React.memo(_Text);
export { Text };

const styles = {};
