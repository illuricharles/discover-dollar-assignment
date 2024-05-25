import React, { useState } from "react";

const categories = [
  {
    name: "Fashion",
    subcategories: [
      {
        name: "Men",
        subcategories: [
          { name: "Ethnic Wear" },
          { name: "Casual Wear" },
          { name: "Formal Wear" },
        ],
      },
      {
        name: "Women",
        subcategories: [
          { name: "Ethnic Wear" },
          { name: "Casual Wear" },
          { name: "Formal Wear" },
        ],
      },
    ],
  },
  {
    name: "Electronics",
    subcategories: [
      {
        name: "Mobiles",
        subcategories: [{ name: "Smartphones" }, { name: "Feature Phones" }],
      },
      {
        name: "Laptops",
        subcategories: [
          { name: "Gaming Laptops" },
          { name: "Ultrabooks" },
          { name: "Notebooks" },
        ],
      },
    ],
  },
];

const TypeaheadSearch = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length >= 2) {
      const filteredSuggestions = filterCategories(value);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const filterCategories = (input) => {
    const lowercasedInput = input.toLowerCase();
    let results = [];

    categories.forEach((category) => {
      if (category.name.toLowerCase().includes(lowercasedInput)) {
        results.push(category.name);
      }
      category.subcategories.forEach((subcategory) => {
        if (subcategory.name.toLowerCase().includes(lowercasedInput)) {
          results.push(`${subcategory.name}`);
        }
        subcategory.subcategories.forEach((subSubcategory) => {
          if (subSubcategory.name.toLowerCase().includes(lowercasedInput)) {
            results.push(`${subSubcategory.name}`);
          }
        });
      });
    });

    return results;
  };

  return (
    <form action="#" className="header-input">
      <input type="search" id="search-input" placeholder="Search..." value={query} onChange={handleInputChange}/>
      <ul className="search-container" id="search-container">
        {suggestions.map((eachSuggestion,idx) => <li className="search-item" key = {eachSuggestion+idx}>{eachSuggestion}</li>)}
      </ul>
    </form>
  );
};

export default TypeaheadSearch;
