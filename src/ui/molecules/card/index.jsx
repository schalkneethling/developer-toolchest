import { Tags } from "../tags";

import "./index.css";

export const Card = ({ result }) => {
  const { title, url, description, tag } = result;
  return (
    <li className="card">
      <h2>
        <a href={url}>{title}</a>
      </h2>
      {description && <p>{description}</p>}
      <Tags tags={tag} />
    </li>
  );
};
