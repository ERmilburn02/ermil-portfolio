import { useEffect, useState } from "react";
import isBrowserDarkTheme from "../utils/isBrowserDarkTheme";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage(
    "dark-theme",
    isBrowserDarkTheme()
  );
  const isEnabled = enabled;

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [enabled, isEnabled]);

  return [enabled, setEnabled];
};

export default useDarkMode;
