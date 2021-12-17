import "./index.css";

export const Tags = ({ tags, onSubmitCallback }) => {
  return (
    <ul className="tag-list">
      {tags.map((tag, index) => (
        <li key={index}>
          <button type="button" onClick={() => onSubmitCallback(tag)}>
            {tag}
          </button>
        </li>
      ))}
    </ul>
  );
};
