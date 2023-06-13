const HelloWorld = ({ tech }) => {
  return (
    <div className="main-container">
      <p className="hello-world-text">
        Hello World <span className="tech-style">{tech}</span>!
      </p>
    </div>
  );
};
export default HelloWorld;
