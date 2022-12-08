import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import logo from "../assets/logo.svg";

let date = new Date().toLocaleDateString();

const Header = (props) => {
  return (
    <div>
      {/* Title and date */}
      <Typography variant="h4" margin="2rem" color="#000">
        <img src={logo} />
        <br />
        {date}
      </Typography>

      {/* Search bar */}
      <TextField
        onChange={props.handleSearch}
        fullWidth
        label="Search"
        sx={{ margin: "0 0 2rem" }}
      />
    </div>
  );
};

export default Header;
