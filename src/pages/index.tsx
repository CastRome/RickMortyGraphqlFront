import { useState } from "react";
import CharacterList from "../components/CharacterList"; // Update the path to your component

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const [humanFilter, setHumanFilter] = useState<boolean>(false); // [1
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleFilterChange = (e: HashChangeEvent) => {
    setHumanFilter(e?.target?.value === "true");
  };

  return (
    <div>
      <h1>Rick & Morty Character List </h1>
      <div className="filter">
        <label>Filter by species:</label>
        <select
          onChange={(e) => handleFilterChange(e)}
          defaultValue={humanFilter.toString()}
        >
          <option value="false">All</option>
          <option value="true">Humans</option>
        </select>
      </div>
      <div className="paged">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >{`Previous`}</button>

        <button onClick={() => handlePageChange(page + 1)}>{`Next`}</button>
      </div>
      <CharacterList page={page} filter={humanFilter} />
    </div>
  );
}
