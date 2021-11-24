import * as React from "react";
import { Document } from "flexsearch";
import { init, trackPages } from "insights-js";

import { Footer } from "./ui/molecules/footer";
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

  // insights.io page tracking
  console.log(process.env.REACT_APP_INSIGHTS_ID);
  if (process.env.REACT_APP_INSIGHTS_ID) {
    init(process.env.REACT_APP_INSIGHTS_ID);
    trackPages();
  }

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
    <div className="page-container">
      <div className="app-container">
        <Logo />
        <Search onSubmitCallback={doSearch} />
        {searchResults && <SearchResults results={searchResults} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
