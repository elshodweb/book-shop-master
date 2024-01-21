import styled from "@emotion/styled";
import React from "react";
import MyButton from "../components/Button/Button";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 40px);
  flex-direction: column;
  img {
    margin: 0 auto;
    display: block;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 492px;
    gap: 12px;
    margin-top: 72px;
  }
  button {
    font-family: "Mulish";
    font-size: 16px;
    font-weight: 500;
  }
`;
const NotFoundPage = () => {
  return (
    <Wrapper>
      <img src="assets/img/404.png" alt="404 page img" />
      <div className="row">
        <MyButton>Go Home Page</MyButton>
        <MyButton variant="outlined">Reload Page</MyButton>
      </div>
    </Wrapper>
  );
};

export default NotFoundPage;

