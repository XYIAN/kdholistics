export const theme = {
  colors: {
    // Primary colors
    primary: {
      light: "#faf6f0",
      main: "#d4a373",
      dark: "#b08968",
      text: "#8b5e34",
      textDark: "#6b4423",
    },
    // Background gradients
    gradients: {
      primary: "linear-gradient(135deg, #faf6f0 0%, #f5e6d3 100%)",
      card: "linear-gradient(135deg, #fff 0%, #fdf8f3 100%)",
      button: "linear-gradient(135deg, #d4a373 0%, #b08968 100%)",
    },
    // Overlay and effects
    effects: {
      sparkleLight: "rgba(212, 163, 115, 0.2)",
      sparkleDark: "rgba(176, 137, 104, 0.15)",
      cardShadow: "rgba(184, 140, 89, 0.15)",
      buttonShadow: "rgba(184, 140, 89, 0.3)",
    },
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "2.5rem",
    xxl: "4rem",
  },
  borderRadius: {
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
  },
  typography: {
    fontSizes: {
      xs: "0.9rem",
      sm: "1.1rem",
      md: "1.5rem",
      lg: "2rem",
      xl: "2.5rem",
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      normal: 1.5,
      relaxed: 1.6,
      loose: 1.8,
    },
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  animations: {
    transition: {
      fast: "0.2s ease",
      normal: "0.3s ease",
      slow: "0.6s ease",
    },
    keyframes: {
      fadeIn: {
        from: {
          opacity: 0,
          transform: "translateY(20px)",
        },
        to: {
          opacity: 1,
          transform: "translateY(0)",
        },
      },
      sparkleMove: {
        "0%": {
          transform: "translate(0, 0) rotate(0deg)",
        },
        "100%": {
          transform: "translate(-50%, -50%) rotate(360deg)",
        },
      },
    },
  },
  components: {
    card: {
      padding: {
        default: "2rem",
        mobile: "1.5rem",
      },
      shadow: "0 4px 20px",
      hoverShadow: "0 8px 32px",
    },
    button: {
      padding: {
        default: "1rem 2rem",
        large: "1.5rem 3rem",
      },
      fontSize: {
        default: "1.1rem",
        large: "1.2rem",
      },
    },
  },
} as const;

// Type for the theme
export type Theme = typeof theme;

type DeepPartialRecord = { [key: string]: DeepPartialRecord | string };

// Helper functions for using the theme
export const getColor = (path: string): string => {
  const keys = path.split(".");
  let current: DeepPartialRecord = theme.colors as DeepPartialRecord;

  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      const value = current[key];
      if (typeof value === "string") return value;
      current = value as DeepPartialRecord;
    } else {
      return "";
    }
  }

  return "";
};

export const getSpacing = (size: keyof Theme["spacing"]) => {
  return theme.spacing[size];
};

export const getBreakpoint = (size: keyof Theme["breakpoints"]) => {
  return theme.breakpoints[size];
};

// CSS helper functions
export const cssVar = (name: string) => `var(--${name})`;

// Export commonly used style combinations
export const commonStyles = {
  cardBase: {
    background: theme.colors.gradients.card,
    borderRadius: theme.borderRadius.lg,
    boxShadow: `${theme.components.card.shadow} ${theme.colors.effects.cardShadow}`,
    border: "none",
    transition: theme.animations.transition.normal,
  },
  buttonBase: {
    background: theme.colors.gradients.button,
    border: "none",
    borderRadius: theme.borderRadius.md,
    padding: theme.components.button.padding.default,
    fontSize: theme.components.button.fontSize.default,
    transition: theme.animations.transition.normal,
  },
  gradientText: {
    background: theme.colors.gradients.button,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
};
