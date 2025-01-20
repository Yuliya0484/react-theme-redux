import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/filtersSlice";

export const StatusFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filters.status);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));
  return (
    <div className={css.wrapper}>
      <Button
        onClick={() => handleFilterChange("all")}
        selected={filter === "all"}
      >
        All
      </Button>
      <Button
        selected={filter === "active"}
        onClick={() => handleFilterChange("active")}
      >
        Active
      </Button>
      <Button
        selected={filter === "completed"}
        onClick={() => handleFilterChange("completed")}
      >
        Completed
      </Button>
    </div>
  );
};
