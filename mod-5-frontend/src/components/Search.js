import React from "react";

const Search = (props) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => props.updateUserSearch(e)}
        value={props.userSearch}
      />

      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
