import React from "react";
import styled from "styled-components";

const Button = styled.button<SocialBtnProps>`
  display: block;
  margin: 0 auto;
  border-radius: 4px;
  border: 1px solid #151515;
  background: transparent;
  padding: 10px 24px 10px 41px;
  width: 100%;
  color: #151515;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 16px 0;
  &::before {
    content: "";
    width: 24px;
    height: 24px;
    display: block;
    background: url(assets/img/${(p) => p.$variant}.svg) center no-repeat;
    background-size: cover;
  }
`;

interface SocialBtnProps {
  $variant?: string;
}

interface SocialBtnPropsComponent {
  variant: "facebook" | "google";
  value: string;
  onClick: () => void;
}

const SocialBtn: React.FC<SocialBtnPropsComponent> = ({
  variant,
  value,
  onClick,
}) => {
  return (
    <Button onClick={onClick} value={value} $variant={variant}>
      {variant === "facebook" ? "Continue with Google" : "Continue with Google"}
    </Button>
  );
};

export default SocialBtn;

