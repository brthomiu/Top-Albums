import React from "react";
import { Typography } from "@mui/material";

const Footer = (props) => {
  return (
    <div>
      <Typography variant="h4" sx={{ mt: 6, mb: 6, color: "#000" }}>
        There are no more results to display.
      </Typography>
    </div>
  );
};

export default Footer;
