export default function Tasks(props) {
  const { tasks } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
      }}
    >
      {tasks.map((task) => (
        <div
          style={{
            height: "5rem",
            width: "100%",
            borderStyle: "solid",
            borderColor: "black",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            Name is <b>{task.name}</b>
          </div>
          <div>
            Description is <b>{task.desc}</b>
          </div>
        </div>
      ))}
    </div>
  );
}
