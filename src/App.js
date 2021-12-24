import * as React from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { App } from "insights-js";

import { Footer } from "./ui/molecules/footer";
import { Logo } from "./ui/atoms/logo";
import { Search } from "./ui/molecules/search";
import { SearchResults } from "./ui/molecules/search-results";

import "./App.css";

function DeveloperToolchest({ index, tools }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = React.useState([]);
  const [searchString, setSearchString] = React.useState("");

  let insights;

  // insights.io page tracking
  if (process.env.REACT_APP_INSIGHTS_ID) {
    insights = new App(process.env.REACT_APP_INSIGHTS_ID);
    insights.trackPages();
  }

  function doSearch(query, event) {
    event && event.preventDefault();

    setSearchString(query);
    setSearchParams(createSearchParams({ q: query }));

    const resultSet = index.search({
      tag: searchString.split(" "),
      bool: "or",
    });

    if (resultSet[0]) {
      const matches = resultSet[0].result.map((index) => tools[index]);
      setSearchResults(matches);
    }
  }

  function handleChange(event) {
    setSearchString(event.target.value.toLowerCase());
  }

  React.useEffect(() => {
    const searchState = searchParams.get("q");

    if (searchState) {
      setSearchString(searchState);
      const resultSet = index.search({
        tag: searchState.split(" "),
        bool: "or",
      });

      if (resultSet[0]) {
        const matches = resultSet[0].result.map((index) => tools[index]);
        setSearchResults(matches);
      }
    }
  }, [index, searchParams, tools]);

  return (
    <div className="page-container">
      <div className="app-container">
        <Logo />
        <Search
          handleChange={handleChange}
          onSubmitCallback={doSearch}
          searchString={searchString}
          tools={tools}
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
