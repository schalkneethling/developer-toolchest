import * as React from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { App } from "insights-js";
import { Document } from "flexsearch";

import { FeaturedArticles } from "./ui/molecules/featured-articles";
import { Footer } from "./ui/molecules/footer";
import { Logo } from "./ui/atoms/logo";
import { Search } from "./ui/molecules/search";
import { SearchResults } from "./ui/molecules/search-results";

import "./App.css";

function DeveloperToolchest() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = React.useState([]);
  const [searchString, setSearchString] = React.useState("");
  const [tools, setTools] = React.useState(null);
  const [toolsIndex, setToolsIndex] = React.useState(null);

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

    const resultSet = toolsIndex.search({
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
    const jsonURL = process.env.REACT_APP_TESTING
      ? "/tools-test.json"
      : "/tools.json";
    async function fetchData() {
      const response = await fetch(jsonURL);
      const tools = await response.json();

      setTools(tools);

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

      setToolsIndex(index);
    }

    fetchData();
  }, []);

  React.useEffect(() => {
    const searchState = searchParams.get("q");

    if (searchState && toolsIndex) {
      setSearchString(searchState);
      const resultSet = toolsIndex.search({
        tag: searchState.split(" "),
        bool: "or",
      });

      if (resultSet[0]) {
        const matches = resultSet[0].result.map((index) => tools[index]);
        setSearchResults(matches);
      }
    }
  }, [toolsIndex, searchParams, tools]);

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
        {searchResults.length > 0 && (
          <SearchResults results={searchResults} onSubmitCallback={doSearch} />
        )}
        <FeaturedArticles />
      </div>
      <Footer />
    </div>
  );
}

export default DeveloperToolchest;
