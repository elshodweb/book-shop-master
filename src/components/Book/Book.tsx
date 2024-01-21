import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 380px;
  width: 100%;
  padding: 32px;
  border-radius: 12px;
  border: 1px solid #ebebeb;
  background: #fefefe;
  box-shadow: 0px 4px 24px 0px rgba(51, 51, 51, 0.08);
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    transform: translate(2deg);
    box-shadow: 0px 4px 24px 0px rgba(51, 51, 51, 0.2),
      0px 4px 24px 0px rgba(211, 211, 211, 0.8);
  }
  .title {
    color: #151515;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .desc {
    color: #333;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%; /* 21px */
    margin-bottom: 16px;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #333;
    font-size: 14px;
    font-weight: 500;
    line-height: 15px; /* 107.143% */
  }
  .pages {
    border-radius: 8.5px;
    background: #efe6fd;
    padding: 2px 12px;
    gap: 6px;
    color: #9654f4;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
  }
`;
export interface BookProps {
  author: string;
  desc: string;
  id: number;
  img: string;
  pages: number;
  published: string;
  title: string;
}
interface bookProps {
  data: BookProps;
}

const Book: React.FC<bookProps> = ({ data }) => {
  return (
    <Wrapper>
      <h5 className="title">{data.title}</h5>
      <p className="desc">{data.desc}</p>
      <div className="row">
        <span>
          {data.author}: {data.published}
        </span>
        <span className="pages">{data.pages} pages</span>
      </div>
    </Wrapper>
  );
};

export default Book;

