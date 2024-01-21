import React from "react";
import styled from "styled-components";

const OrStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 36px 0;
  span {
    position: absolute;
    z-index: 2;
    padding: 0 8px;
    background: #fff;
  }
  hr {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translate(0, 50%);
    background: #24272c;
  }
`;
const Or = () => {
  return (
    <OrStyle>
      <span>or</span>
      <hr />
    </OrStyle>
  );
};

export default Or;

