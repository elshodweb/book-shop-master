import { TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin: 16px 0;
  * {
    width: 100%;
    text-align: left;
  }
  img {
    position: absolute;
    left: 16px;
  }
  h6 {
    color: #151515;
    font-size: 14px;
    font-weight: 500;
    line-height: 120%;
    margin-bottom: 4px;
  }
  input {
    color: #151515;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
    padding: 14px 16px;
    border-radius: 6px;
    border: 1px solid #ebebeb;
    background: #fefefe;
    box-shadow: 0px 4px 18px 0px rgba(51, 51, 51, 0.04);
    transition: all 0.1s;
    &:focus {
      outline: none;
      box-shadow: 0px 4px 18px 0px rgba(51, 51, 51, 0.24);
    }
    &::placeholder {
      opacity: 0.28;
    }
  }
`;
const MyInput: React.FC<any> = ({
  type,
  icon,
  title,
  placeholder,
  ...props
}) => {
  return (
    <InputWrapper>
      <h6>{title}</h6>
      <input type={type ? type : "text"} placeholder={placeholder} {...props} />
    </InputWrapper>
  );
};

export default MyInput;

