import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;

  .title {
    color: #fefefe;
    font-size: 36px;
    font-weight: 700;
    strong {
      color: #6200ee;
    }
  }
  .sub-title {
    margin-top: 13px;
    color: #fefefe;
    font-size: 20px;
    font-weight: 400;
  }
  .right {
    display: flex;
    align-items: start;
    justify-content: end;
    gap: 24px;
    flex: 1 0 auto;
    input {
      box-shadow: 0px 4px 18px 0px rgba(51, 51, 51, 0.1);
      color: #151515;
      width: 100%;
      display: block;
      max-width: 320px;
      font-size: 16px;
      font-weight: 400;
      line-height: 120%;
      border-radius: 6px;
      border: 1px solid #ebebeb;
      background: #fefefe;
      padding: 14px 16px;
      outline: none;
    }
    button {
      color: #fefefe;
      font-size: 16px;
      font-weight: 500;
      text-transform: none;
      padding: 10px 24px;
    }
  }
`;

interface ISubHeader {
  count: number;
  setOpenModal: (b: boolean) => void;
}
const SubHeader: React.FC<ISubHeader> = ({ count, setOpenModal }) => {
  return (
    <Row>
      <div className="left">
        <h2 className="title">
          You’ve got <strong>{count} book</strong>
        </h2>
        <h5 className="sub-title">Your task today</h5>
      </div>
      <div className="right">
        <input type="text" placeholder="Enter your name" />
        <Button
          startIcon={<img src="assets/img/plus.svg" alt="pluss" />}
          variant="contained"
          onClick={() => setOpenModal(true)}
        >
          Create a book
        </Button>
      </div>
    </Row>
  );
};

export default SubHeader;

