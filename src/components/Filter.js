import { useContext } from "react";
import { DataContext } from "../context/DataProduct";
import "../assets/styles/filter.css";
const Filter = () => {
  const {
    state: { sort },
    dispatch,
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
          {!sort ? "Price" : sort}
          <i class="fas fa-angle-down icon"></i>
        </span>

        <ul className="dropdown-menu">
          <li className="form">
            {/* Ascending */}
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                name="sort-ascending"
                id="flexCheckDefault1"
                value="option1"
                onChange={() =>
                  dispatch({
                    type: "SORT_BY_PRICE",
                    payload: "Low-High",
                  })
                }
                checked={sort === "Low-High" ? true : false}
              />
              <label class="form-check-label f-menu" for="flexCheckDefault1">
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
                  dispatch({
                    type: "SORT_BY_PRICE",
                    payload: "High-Low",
                  })
                }
                checked={sort === "High-Low" ? true : false}
              />
              <label class="form-check-label f-menu" for="flexCheckDefault2">
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
