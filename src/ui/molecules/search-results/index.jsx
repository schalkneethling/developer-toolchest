import { Card } from "../card";
import { Tags } from "../tags";

import "./index.css";

export const SearchResults = ({ results, onSubmitCallback }) => {
  return (
    <ul className="search-result-list" data-testid="search-result-list">
      {results.map((result) => {
        return (
          <Card key={result.id} result={result}>
            <Tags tags={result.tag} onSubmitCallback={onSubmitCallback} />
          </Card>
        );
      })}
    </ul>
  );
};
