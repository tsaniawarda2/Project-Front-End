import { useContext } from "react";
import { DataContext } from "../context/DataProduct";

const Filter = () => {
  const {
    filterState: { sort },
    filterDispatch,
  } = useContext(DataContext);
  console.log(sort, "----------state");
  return (
    <>
      {/* Ascending */}
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="sort-ascending"
          id="inlineRadio1"
          value="option1"
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
        <label class="form-check-label" for="inlineRadio1">
          Ascending
        </label>
      </div>
      {/* Descending */}
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="sort-descending"
          id="inlineRadio1"
          value="option1"
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
        <label class="form-check-label" for="inlineRadio1">
          Descending
        </label>
      </div>
    </>
  );
};

export default Filter;
