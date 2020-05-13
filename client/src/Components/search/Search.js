import React from "react";
import { connect } from "react-redux";
import { searchInputName } from "../../JS/actions/admin-action";

const Search = ({ searchInputName }) => (
  <div className="searchNavmenu">
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="type the user's name here ..."
        className="searchbox"
        onChange={(e) => searchInputName(e.target.value)}
      />
    </section>
  </div>
);
export default connect(null, {
  searchInputName,
})(Search);