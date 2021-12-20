export const Suggestions = ({ tools }) => {
  const suggestionsSet = new Set();
  let allTags = [];

  allTags = tools.map((tool) => tool.tag);
  const flattenedTags = allTags.flat();
  flattenedTags.forEach((tag) => suggestionsSet.add(tag));

  return (
    <datalist id="suggestions">
      {Array.from(suggestionsSet).map((suggestion) => {
        return <option key={suggestion} value={suggestion} />;
      })}
    </datalist>
  );
};
