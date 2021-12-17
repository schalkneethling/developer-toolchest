import * as React from "react";
import { Document } from "flexsearch";
import { App } from "insights-js";

import { Footer } from "./ui/molecules/footer";
import { Logo } from "./ui/atoms/logo";
import { Search } from "./ui/molecules/search";
import { SearchResults } from "./ui/molecules/search-results";

import tools from "./data/tools.json";

import "./App.css";

function DeveloperToolchest() {
  const [searchResults, setSearchResults] = React.useState([]);
  const [searchString, setSearchString] = React.useState("");

  const index = new Document({
    document: {
      id: "id",
      tag: "tag",
      index: [{ field: "title", tokenize: "forward" }],
    },
  });
  let insights;

  tools.forEach(({ id, title, tag }) => {
    index.add({
      id,
      tag,
      title,
    });
  });

  // insights.io page tracking
  if (process.env.REACT_APP_INSIGHTS_ID) {
    insights = new App(process.env.REACT_APP_INSIGHTS_ID);
    insights.trackPages();
  }

  function doSearch(query, event) {
    event && event.preventDefault();

    setSearchString(query);

    if (query) {
      const resultSet = index.search({ tag: query.split(" "), bool: "or" });

      if (resultSet[0]) {
        const matches = resultSet[0].result.map((index) => tools[index]);
        setSearchResults(matches);
      }
    }
  }

  function handleChange(event) {
    setSearchString(event.target.value.toLowerCase());
  }

  return (
    <div className="page-container">
      <div className="app-container">
        <Logo />
        <Search
          handleChange={handleChange}
          onSubmitCallback={doSearch}
          searchString={searchString}
        />
        {searchResults && (
          <SearchResults results={searchResults} onSubmitCallback={doSearch} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default DeveloperToolchest;
