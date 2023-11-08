import React from "react";

const TodoItem = ({ todoItem, completeTask, removeTask, undoTask }) => {
  const { id, task, timestamp, isCompleted } = todoItem;

  return (
    <div className="item shadow" id={`todo-${id}`}>
      <div className="inner">
        <h2>{task}</h2>
        <p>{timestamp}</p>
      </div>
      {isCompleted ? (
        <>
          <button className="undo-button" onClick={() => undoTask(id)}></button>
          <button className="trash-button" onClick={() => removeTask(id)}></button>
        </>
      ) : (
        <button className="check-button" onClick={() => completeTask(id)}></button>
      )}
    </div>
  );
};

export default TodoItem;
