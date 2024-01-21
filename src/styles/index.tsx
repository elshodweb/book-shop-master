import styled from "styled-components";

export const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: url("assets/img/bg-svg.svg");
  background-repeat: no-repeat;
  background-position: left top;
  background-attachment: fixed;
  background-size: auto 135%;
  padding: 20px;
`;

export const SignWap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 40px);
`;

export const FormStyle = styled.form`
  border-radius: 12px;
  background: #fefefe;
  box-shadow: 0px 4px 32px 0px rgba(51, 51, 51, 0.04);
  max-width: 430px;
  width: 100%;
  padding: 48px 28px;
  text-align: center;
  margin: auto;
`;

export const FormBottom = styled.p`
  margin-top: 12px;
  font-size: 14px;
  font-weight: 300;
  line-height: 120%;
  a {
    color: #6200ee;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const H1 = styled.h1`
  color: #151515;
  font-size: 36px;
  font-weight: 700;
  width: 100%;
  text-align: center;
  margin-bottom: 36px;
`;

