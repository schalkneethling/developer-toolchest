import "./index.css";

export const Card = ({ result, children }) => {
  const { title, url, description } = result;
  return (
    <li className="card">
      <h2>
        <a href={url}>{title}</a>
      </h2>
      {description && <p>{description}</p>}
      {children}
    </li>
  );
};
