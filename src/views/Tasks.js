import Task from "./Task";

export default function Tasks(props) {
  const { tasks, listIndex } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
      }}
    >
      {tasks.map((task, taskIndex) => (
        <Task task={task} taskIndex={taskIndex} listIndex={listIndex} />
      ))}
    </div>
  );
}
