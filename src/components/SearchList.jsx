import React from 'react';
import { useSelector } from 'react-redux';

function SearchList() {
  const searchWord = useSelector((state) => state.search.searchDisease);
  console.log(searchWord);
  return (
    <ul>
      <li>암</li>
    </ul>
  );
}

export default SearchList;
