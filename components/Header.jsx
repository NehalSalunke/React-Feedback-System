function Header({ a, yellow, c }) {
  const azad = {
    color: yellow,
    backgroundColor: c,
  };
  return (
    <header style={azad}>
      <div className="container">
        <h2>feedback</h2>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: "Feedback",
  backgroundColor: "yellow",
  textColor: "#ff6a95",
};

export default Header;
