import React, { useRef } from "react";
import styled from "styled-components";
import SvgComponent from "../Icons/Search";

const Serach = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex: 1;
  width: 380px;
  input {
    position: absolute;
    left: 0;
    display: block;
    padding: 13px 62px;
    background: transparent;
    border: none;
    border-radius: 6px;
    width: 380px;
    color: #fefefe;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.16px;
    line-height: 100%;
    transition: all 0.3s;
    &:focus {
      outline: none;
      background: #fefefe;
      color: #151515;
      &::placeholder {
        color: #151515;
      }
      & + svg {
        stroke: #151515;
      }
      & ~ .del {
        opacity: 1;
        transform: scale(1);
        visibility: visible;
      }
    }
    &::placeholder {
      color: #fefefe;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0.16px;
    }
  }
  svg {
    transition: all 0.3s;
    position: absolute;
    left: 26px;
    z-index: 2;
    stroke: #fefefe;
    fill: transparent;
  }
  .del {
    position: absolute;
    display: block;
    z-index: 3;
    right: 26px;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;
    transform: scale(0.2);
    img {
      width: 100%;
    }
  }
`;

export interface SearchInputProps {
  onChange: (e: any) => void;
  value: string;
}
const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  const inputRef: any = useRef(null);

  const handleSvgClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <Serach>
      <input
        value={value}
        onChange={onChange}
        ref={inputRef}
        type="text"
        placeholder="Search for any training you want "
      />
      <SvgComponent onClick={handleSvgClick} />
      <button className="del">
        <img src="assets/img/x-circle.svg" alt="del" />
      </button>
    </Serach>
  );
};

export default SearchInput;

