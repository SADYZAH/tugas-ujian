import { useRef } from "react";

function SearchBar({ setSearch }) {
  const inputRef = useRef();

  const handleSearch = () => {
    setSearch(inputRef.current.value);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Cari user..."
      />

      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;