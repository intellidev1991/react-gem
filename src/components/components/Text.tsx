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

const Text = React.memo(({ title, isActive }: ITextProps) => {
  useEffect(() => {}, []);
  return <div>login page</div>;
});

//const Text = React.memo(_Text);
export { Text };

const styles = {};
