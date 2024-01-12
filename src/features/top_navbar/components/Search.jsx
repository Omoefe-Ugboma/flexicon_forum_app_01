import { IoSearch } from "react-icons/io5";

const Search = ({searchStyle}) => {
  return (
    <div className={searchStyle.search}>
      <button>
        <IoSearch />
      </button>
      <input type="input" style={{ padding: "0.3rem 1rem" }} />
    </div>
  );
};

export default Search;
