import { useContext } from "react";
import { DataContext } from "../context/DataProduct";
import "../assets/styles/filter.css";
const Filter = () => {
  const {
    filterState: { sort },
    filterDispatch,
  } = useContext(DataContext);
  return (
    <>
      <div className="dropdown">
        <span
          className="selected"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Price<i class="fas fa-angle-down icon"></i>
        </span>
        <ul className="dropdown-menu">
          <li className="form form1">
            {/* Ascending */}
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                name="sort-ascending"
                id="flexCheckDefault1"
                value="option1"
                onChange={() =>
                  filterDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "lowToHigh",
                  })
                }
                checked={sort === "lowToHigh" ? true : false}
              />
              <label class="form-check-label" for="flexCheckDefault1">
                Low-High
              </label>
            </div>
          </li>
          <li className="form">
            {/* Descending */}
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                name="sort-descending"
                id="flexCheckDefault2"
                value="option2"
                onChange={() =>
                  filterDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "highToLow",
                  })
                }
                checked={sort === "highToLow" ? true : false}
              />
              <label class="form-check-label" for="flexCheckDefault2">
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
