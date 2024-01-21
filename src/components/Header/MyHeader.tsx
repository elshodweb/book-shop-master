import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchInput, { SearchInputProps } from "../SearchInput/SearchInput";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .btn {
    transition: all 0.1s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
  .left {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 20px;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 0.576px;
    strong {
      color: #6200ee;
    }
  }
  .right {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  .notifications {
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
  .account {
    width: 32px;
    height: 32px;
    border-radius: 60px;
    border: 2px solid #fd648e;
    background: var(
      --gradient,
      conic-gradient(
        from 180deg at 50% 50%,
        #fd648e 0deg,
        #884cb2 178.1249964237213deg,
        #fd648e 360deg
      )
    );
    overflow: hidden;
    cursor: pointer;
    backdrop-filter: blur(15px);
    img {
      width: 100%;
      object-position: center;
    }
  }
`;

const MyHeader: React.FC<SearchInputProps> = ({ onChange, value }) => {
  return (
    <Header>
      <div className="left">
        <Link to={"/"} className="logo">
          <img src="./assets/img/bi_cloud-check.svg" alt="logo" />
          <span>
            <strong>Books</strong>List
          </span>
        </Link>
        <SearchInput onChange={onChange} value={value} />
      </div>
      <div className="right">
        <button className="notifications btn">
          <img src="./assets/img/bell.svg" alt="bell" />
        </button>
        <button className="account btn">
          <img src="./assets/img/avatar.png" alt="avatar" />
        </button>
      </div>
    </Header>
  );
};

export default MyHeader;

