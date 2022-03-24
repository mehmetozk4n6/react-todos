import React from "react";

function ShowList({ tasks, setTasks }) {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <div className="showList">
              <input
                type="checkbox"
                checked={task.done}
                onChange={(e) =>
                  setTasks(
                    tasks.map((el) =>
                      el.text === task.text
                        ? { ...el, done: e.target.checked }
                        : el
                    )
                  )
                }
              />
              <input
                type="text"
                value={task.text}
                className={task.done ? "linedtext" : ""}
                onChange={(e) =>
                  setTasks(
                    tasks.map((el) =>
                      el.text === task.text
                        ? { ...el, text: e.target.value }
                        : el
                    )
                  )
                }
              />
              <button
                className="destroy"
                onClick={(e) =>
                  setTasks(tasks.filter((el) => el.text !== task.text))
                }
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowList;
