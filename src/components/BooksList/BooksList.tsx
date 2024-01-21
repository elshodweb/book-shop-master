import React from "react";
import styled from "styled-components";
import Book from "../Book/Book";
interface IBooksProps {
  books: any[];
}

const Row = styled.div`
  display: flex;
  align-items: stretch;
  align-self: stretch;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 24px;
  width: max-content;
  max-width: 100%;
  margin-top: 36px;
`;

const BooksList: React.FC<IBooksProps> = ({ books }) => {
  return <Row>{books.length && books.map((book) => <Book key={book.id} data={book} />)}</Row>;
};

export default BooksList;

