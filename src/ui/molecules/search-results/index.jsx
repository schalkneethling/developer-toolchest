import { Card } from "../card";

import "./index.css";

export const SearchResults = ({ results }) => {
  return (
    <ul className="search-result-list">
      {results.map((result) => {
        return <Card key={result.id} result={result} />;
      })}
    </ul>
  );
};
