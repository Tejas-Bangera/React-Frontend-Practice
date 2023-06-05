import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    image: "./images/book1.jpg",
  },
  {
    id: 2,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    image: "./images/book2.jpg",
  },
  {
    id: 3,
    title: "Ikigai",
    author: "Francesc Miralles",
    image: "./images/book3.jpg",
  },
];

const BookList = () => (
  <section className="booklist">
    {books.map((book) => (
      <Book key={book.id} {...book} />
    ))}
  </section>
);

const Book = ({ title, author, image }) => {
  return (
    <article className="book">
      <img className="img" src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
