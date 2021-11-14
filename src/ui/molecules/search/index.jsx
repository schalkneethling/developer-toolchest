import * as React from "react";

import "./index.css";

export const Search = ({ onSubmitCallback }) => {
  const searchInputRef = React.useRef(null);

  return (
    <form
      name="search-tools"
      action="/search"
      className="search-tools"
      method="get"
      onSubmit={(event) =>
        onSubmitCallback(event, searchInputRef.current.value)
      }
    >
      <label htmlFor="search" className="visually-hidden">
        Enter tags separated by spaces
      </label>
      <input
        id="search"
        type="search"
        name="search"
        ref={searchInputRef}
        placeholder="Enter tags separated by spaces"
      />
      <button type="submit">Search</button>
    </form>
  );
};
