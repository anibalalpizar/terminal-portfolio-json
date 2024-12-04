"use client";

import { useState, useEffect } from "react";
import { Theme } from "@/types";
import themes from "@/data/themes.json";

type ThemeKey = keyof typeof themes;

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(themes.dark);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--foreground-rgb",
      theme.foreground
    );
    document.documentElement.style.setProperty(
      "--background-rgb",
      theme.background
    );
    document.documentElement.style.setProperty("--accent-color", theme.accent);
    document.documentElement.style.setProperty(
      "--selection-color",
      theme.selection
    );
  }, [theme]);

  const handleThemeChange = (themeName: string): [string[], boolean] => {
    if (!themeName) {
      return [
        [
          "Available themes:",
          ...Object.keys(themes).map((name) => `→ ${name}`),
          "\nUsage: theme <name>",
        ],
        false,
      ];
    }

    const themeKey = themeName as ThemeKey;
    if (themes[themeKey]) {
      setTheme(themes[themeKey]);
      return [[`Theme changed to ${themes[themeKey].name}`], true];
    }

    return [
      [
        `Theme "${themeName}" not found. Available themes:`,
        ...Object.keys(themes).map((name) => `→ ${name}`),
      ],
      false,
    ];
  };

  return { theme, handleThemeChange };
}
