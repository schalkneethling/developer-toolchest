import "./index.css";

export const Tags = ({ tags }) => {
  return (
    <ul className="tag-list">
      {tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>
  );
};
