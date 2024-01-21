import { useEffect, useState } from "react";
import MyHeader from "../components/Header/MyHeader";
import SubHeader from "../components/SubHeader/SubHeader";
import BooksList from "../components/BooksList/BooksList";
import styled from "styled-components";
import { BookProps } from "../components/Book/Book";
import Modal from "../components/Modal/Modal";

// eslint-disable-next-line no-script-url
const newLocal =
  // eslint-disable-next-line no-script-url
  "https://upload.wikimedia.org/wikipedia/commons/8/89/Book_stub_img.svg";
const booksData: BookProps[] = [
  {
    id: 1,
    title: "The Pragmatic Programmer",
    desc: "Your journey to mastery",
    author: "Dave Thomas, Andy Hunt",
    published: "1999",
    pages: 352,
    img: newLocal,
  },
  {
    id: 2,
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    desc: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees.",
    author: "Robert C. Martin",
    published: "2008",
    pages: 464,
    img: newLocal,
  },
  {
    id: 3,
    // eslint-disable-next-line no-script-url
    title: "JavaScript: The Good Parts",
    desc: "Unearthing the Excellence in JavaScript",
    author: "Douglas Crockford",
    published: "2008",
    pages: 176,
    img: newLocal,
  },
  {
    id: 4,
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    desc: "A must-read for any developer.",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    published: "1994",
    pages: 395,
    img: newLocal,
  },
  {
    id: 5,
    title: "Code Complete: A Practical Handbook of Software Construction",
    desc: "Construction is more about organization of the code than the specific coding details.",
    author: "Steve McConnell",
    published: "1993",
    pages: 914,
    img: newLocal,
  },
  {
    id: 6,
    title: "The Mythical Man-Month",
    desc: "Essays on Software Engineering",
    author: "Frederick P. Brooks Jr.",
    published: "1975",
    pages: 322,
    img: newLocal,
  },
];

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const BooksListPage = () => {
  const [books, setBooks] = useState<BookProps[]>(booksData);
  const [searchStr, setSearchStr] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  function onChangeSearch(e: any) {
    setSearchStr(e.target.value);
  }

  useEffect(() => {
    if (searchStr.length) {
      setBooks(
        booksData.filter((book) =>
          book.title.toLowerCase().includes(searchStr.toLowerCase())
        )
      );
    } else {
      setBooks(booksData);
    }
  }, [searchStr]);

  return (
    <Wrapper>
      <MyHeader value={searchStr} onChange={onChangeSearch} />
      <SubHeader setOpenModal={setOpenModal} count={books.length} />
      <BooksList books={books} />
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </Wrapper>
  );
};

export default BooksListPage;
