const Book = ({ title, author, image }) => {
  return (
    <article className="book">
      <img className="img" src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button
        className="add-to-cart-button"
        onClick={() => alert(`${title} added to cart!`)}
      >
        Add to cart
      </button>
    </article>
  );
};

export default Book;
