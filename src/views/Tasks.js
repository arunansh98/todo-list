import Task from "./Task";

export default function Tasks(props) {
  const { tasks, listIndex } = props;

  return (
    <div className="flex flex-col gap-[1rem] w-[100%]">
      {tasks.map((task, taskIndex) => (
        <Task task={task} taskIndex={taskIndex} listIndex={listIndex} />
      ))}
    </div>
  );
}
