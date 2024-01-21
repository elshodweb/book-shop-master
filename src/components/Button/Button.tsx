import { Button } from "@mui/material";
import React from "react";

const propsForBtn: React.CSSProperties = {
  width: "100%",
  padding: "10px 24px",
  marginTop: "20px",
  textTransform: "capitalize",
  fontSize: "16px",
  fontWeight: 500,
};

const MyButton = ({ ...props }) => {
  return (
    <Button
      variant={props.variant ? props.variant : "contained"}
      style={propsForBtn}
      children={props.children ? props.children : "Button"}
      {...props}
    />
  );
};

export default MyButton;

