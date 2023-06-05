import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const book1 = {
  title: "Atomic Habits",
  author: "James Clear",
  image: "./images/book1.jpg",
};

const book2 = {
  title: "The Psychology of Money",
  author: "Morgan Housel",
  image: "./images/book2.jpg",
};
const book3 = {
  title: "Ikigai",
  author: "Francesc Miralles",
  image: "./images/book3.jpg",
};

const BookList = () => (
  <section className="booklist">
    <Book title={book1.title} author={book1.author} image={book1.image} />
    <Book title={book2.title} author={book2.author} image={book2.image} />
    <Book title={book3.title} author={book3.author} image={book3.image} />
  </section>
);

const Book = ({ title, author, image }) => {
  // const title = "Atomic Habits";
  // const author = "James Clear";
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
