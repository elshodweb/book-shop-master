import React, { Fragment } from "react";
import styled from "styled-components";
import MyInput from "../MyInput/MyInput";
import { Button } from "@mui/material";

interface IStyle {
  $openmodal: boolean;
}

const ModalWrapper = styled.div<IStyle>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(21, 21, 21, 0.48);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.$openmodal ? 1 : 0)};
  visibility: ${(props) => (props.$openmodal ? "visible" : "hidden")};
  .content {
    position: relative;
    width: 100%;
    max-width: 430px;
    padding: 24px 28px;
    border-radius: 12px;
    background: var(--foundation-white-white-50, #fefefe);
    box-shadow: 0px 4px 32px 0px rgba(51, 51, 51, 0.04);
  }
  .title {
    color: #151515;
    font-size: 20px;
    font-weight: 600;
  }
  .close {
    position: absolute;
    right: 28px;
    top: 24px;
    border: none;
    background: none;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
  .btn {
    transition: all 0.1s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
  .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    button {
      width: 100%;
      font-family: inherit;
      text-transform: capitalize;
      border-radius: 4px;
      padding: 10px 24px;
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

interface IModalProps {
  openModal: boolean;
  setOpenModal: (b: boolean) => void;
}

const Modal: React.FC<IModalProps> = ({ openModal, setOpenModal }) => {
  return (
    <ModalWrapper $openmodal={openModal}>
      <div className="content">
        <button onClick={() => setOpenModal(false)} className="btn close">
          <img src="assets/img/x-circle.svg" alt="cross" />
        </button>
        <div className="title">Create a book</div>
        <MyInput title="Title" placeholder="Enter your title" />
        <MyInput title="Author" placeholder="Enter your author" />
        <MyInput
          title="Cover"
          placeholder="Enter your cover"
          icon={
            <img width={16} height={16} src="assets/img/link.svg" alt="link" />
          }
        />
        <MyInput title="Published" placeholder="Enter your published" />
        <MyInput title="Pages" placeholder="Enter your pages" />
        <div className="row">
          <Button onClick={() => setOpenModal(false)} variant="outlined">
            Close
          </Button>
          <Button onClick={() => setOpenModal(false)} variant="contained">
            Submit
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Modal;

