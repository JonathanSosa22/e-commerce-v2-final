import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import { filterProductsThunk } from "../store/slices/products.slice";
import { useDispatch } from "react-redux";

const FiltersCategories = ({ categoriesList, scrollToTop }) => {
  const dispatch = useDispatch();

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="filters">
      <DropDown header="Price range">
        <form className="price-filter">
          <label>
            <span>From</span>
            <input type="number" />
          </label>
          <label>
            <span>To</span>
            <input type="number" />
          </label>
          <button>Set range</button>
        </form>
      </DropDown>
      <DropDown header="Category">
        <ul className="category-filter">
          <li>
            <Link onClick={refreshPage}>All</Link>
          </li>
          {categoriesList.map((category) => (
            <li onClick={scrollToTop} key={category.id}>
              <Link onClick={() => dispatch(filterProductsThunk(category.id))}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </DropDown>
    </div>
  );
};

export default FiltersCategories;
