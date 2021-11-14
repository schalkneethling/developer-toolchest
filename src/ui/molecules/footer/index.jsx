import "./index.css";

export const Footer = () => {
  return (
    <footer className="page-footer">
      <ul className="footer-links">
        <li>
          Made with <span className="heart">&hearts;</span> by{" "}
          <a href="https://github.com/schalkneethling/">Schalk Neethling</a>
        </li>
        <li>
          <a href="https://github.com/schalkneethling/developer-toolchest">
            Contribute on GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
};
