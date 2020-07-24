import React from "react";

const Search = (props) => {
  return (
    <form className="ui large fluid icon input" onSubmit={props.submitSearch}>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => props.updateUserSearch(e)}
        value={props.userSearch}
      />

      <button>
        <i className="circular search link icon"></i>
      </button>
    </form>
  );
};

export default Search;
