export default function DragDrop(props) {
  const { children, index, items, setItemsAfterDrop } = props;

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    // Get the dragged and target indices
    const draggedItemIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    const targetItemIndex = parseInt(e.currentTarget.dataset.index, 10);

    // Ensure both indices are valid
    if (isNaN(draggedItemIndex) || isNaN(targetItemIndex)) {
      console.error("Invalid index detected.");
      return;
    }

    // Clone the tasks array to avoid mutating state directly
    const newItems = [...items];

    // Swap the dragged and target items
    const temp = newItems[draggedItemIndex];
    newItems[draggedItemIndex] = newItems[targetItemIndex];
    newItems[targetItemIndex] = temp;

    // Update the items using the function setItemsAfterDrop provided as props
    setItemsAfterDrop(newItems);
  };

  return (
    <div
      key={index}
      draggable
      data-index={index}
      onDragStart={(e) => handleDragStart(e, index)}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="cursor-pointer"
    >
      {children}
    </div>
  );
}
