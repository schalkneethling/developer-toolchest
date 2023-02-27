import "./index.css";

export const Card = ({ result, children }) => {
  const { alt, description, logo, title, url } = result;
  return (
    <li className="card" data-testid="card-component">
      {logo && (
        <img
          src={`${process.env.PUBLIC_URL}/logos/${logo}`}
          height="150"
          width="250"
          alt={alt || ""}
          loading="lazy"
        />
      )}
      <h2>
        <a href={url}>{title}</a>
      </h2>
      {description && <p>{description}</p>}
      {children}
    </li>
  );
};
