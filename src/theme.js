import { createTheme } from "@mui/material/styles";
import { amber, deepOrange } from "@mui/material/colors";

// Theme configuration
const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: amber[700] },
    secondary: { main: deepOrange[500] },
    background: { default: "#ffffff", paper: "#ffffff" },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: "Inter, Roboto, Helvetica, Arial, sans-serif",
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 800 },
    button: { textTransform: "none", fontWeight: 700 },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 20, boxShadow: "0 8px 28px rgba(0,0,0,0.06)" },
      },
    },
    MuiPaper: { styleOverrides: { root: { borderRadius: 20 } } },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: "saturate(180%) blur(8px)",
          background: "rgba(255,255,255,0.85)",
        },
      },
    },
  },
});

export default theme;
