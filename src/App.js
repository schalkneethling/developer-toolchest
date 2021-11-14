import * as React from "react";
import { Document } from "flexsearch";

import { Logo } from "./ui/atoms/logo";
import { Search } from "./ui/molecules/search";
import { SearchResults } from "./ui/molecules/search-results";

import tools from "./data/tools.json";

import "./App.css";

function App() {
  const [searchResults, setSearchResults] = React.useState([]);
  const index = new Document({
    document: {
      id: "id",
      tag: "tag",
      index: [{ field: "title", tokenize: "forward" }],
    },
  });

  tools.forEach(({ id, title, tag }) => {
    index.add({
      id,
      tag,
      title,
    });
  });

  function doSearch(event, query) {
    event.preventDefault();

    if (query) {
      const resultSet = index.search({ tag: query.split(" "), bool: "or" });

      if (resultSet[0]) {
        const matches = resultSet[0].result.map((index) => tools[index]);
        console.log(matches);
        setSearchResults(matches);
      }
    }
  }

  return (
    <div className="container">
      <Logo />
      <Search onSubmitCallback={doSearch} />
      {searchResults && <SearchResults results={searchResults} />}
    </div>
  );
}

export default App;
