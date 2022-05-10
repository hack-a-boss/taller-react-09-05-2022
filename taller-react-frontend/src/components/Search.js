import { memo } from "react";

export const Search = memo(({ handleFilter }) => {
  return (
    <form>
      <label htmlFor="search">Filtrar: </label>
      <input id="search" type="search" onChange={handleFilter} />
    </form>
  );
});
