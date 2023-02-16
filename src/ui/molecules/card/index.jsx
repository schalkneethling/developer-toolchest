import "./index.css";

export const Card = ({ result, children }) => {
  const { alt, description, logo, title, url, repo } = result;
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
        {repo && (
          <>
            <span> | </span>
            <a href={repo}>Repo</a>
          </>
        )}
      </h2>
      {description && <p>{description}</p>}
      {children}
    </li>
  );
};
