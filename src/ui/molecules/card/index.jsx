import "./index.css";

export const Card = ({ result, children }) => {
  const { alt, description, logo, title, url, repo } = result;

  const getHost = () => {
    const { hostname } = new URL(repo);
    return hostname === "github.com" ? "GitHub" : "GitLab";
  };

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
      {repo && (
        <a
          href={repo}
          title={`Contribute to ${title} on ${getHost()}`}
          className={getHost()}
        >
          Contribute on {getHost()}
        </a>
      )}
      {description && <p>{description}</p>}
      {children}
    </li>
  );
};
