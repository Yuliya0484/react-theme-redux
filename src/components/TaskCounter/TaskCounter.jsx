import css from "./TaskCounter.module.css";

export const TaskCounter = () => {
  return (
    <div className={css.box}>
      <p className={css.text}>Active: 0</p>
      <p>Completed: 0</p>
    </div>
  );
};
