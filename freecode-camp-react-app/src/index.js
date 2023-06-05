import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./bookData";
import Book from "./components/Book";

const BookList = () => (
  <section className="booklist">
    {books.map((book) => (
      <Book key={book.id} {...book} />
    ))}
  </section>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
