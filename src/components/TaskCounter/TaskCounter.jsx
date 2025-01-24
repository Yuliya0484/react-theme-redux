import css from "./TaskCounter.module.css";
import { useSelector } from "react-redux";
import { selectTaskCount } from "../../redux/selectors";

export const TaskCounter = () => {
  const count = useSelector(selectTaskCount);

  return (
    <div className={css.box}>
      <p className={css.text}>Active: {count.active}</p>
      <p>Completed: {count.completed}</p>
    </div>
  );
};
