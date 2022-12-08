// This file contains any MUI styles that are too large to look good in the JSX
// Or any styles that need to be reused

import { createTheme } from "@mui/material/styles";

// MUI Theme to remove button text style
export const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export const modalBoxStyle = {
  background:
    "conic-gradient(at 100% 100%, rgb(17, 24, 39), rgb(243, 244, 246), rgb(190, 190, 250))",
  border: "none",
  boxShadow: 12,
  left: "50%",
  maxWidth: "600px",
  p: 4,
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
};

export const buttonStyle = {
  background: "rgba(30 ,30 ,90 ,0.1)",
  color: "rgb(0,0,0)",
  fontSize: "large",
  margin: "0.5rem",
};

export const albumDetailStyle = { color: "#000", fontWeight: "600", mb: 1 };

export const albumCardStyle = {
  background:
    "conic-gradient(at 100% 100%, rgb(17, 24, 39), rgb(180, 180, 250), rgb(236, 240, 240))",
  "&:hover": {
    background:
      "conic-gradient(at 100% 100%, rgb(17, 24, 39), rgb(180, 180, 250), rgb(246, 248, 248))",
    boxShadow: "5px 6px 7px 4px rgba(0, 0, 0, .1)",
  },
  boxShadow: "3px 4px 2px 4px rgba(0, 0, 0, .1)",
  display: "flex",
  flexDirection: "column",
  height: "auto",
  justifyContent: "space-between",
  margin: "1rem auto",
  padding: ".5rem",
};

export const cardMediaStyle = {
  boxShadow: "3px 3px 1px 1px rgba(0, 0, 0, .15)",
  height: 170,
  margin: "1rem auto",
  width: 170,
};

export const cardContent = {
  alignSelf: "center",
  flex: "1 0 auto",
  width: "250px",
};
