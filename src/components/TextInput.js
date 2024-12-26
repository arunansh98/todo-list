export default function TextInput(props) {
  let { className } = props;
  className = className + " h-[5rem] w-[25rem]";
  return <input {...props} className={className} />;
}
