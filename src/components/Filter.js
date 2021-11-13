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
      <div className="dropdown">
        <span
          className="dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Price
        </span>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li className="ps-2">
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
                Low-High
              </label>
            </div>
          </li>
          <li className="ps-2">
            {/* Descending */}
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="sort-descending"
                id="inlineRadio2"
                value="option2"
                onChange={() =>
                  filterDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "highToLow",
                  })
                }
                checked={sort === "highToLow" ? true : false}
              />
              <label class="form-check-label" for="inlineRadio2">
                High-Low
              </label>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Filter;
