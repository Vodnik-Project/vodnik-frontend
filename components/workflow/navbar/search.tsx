import { FunctionComponent } from "react";

import { HiSearch } from "react-icons/hi";

interface SearchProps {}

const Search: FunctionComponent<SearchProps> = () => {
  return (
    <div>
      <input type="text" />
      <HiSearch size={50} />
    </div>
  );
};

export default Search;
