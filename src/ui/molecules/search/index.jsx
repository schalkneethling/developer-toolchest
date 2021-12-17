import * as React from "react";

import "./index.css";

export const Search = ({ handleChange, onSubmitCallback, searchString }) => {
  return (
    <>
      <p>
        The search is based on tags. Try searching for{" "}
        <button onClick={() => onSubmitCallback("repl")}>repl</button>,{" "}
        <button onClick={() => onSubmitCallback("utility")}>utility</button> or{" "}
        <button onClick={() => onSubmitCallback("design")}>design</button> for
        example.
      </p>
      <form
        name="search-tools"
        action="/search"
        className="search-tools"
        method="get"
        onSubmit={(event) => onSubmitCallback(searchString, event)}
      >
        <label htmlFor="search" className="visually-hidden">
          Enter tags separated by spaces
        </label>
        <input
          id="search"
          type="search"
          name="search"
          value={searchString}
          placeholder="Enter tags separated by spaces"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
