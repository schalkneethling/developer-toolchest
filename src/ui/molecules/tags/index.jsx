import "./index.css";

export const Tags = ({ tags }) => {
  return (
    <ul className="tag-list">
      {tags.map((tag) => (
        <li>{tag}</li>
      ))}
    </ul>
  );
};
