import { Theme } from "@/const/theme";
import { ThemeContext } from "@/providers/ThemeProvider";
import { useContext } from "react";

const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  // console.log("Current theme from context:", theme); // Проверяем значение из контекста

  const toggleTheme = () => {
    let newTheme;

    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;

      case Theme.LIGHT:
        newTheme = Theme.DARK;
        break;

      default:
        newTheme = Theme.LIGHT;
    }
    // console.log("Toggling theme to:", newTheme);
    setTheme(newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
};

export { useTheme };
