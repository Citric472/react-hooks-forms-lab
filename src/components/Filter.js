// Filter.js
import React from "react";

const Filter = ({ search, onSearchChange }) => {
  return (
    <div>
      <input
        id="searchInput" // Add id attribute
        name="search"
        placeholder="Search..."
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select name="filter">
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
};

export default Filter;



